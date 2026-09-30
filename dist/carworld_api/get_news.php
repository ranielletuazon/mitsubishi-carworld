<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");

require_once __DIR__ . '/mysql_connect.php';

$result = mysqli_query(
    $db,
    "SELECT id, slug, category, title, image, description, status, published_date, created_date
     FROM cw_news
     WHERE status = 'published'
     ORDER BY published_date DESC"
);

$news = [];
while ($row = mysqli_fetch_assoc($result)) {
    $news[] = [
        'id'              => (int) $row['id'],
        'slug'            => $row['slug'],
        'category'        => $row['category'],
        'title'           => $row['title'],
        'image'           => $row['image'],
        'description'     => $row['description'],
        'status'          => $row['status'],
        'published_date'  => $row['published_date'],
        'created_date'    => $row['created_date'],
    ];
}

echo json_encode($news);
