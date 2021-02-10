<?php
	session_start();
	$useremail=$password="";
	$errors=array();
	$db=mysqli_connect('localhost','root','','test');
	if(isset($_POST['login_user'])){
		$useremail=mysqli_real_escape_string($db,$_POST['useremail']);
		$password=mysqli_real_escape_string($db,$_POST['password']);
		$password=md5($password);
		$select_query="SELECT * FROM user WHERE email='$useremail' AND password='$password'";
		$results = mysqli_query($db, $select_query);
  		if (mysqli_num_rows($results) == 1) {
  	 		$_SESSION['useremail'] = $useremail;
  		}else {
  			echo "Wrong username/password combination";
  		}
	}
?>