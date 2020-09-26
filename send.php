<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$form = $_POST['form'];

$contactName = $_POST['contact-name'];
$contactEmail = $_POST['contact-email'];
$contactWebsite = $_POST['contact-website'];
$contactMessage = $_POST['contact-message'];

// Формирование самого письма для формы newsletter из подвала
if ($form == 'footer-form') {
  $title = "Подписка на сайте Videograph";
  $body = "
  <h3>Новая подписка</h3>
  <b>Email:</b> $email<br>
  ";
};

// Формирование самого письма для формы со страницы contact
if ($form == 'contact-form') {
  $title = "Новое сообщение на сайте Videograph";
  $body = "
  <h3>Новое сообщение</h3>
  <b>Имя:</b> $contactName<br>
  <b>Email:</b> $contactEmail<br>
  <b>Website:</b> $contactWebsite<br>
  <b>Сообщение:</b> $contactMessage<br>
  ";
};

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'from@gmail.com'; // Логин на почте
    $mail->Password   = 'password'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('from@gmail.com', 'Jack Shepard'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('to@gmail.com');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if ($form == 'footer-form') {
  header('Location: phpmailer-newsletter.html');
};
if ($form == 'contact-form') {
  header('Location: phpmailer-contact.html');
};

//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);