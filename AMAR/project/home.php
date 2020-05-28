<?php 
  // important query to display the data on screen after fetching it from the database;
  require 'selectquery.php';?>

<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Document</title>
        <style>
        .box{
          width: 300px;
          height: 200px;
          background: #f3f3f3;
          display: inline-block;
          text-align: center;
          margin: 5px 5px;
          padding: 5px;
        }
        a{
          color: white;
          text-decoration: none;
        }
        a:hover{
          color: white;
          text-decoration: none;
        }
        </style>
</head>
<body>
        <div class="container">
          <h4>Getting value from the database</h4>
          <!-- loop to get data of each row -->
          <?php foreach($content as $element){ ?> 
              <div class="box">
                <h6><?php echo $element['title']; ?></h6>
                <button class="btn btn-info mt-5 mx-2"><a href="details.php?id=<?php echo $element['id']?>">DETAILS</a></button>
              </div>
           <?php }?>
</body>
</html>