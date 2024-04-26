<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
$servername = "localhost";
$username = "malestick";
$password = "ma465";
$dbname = "malestick";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$login = $_POST['login'];
$password = $_POST['password'];
$tel = $_POST['tel'];
$mail = $_POST['mail'];
$sex = $_POST['sex'];


// Проверка на соответствие требованиям пароля
if (!preg_match('/^(?=.\d)(?=.[a-z].[a-z])(?=.[A-Z])(?=.*[^a-zA-Z\d]{3}).{12,24}$/', $password)) {
    $missingElements = [];

    if (!preg_match('/\d/', $password)) {
        $missingElements[] = 'цифр не менее 1';
    }
    if (!preg_match('/.*[a-z].*[a-z]/', $password)) {
    $missingElements[] = 'латинских букв не менее 2';
    }
    if (!preg_match('/[A-Z]/', $password)) {
    $missingElements[] = 'заглавных латинских букв не менее 0';
    }
    if (!preg_match('/[^a-zA-Z0-9]{3}/', $password)) {
        $missingElements[] = 'специальных символов не менее 3 (!\/* и т.д.)';
    }
    if (!preg_match('/^.{12,24}$/', $password)) {
    $missingElements[] = 'длина пароля от 12 до 24 символов';
    }

    if (!empty($missingElements)) {
        $errorMessage = 'Пароль не соответствует требованиям. Не хватает: ' . implode('; ', $missingElements);
        die($errorMessage);
    }
    
}


// Проверка срока жизни пароля

// Хэширование пароля с использованием CRYPT_STD_DES
$hashed_password = crypt($password, '$6$rounds=5000$mysalt$');

// SQL запрос для вставки данных в таблицу usersam
$sql = "INSERT INTO usersam (name, login, password, tel, mail, role, sex) VALUES ('$name', '$login', '$hashed_password', '$tel', '$mail', 'пользователь', '$sex')";

if ($conn->query($sql) === TRUE) {
    echo "Данные добавлены успешно!";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>