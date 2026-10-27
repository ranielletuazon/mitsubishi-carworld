<?php

declare(strict_types=1);
require_once __DIR__ . '/mysql_connect.php';

api_headers(['GET']);
$db = db_connect();

try {
    $result = $db->query(
        'SELECT id, name, variant, price, category, image, slug FROM cw_vehicles ORDER BY id ASC'
    );
    $vehicles = [];
    while ($row = $result->fetch_assoc()) {
        $vehicles[] = [
            'id'       => (int) $row['id'],
            'name'     => $row['name'],
            'variant'  => $row['variant'],
            'price'    => (float) $row['price'],
            'category' => $row['category'],
            'image'    => $row['image'],
            'slug'     => $row['slug'],
        ];
    }
    header('Cache-Control: public, max-age=60');
    echo json_encode($vehicles, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
} catch (Throwable $e) {
    error_log('get_vehicles failed: ' . $e->getMessage());
    json_fail(500, 'Could not load vehicles.');
}
