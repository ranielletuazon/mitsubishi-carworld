<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");

require_once __DIR__ . '/mysql_connect.php';

$result = mysqli_query($db, "SELECT id, name, variant, price, category, image, slug FROM cw_vehicles ORDER BY id ASC");

$vehicles = [];
while ($row = mysqli_fetch_assoc($result)) {
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

echo json_encode($vehicles);
