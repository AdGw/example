<!DOCTYPE html>
<html>
<head>
	<title>Cookie Injection</title>
</head>
<body>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis natus blanditiis minima alias numquam architecto quas neque distinctio quam, nisi enim. Vel voluptas ea voluptatibus in deleniti, veritatis tenetur consequuntur!
<?php
// warning, this function setcookie is dangerous because of injection

// setcookie("admin" , 1);
if (isset($_COOKIE['admin'])){
	echo 'Tresc widoczna dla admina';
}
// better use
if (isset($_COOKIE['name'])){
	echo 'Witaj ' . $_COOKIE['name'] ;
}
?>
</body>
</html>