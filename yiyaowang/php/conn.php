<?php
header('conten-type:text/html;charset=utf-8');
define('HOST','localhost');
define('USENAME','root');
define('PASSWORD','');
$conn=@mysql_connect(HOST,USENAME,PASSWORD);
mysql_select_db('yyw');
mysql_query('SET NAMES UTF8');






?>






