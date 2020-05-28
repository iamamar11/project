<?php 
    require 'selectquery.php';
    print_r($content);
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <?php foreach($content as $rows): ?>
        <h3><?php echo $rows['title']; ?></h3>
        <button class="btn btn-warning my-2"><a href="display.php?id=<?php echo $rows['id'];?>">detials</a> </button>
    <?php endforeach;?>
</body>
</html>