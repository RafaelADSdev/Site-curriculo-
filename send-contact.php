<?php
declare(strict_types=1);

function contactResponse(int $status, string $code, string $message): never
{
    http_response_code($status);
    header('Cache-Control: no-store');
    header('Vary: Accept');
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';

    if (str_contains($accept, 'text/html') && !str_contains($accept, 'application/json')) {
        header('Content-Type: text/html; charset=utf-8');
        $notice = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
        echo <<<HTML
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Contato | Rafael Arcanjo</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <main class="contact">
                <div class="shell">
                    <h1>Formulário de contato</h1>
                    <p class="contact-intro">$notice</p>
                    <div class="contact-links">
                        <a href="index.html#contact-message" class="button button-outline">Voltar ao formulário</a>
                        <a href="mailto:rafaelarcanjods05@gmail.com" class="text-link">Contato por e-mail</a>
                    </div>
                </div>
            </main>
        </body>
        </html>
        HTML;
        exit;
    }

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'success' => $status === 200,
        'code' => $code,
        'message' => $message,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

function contactField(string $field): string
{
    $value = $_POST[$field] ?? '';
    return is_string($value) ? trim($value) : '';
}

function contactSetting(string $key): string
{
    $value = getenv($key);
    if ($value === false && defined($key)) {
        $value = constant($key);
    }
    return is_string($value) ? trim($value) : '';
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    contactResponse(405, 'method_not_allowed', 'Use o formulário de contato para enviar uma mensagem.');
}

$name = contactField('name');
$email = contactField('email');
$message = contactField('message');

if (
    isset($_POST['botcheck'])
    || !preg_match('/\A[^\p{Cc}]{1,120}\z/u', $name)
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || strlen($email) > 254
    || !preg_match('/\A.{1,4000}\z/us', $message)
) {
    contactResponse(422, 'invalid_fields', 'Confira o nome, o e-mail e a mensagem e tente novamente.');
}

$configFile = __DIR__ . '/config.php';
if (is_file($configFile)) {
    require $configFile;
}
$from = contactSetting('CONTACT_EMAIL_FROM');
$recipients = array_map('trim', explode(',', contactSetting('CONTACT_EMAIL_TO')));
$fromName = contactSetting('CONTACT_FROM_NAME') ?: 'Site Rafael Arcanjo';

if (
    !function_exists('mail')
    || !filter_var($from, FILTER_VALIDATE_EMAIL)
    || $from === 'seu-email@seudominio.com'
    || in_array('seu-email@gmail.com', $recipients, true)
    || count(array_filter($recipients, static fn (string $address) => filter_var($address, FILTER_VALIDATE_EMAIL))) !== count($recipients)
) {
    error_log('Contact form: missing or invalid mail configuration.');
    contactResponse(503, 'unavailable', 'O envio pelo formulário está indisponível. Você também pode entrar em contato por e-mail.');
}

$body = "Nome: {$name}\r\nE-mail: {$email}\r\n\r\nMensagem:\r\n{$message}\r\n";
$headers = [
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => 'base64',
    'From' => '=?UTF-8?B?' . base64_encode($fromName) . '?= <' . $from . '>',
    'Reply-To' => $email,
];
$subject = '=?UTF-8?B?' . base64_encode('Novo contato pelo portfólio') . '?=';
$sent = @mail(implode(', ', $recipients), $subject, chunk_split(base64_encode($body), 68), $headers);

if (!$sent) {
    error_log('Contact form: mail transport did not accept the message.');
    contactResponse(503, 'unavailable', 'O envio pelo formulário está indisponível. Você também pode entrar em contato por e-mail.');
}

if (PHP_SAPI === 'cli-server' && getenv('CONTACT_PREVIEW') === '1' && ini_get('SMTP') === '127.0.0.1') {
    contactResponse(200, 'preview_received', 'Mensagem recebida na caixa de teste desta prévia.');
}

contactResponse(200, 'sent', 'Mensagem enviada. Obrigado pelo contato!');
