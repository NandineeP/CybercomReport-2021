<?php include('insertData.php');?>
<html>
	<head>
	<link rel="stylesheet" href="registerCss.css">
</head>
<body>
		<div class="header">
			<h2>Register</h2>
		</div>
	<form action="Login.php" method="POST">
		<div class="one">
			<label name="pre">Prefix</label>
			<select name="prefix" id="cars">
 			 	<option value="Mr">Mr.</option>
  				<option value="Miss">Miss</option>
  				<option value="Mrs">Mrs.</option>
  				<option value="Prof">Prof.</option>
			</select>
		</div>
		<div class="one">
			<label name="fname">First Name</label>
			<input type="text" name="firstname" required>
		</div>
		<div class="one">
			<label name="lname">Last Name</label>
			<input type="text" name="lastname" required>
		</div>
		<div class="one">
			<label name="mail">Email</label>
			<input type="email" name="email" required>
		</div>
		<div class="one">
			<label name="mnumber">Mobile Number</label>
			<input type="text" name="mobile" required>
		</div>
		<div class="one">
			<label name="pass">Password</label>
			<input type="password" name="password" required>
		</div>
		<div class="one">
			<label name="pass">Confirm Password</label>
			<input type="password" name="cPassword" required>
		</div>
		<div class="one">
			<label name="info">Information</label>
			<textarea name="information" cols="20" rows="5" required></textarea>
		</div>
		<div class="one">
			<input type="checkbox" name="agree" required>Hereby, I Accept Terms & Conditions
		</div>
		<button class="btn" type="submit" name="reg_user">submit</button>
	</form>
</body>
</html>