<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $text = $_POST["text"];

    // Формирование сообщения
    $message = "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Описание: $text\n";


    // Настройка заголовков письма
    $headers = "903000@list.ru"; // Замените на ваш адрес электронной почты
    $subject = "Новая заявка с форма Остались вопросы";

    // Отправка письма
    if (mail("903000@list.ru", $subject, $message, $headers)) {
        echo "Ваша заявка успешно отправлена.";
    } else {
        echo "Ошибка при отправке заявки.";
    }
}
?>


