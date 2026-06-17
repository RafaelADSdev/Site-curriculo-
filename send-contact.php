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

if (
    !defined('CONTACT_EMAIL_TO') || CONTACT_EMAIL_TO === '' || CONTACT_EMAIL_TO === 'seu-email@gmail.com' ||
    !defined('CONTACT_EMAIL_FROM') || CONTACT_EMAIL_FROM === '' || CONTACT_EMAIL_FROM === 'seu-email@seudominio.com'
) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Invalid server configuration']);
    exit;
}

$recipientList = array_values(array_filter(array_map('trim', explode(',', CONTACT_EMAIL_TO))));
$validRecipients = array_filter($recipientList, static fn (string $address) => filter_var($address, FILTER_VALIDATE_EMAIL));

if ($validRecipients === []) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Invalid server configuration']);
    exit;
}

$mailTo = implode(', ', $validRecipients);

if (!empty($_POST['botcheck'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid submission']);
    exit;
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$subject = trim((string) ($_POST['subject'] ?? 'Nova mensagem pelo site'));
$fromName = defined('CONTACT_FROM_NAME') ? CONTACT_FROM_NAME : 'Site';

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid form data']);
    exit;
}

if (!function_exists('mail')) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail function is not available on this server']);
    exit;
}

$mailSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$body = "Nome: {$name}\r\n";
$body .= "E-mail: {$email}\r\n\r\n";
$body .= "Mensagem:\r\n{$message}\r\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: ' . $fromName . ' <' . CONTACT_EMAIL_FROM . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($mailTo, $mailSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Could not send email']);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
