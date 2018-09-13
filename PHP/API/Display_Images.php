<?php
if(!empty($_GET['location'])){
    $maps_url = 'https://' .
        'maps.googleapis.com/' .
        'maps/api/geocode/json' .
        '?address=' . urlencode($_GET['location']);
    $maps_json = file_get_contents($maps_url);
    $maps_array = json_decode($maps_json, true);
    $lat = $maps_array['results'][0]['geometry']['location']['lat'];
    $lng = $maps_array['results'][0]['geometry']['location']['lng'];

    $url = 'https://' .
        'api.instagram.com/v1/media/search' .
        '?lat=' . $lat .
        '&lng=' . $lng .
        '&client_id= 59cd273f121d4139b97a8a027a993ddf';
    $json = file_get_contents($url);
    $array = json_decode($json, true);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Display Images</title>
</head>
<body>
    <form action="">
        <input type="text" name = "location">
        <button type = "submit">Submit</button>
        <br>
        <?php
        if(!empty($instagram_array)){
	        foreach($instagram_array['data'] as $image){
	            echo '<img src ="'
	            .$image['images']['low_resolution']['url'].'"
	            alt=""/>';
	        }
        }
        ?>
    </form>
</body>
</html>