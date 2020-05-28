<?php
    require 'connection.php';
    $id = $_GET['id'];
    $sql = "SELECT * FROM my_table WHERE id = $id";

    $result = mysqli_query($conn, $sql);
    $fetch = mysqli_fetch_assoc($result);
    // print_r($fetch);
?>
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
    <div class="container">
        <?php echo $fetch['title'] ?>
        <br>
        <?php echo $fetch['id'] ?>
        <br>
        <?php echo $fetch['created_at'] ?>
    </div>
</body>
</html>