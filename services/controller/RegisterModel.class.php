<?php
class RegisterModel
{
    private $pdo;
    public function __construct() {
        $dsn = 'mysql:host=localhost; port=3308; charset=utf8; dbname=kcsoft';
        $username = 'root';
        $this->pdo = new PDO($dsn,$username,'');
    }

    public function register($stuData) {
        $sql = 'insert into user_table (name,student_id,telephone_number,college_number,major_number,class_number,group_selection) values (';
        $sql .= "'{$stuData['name']}','{$stuData['student_id']}','{$stuData['telephone_number']}',{$stuData['college_number']},{$stuData['major_number']},{$stuData['class_number']},{$stuData['group_selection']});";

        $PDOStatement = $this->pdo->exec($sql);

        return $PDOStatement;
    }
}