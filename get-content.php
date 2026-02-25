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

$contentFile = 'data/content.json';

if (file_exists($contentFile)) {
    echo file_get_contents($contentFile);
} else {
    echo json_encode(['sections' => [], 'messages' => []], JSON_UNESCAPED_UNICODE);
}
die();
?>
