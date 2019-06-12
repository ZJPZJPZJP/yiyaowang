<?php
include "conn.php";
// if(isset($_POST['xingming'])){
// 	$name=$_POST['xingming'];
// 	$result=mysql_query("select * from zhuce where usename='$name'");
// 	if(mysql_fetch_array($result)){
// 		echo true;
// 	}else{
// 		echo false;
// 	}
// 		
// 	
// }
if(isset($_POST['submit'])){
	$name=$_POST['phone'];
	$password=sha1($_POST['password']);
	
	
	mysql_query("insert zhuce values(null,'$name','$password',NOW())");
	header("location:http://localhost/yiyaowang/src/denglu.html");
	
}
?>