<html>
<head>
</head>
<body>
	<h2>Blog Posts</h2>
	<form method="POST">
		<button name="addblog" onclick="addNewBlogPost.php" value="1">Add Blog Post</button>
		<button onclick="manage_category.php">Manage category</button>
		<button onclick="myprofile.php">My profile</button>
		<button onclick="logout.php">log out</button>
	</form>
	<table border="2">
		<thead>
			<th>
				Post id
			</th>
			<th>
				category name
			</th>
			<th>
				title
			</th>
			<th>
				published date
			</th>
			<th>
				Actions
			</th>
		</thead>
		<?php
				$con=mysqli_connect('localhost','root','','test');
				$select_query="SELECT id,category,title,published_at FROM blog_post";
				$result=mysqli_query($con,$select_query);
				if(mysqli_num_rows($result)>0){
					while ($row=mysqli_fetch_assoc($result)) {
						echo "<tr><td>".$row['id']."</td><td>".$row['category']."</td><td>".$row['title']."</td><td>".$row['published_at']."</td><td><a href='edit.php'>edit</a> <a href='delete.php'>delete</a></td></tr>";
					}
				}
			?>
	</table>
</body>
</html>