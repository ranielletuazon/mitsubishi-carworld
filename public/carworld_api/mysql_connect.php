<?php

declare(strict_types=1);

// Never show PHP errors to visitors; log them instead.
ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

function require_config(): array
{
    $host = $_SERVER['SERVER_NAME'] ?? '';
    $isLocal = in_array($host, ['localhost', '127.0.0.1'], true);

    if ($isLocal) {
        // XAMPP defaults
        return [
            'db_host'         => 'localhost',
            'db_user'         => 'root',
            'db_pass'         => '',
            'db_name'         => 'db_carworld_react',
            'admin_secret'    => 'cw_9f2e7a1d4b6c8034ff21a5e9c7d3b0912ea4f88b3c1d5670abf1234567890ef',
            'allowed_origins' => ['http://localhost:5173'],
        ];
    }

    // cPanel (live)
    return [
        'db_host'         => 'localhost',
        'db_user'         => 'ranielletuazon',
        'db_pass'         => 'PUT-YOUR-LIVE-PASSWORD-HERE',
        'db_name'         => 'db_carworld_react',
        'admin_secret'    => 'cw_9f2e7a1d4b6c8034ff21a5e9c7d3b0912ea4f88b3c1d5670abf1234567890ef',
        'allowed_origins' => ['https://mitsubishicarworld.com.ph'],
    ];
}

function json_fail(int $code, string $message): never
{
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => $message]);
    exit;
}

function api_headers(array $methods): array
{
    $cfg = require_config();

    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    header('Referrer-Policy: no-referrer');

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin !== '' && in_array($origin, $cfg['allowed_origins'], true)) {
        header("Access-Control-Allow-Origin: $origin");
        header('Vary: Origin');
        header('Access-Control-Allow-Methods: ' . implode(', ', $methods) . ', OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
    }

    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
    if (!in_array($_SERVER['REQUEST_METHOD'] ?? '', $methods, true)) {
        header('Allow: ' . implode(', ', $methods));
        json_fail(405, 'Method not allowed.');
    }

    return $cfg;
}

function db_connect(): mysqli
{
    $cfg = require_config();
    try {
        $db = new mysqli($cfg['db_host'], $cfg['db_user'], $cfg['db_pass'], $cfg['db_name']);
        $db->set_charset('utf8mb4');
        return $db;
    } catch (mysqli_sql_exception $e) {
        error_log('carworld DB connect failed: ' . $e->getMessage());
        json_fail(500, 'Service temporarily unavailable.');
    }
}
