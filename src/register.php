<?php
/*包含模型类文件*/
require_once ('RegisterModel.class.php');

if(isset($_POST['token']) && $_POST['token'] == 'add') {
    $modelObj = new RegisterModel();
    $status = $modelObj->register($_POST);

    var_dump($status);
}
