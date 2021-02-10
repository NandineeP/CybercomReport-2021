<?php
	$perfix=$firstname=$lastname=$email=$mobile=$password=$cPassword=$information=$created_at="";
	$db=mysqli_connect('localhost','root','','test');
	$errors=array();
	if(isset($_POST['reg_user'])){
		$prefix=mysqli_real_escape_string($db,$_POST['prefix']);
		$firstname=mysqli_real_escape_string($db,$_POST['firstname']);
		$lastname=mysqli_real_escape_string($db,$_POST['lastname']);
		$email=mysqli_real_escape_string($db,$_POST['email']);
		$mobile=mysqli_real_escape_string($db,$_POST['mobile']);
		$password=mysqli_real_escape_string($db,$_POST['password']);
		$cPassword=mysqli_real_escape_string($db,$_POST['cPassword']);
		$information=mysqli_real_escape_string($db,$_POST['information']);
		if($password!=$cPassword){ 
			array_push($errors,"password do not match");
		}
		$email_check="SELECT * FROM user where email='$email' LIMIT 1";
		$result=mysqli_query($db,$email_check);
		$mail=mysqli_fetch_assoc($result);
		if($mail){
			if($mail['email']===$email){
				array_push($errors,"Email already exists");
			}
		}
		if(count($errors)==0){
		$password=md5($password);
		$start='0000-00-00 00:00:00';
		$created_at=date('Y-m-d H:i:s');
		$query="INSERT INTO user(perfix,firstname,lastname,mobile,email,password,last_login_at,information,created_at,updated_at) VALUES('$prefix','$firstname','$lastname','$mobile','$email','$password','$start','$information','$created_at','$start')";
		mysqli_query($db,$query);
	}
}
?>
<?php  if (count($errors) > 0) : ?>
  <div>
  	<?php foreach ($errors as $error) : ?>
  	  <p><?php echo $error ?></p>
  	<?php endforeach ?>
  </div>
<?php  endif ?>
