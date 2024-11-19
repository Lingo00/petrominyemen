<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit();
}
include('includes/db.php');
?>
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لوحة التحكم</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <h1>مرحبًا بك في لوحة التحكم</h1>
    <a href="logout.php">تسجيل الخروج</a>
</body>
</html>