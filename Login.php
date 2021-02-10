<?php include('validate.php');?>
<html>
<head>
	<link rel="stylesheet" href="loginCss.css">
</head>
<body>
		<div class="header">
			<h2>Login</h2>
		</div>
	<form action="blogspot.php" method="POST">
		<div class="one">
			<label name="email">Email</label>
			<input type="email" name="useremail" required>
		</div>
		<div class="one">
			<label name="password">Password</label>
			<input type="password" name="password" required>
		</div>
		<button class="btn" type="submit" name="login_user">Login</button>
		<a href="register.php">
			<button class="btn" type="button" name="register_user">Register</button>
		</a>
	</form>
</body>
</html>