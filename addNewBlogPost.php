<html>
	<head>
	</head>
	<body>
		<?php if(isset($_POST['addblog']==1)){?>
		<h2> Add New blog post</h2>
		<label>Title</label><input type="text" name="title">
		<label>Content</label><textarea cols="20" rows="5" name="title"></textarea>
		<label>URL</label><input type="url" name="url">
		<label>Published at</label><input type="date" name="published_at">
		<label>Category</label><select name="category" size="4" multiple>
			<option value="lifestyle">Lifestyle</option>
  <option value="health">Health</option>
  <option value="education">Education</option>
  <option value="music">Music</option>
		</select>
		<label>Image</label><input type="file" name="image" accept="image/*">Upload image</input>
	<?php }else{ echo 'wrong link ';}?>
	</body>
</html>
