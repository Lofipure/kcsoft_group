<?php
$dsn = 'mysql:host=localhost; port=3308; charset=utf8; dbname=kcsoft';
$username = 'root';
$pdo = new PDO($dsn,$username,'');

$type = $_GET['type'];

if($type == 'college') {
    $sql = 'select * from college_table;';
} elseif ($type == 'major') {
    $major_code = $_GET['collegecode'];
    $sql = 'select * from major_table where belong_college_code='.$major_code.';';
}

$PDOStatement = $pdo->prepare($sql);
$PDOStatement->execute();
$data = $PDOStatement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);