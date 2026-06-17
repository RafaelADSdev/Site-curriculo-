<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server configuration missing']);
    exit;
}

require $configFile;

if (!defined('WEB3FORMS_ACCESS_KEY') || WEB3FORMS_ACCESS_KEY === '' || WEB3FORMS_ACCESS_KEY === 'SUA_ACCESS_KEY_AQUI') {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Invalid server configuration']);
    exit;
}

if (!empty($_POST['botcheck'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid submission']);
    exit;
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$subject = trim((string) ($_POST['subject'] ?? 'Nova mensagem pelo site'));
$fromName = trim((string) ($_POST['from_name'] ?? 'Site'));

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid form data']);
    exit;
}

$payload = http_build_query([
    'access_key' => WEB3FORMS_ACCESS_KEY,
    'name' => $name,
    'email' => $email,
    'message' => $message,
    'subject' => $subject,
    'from_name' => $fromName,
]);

if (!function_exists('curl_init')) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'cURL is not available on this server']);
    exit;
}

$ch = curl_init('https://api.web3forms.com/submit');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Accept: application/json', 'Content-Type: application/x-www-form-urlencoded'],
    CURLOPT_TIMEOUT => 20,
]);

$response = curl_exec($ch);
$httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false) {
    http_response_code(502);
    echo json_encode(['success' => false, 'message' => $curlError !== '' ? $curlError : 'Could not reach email service']);
    exit;
}

http_response_code($httpCode >= 400 ? $httpCode : 200);
echo $response;
