<?php

declare(strict_types=1);
require_once __DIR__ . '/mysql_connect.php';

api_headers(['GET']);
$db = db_connect();

try {
    $result = $db->query(
        "SELECT id, slug, category, title, image, description, status, published_date, created_date
         FROM cw_news
         WHERE status = 'published'
         ORDER BY published_date DESC"
    );
    $news = [];
    while ($row = $result->fetch_assoc()) {
        $row['id'] = (int) $row['id'];
        $news[] = $row;
    }
    header('Cache-Control: public, max-age=60');
    echo json_encode($news, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
} catch (Throwable $e) {
    error_log('get_news failed: ' . $e->getMessage());
    json_fail(500, 'Could not load news.');
}
