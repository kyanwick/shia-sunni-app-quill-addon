<?php
// CORS headers MUST be first - no whitespace before
@header("Access-Control-Allow-Origin: *");
@header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
@header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
@header("Content-Type: application/json; charset=UTF-8");

// Handle OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Only POST allowed']);
    die();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!isset($data['password']) || $data['password'] !== 'password') {
    echo json_encode(['success' => false, 'error' => 'Invalid password']);
    die();
}

if (!isset($data['content'])) {
    echo json_encode(['success' => false, 'error' => 'No content']);
    die();
}

$dataDir = 'data';
if (!file_exists($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

$contentFile = $dataDir . '/content.json';
$result = file_put_contents($contentFile, json_encode($data['content'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

if ($result !== false) {
    echo json_encode(['success' => true, 'message' => 'Saved']);
} else {
    echo json_encode(['success' => false, 'error' => 'Save failed']);
}
die();
?>
