<?php

declare(strict_types=1);
require_once __DIR__ . '/mysql_connect.php';

$cfg = api_headers(['POST']);

if (!hash_equals($cfg['admin_secret'], (string) ($_POST['admin_secret'] ?? ''))) {
    usleep(300000);
    json_fail(401, 'Unauthorized.');
}

$category      = trim((string) ($_POST['category'] ?? ''));
$title         = trim((string) ($_POST['title'] ?? ''));
$description   = trim((string) ($_POST['description'] ?? ''));
$status        = (string) ($_POST['status'] ?? 'draft');
$publishedDate = (string) ($_POST['published_date'] ?? '');

if ($category === '' || $title === '' || $publishedDate === '') {
    json_fail(400, 'Category, title, and published date are required.');
}
if (mb_strlen($category) > 50 || mb_strlen($title) > 200 || mb_strlen($description) > 10000) {
    json_fail(400, 'One or more fields are too long.');
}
if (!in_array($status, ['draft', 'published'], true)) {
    json_fail(400, 'Invalid status.');
}
$d = DateTime::createFromFormat('Y-m-d', $publishedDate);
if (!$d || $d->format('Y-m-d') !== $publishedDate) {
    json_fail(400, 'Invalid published date.');
}

if (
    !isset($_FILES['image'])
    || !is_array($_FILES['image'])
    || $_FILES['image']['error'] !== UPLOAD_ERR_OK
    || !is_uploaded_file($_FILES['image']['tmp_name'])
) {
    json_fail(400, 'Image upload failed or missing.');
}
$file = $_FILES['image'];

if ($file['size'] > 5 * 1024 * 1024) {
    json_fail(400, 'Image must be under 5MB.');
}

$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo->file($file['tmp_name']);
$extByMime = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];

if (!isset($extByMime[$mime]) || @getimagesize($file['tmp_name']) === false) {
    json_fail(400, 'Only JPG, PNG, or WEBP images are allowed.');
}
$ext = $extByMime[$mime];

$slug = strtolower(trim((string) preg_replace('/[^a-z0-9]+/i', '-', $title), '-'));
$slug = substr($slug, 0, 120);
if ($slug === '') {
    $slug = 'post-' . bin2hex(random_bytes(3));
}
$safeFilename = $slug . '-' . bin2hex(random_bytes(6)) . '.' . $ext;

// Works on both XAMPP (C:\xampp\htdocs\carworld_api\news\images) and cPanel
$uploadDir = __DIR__ . '/news/images/';
if (!is_dir($uploadDir) && !mkdir($uploadDir, 0755, true) && !is_dir($uploadDir)) {
    error_log("post_news: cannot create $uploadDir");
    json_fail(500, 'Failed to save uploaded image.');
}

$target = $uploadDir . $safeFilename;
if (!move_uploaded_file($file['tmp_name'], $target)) {
    json_fail(500, 'Failed to save uploaded image.');
}
chmod($target, 0644);

$db = db_connect();
try {
    $stmt = $db->prepare(
        'INSERT INTO cw_news (slug, category, title, image, description, status, published_date)
         VALUES (?, ?, ?, ?, ?, ?, ?)'
    );
    $stmt->bind_param('sssssss', $slug, $category, $title, $safeFilename, $description, $status, $publishedDate);
    $stmt->execute();
} catch (mysqli_sql_exception $e) {
    @unlink($target);
    if ($e->getCode() === 1062) {
        json_fail(409, 'A news post with this title already exists. Please try a unique one.');
    }
    error_log('post_news insert failed: ' . $e->getMessage());
    json_fail(500, 'Database insert failed.');
}

echo json_encode(['status' => 'ok', 'slug' => $slug, 'image' => $safeFilename]);
