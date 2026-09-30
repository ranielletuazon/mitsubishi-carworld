<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

define('ADMIN_SECRET', 'cw_9f2e7a1d4b6c8034ff21a5e9c7d3b0912ea4f88b3c1d5670abf1234567890ef');

$providedSecret = $_POST['admin_secret'] ?? '';

if (!hash_equals(ADMIN_SECRET, $providedSecret)) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized.']);
    exit;
}

require_once __DIR__ . '/mysql_connect.php';

$category = trim($_POST['category'] ?? '');
$title = trim($_POST['title'] ?? '');
$description = trim($_POST['description'] ?? '');
$status = $_POST['status'] ?? 'draft';
$published_date = $_POST['published_date'] ?? null;

if (!$category || !$title || !$published_date) {
    http_response_code(400);
    echo json_encode(['error' => 'Category, title, and published date are required.']);
    exit;
}

if (!in_array($status, ['draft', 'published'], true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid status.']);
    exit;
}

if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'Image upload failed or missing.']);
    exit;
}

$file = $_FILES['image'];

$allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimeType = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if (!in_array($mimeType, $allowedTypes, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Only JPG, PNG, or WEBP images are allowed.']);
    exit;
}

$maxSize = 5 * 1024 * 1024;
if ($file['size'] > $maxSize) {
    http_response_code(400);
    echo json_encode(['error' => 'Image must be under 5MB.']);
    exit;
}

function slugify($text)
{
    $text = strtolower(trim($text));
    $text = preg_replace('/[^a-z0-9]+/', '-', $text);
    return trim($text, '-');
}

$slug = slugify($title);
$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
$allowedExt = ['jpg', 'jpeg', 'png', 'webp'];
if (!in_array($ext, $allowedExt, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid file extension.']);
    exit;
}

$safeFilename = $slug . '-' . time() . '.' . $ext;
$uploadDir = __DIR__ . '/news/images/';

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

if (!move_uploaded_file($file['tmp_name'], $uploadDir . $safeFilename)) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save uploaded image.']);
    exit;
}

$stmt = mysqli_prepare(
    $db,
    "INSERT INTO cw_news (slug, category, title, image, description, status, published_date)
     VALUES (?, ?, ?, ?, ?, ?, ?)"
);
mysqli_stmt_bind_param(
    $stmt,
    "sssssss",
    $slug,
    $category,
    $title,
    $safeFilename,
    $description,
    $status,
    $published_date
);

if (!mysqli_stmt_execute($stmt)) {
    if (mysqli_errno($db) === 1062) {
        http_response_code(409);
        echo json_encode([
            'error' => 'A news post with this title already exists. Please try a unique one.',
        ]);
        exit;
    }
    http_response_code(500);
    echo json_encode(['error' => 'Database insert failed.']);
    exit;
}

echo json_encode(['status' => 'ok', 'slug' => $slug, 'image' => $safeFilename]);
