<?php 
require 'connection.php';
    // check for get request id
    if(isset($_GET['id'])){
        $id = mysqli_real_escape_string($conn, $_GET['id']);
        $sql = "SELECT * FROM my_table WHERE id = $id";
        $result = mysqli_query($conn, $sql);
        
        //fetch the result from DATABASE
        $content = mysqli_fetch_array($result,MYSQLI_ASSOC);
        print_r($content);
        mysqli_free_result($result);
        mysqli_close($conn);

        // print_r($content);
    }

    // to delete the records
    if(isset($_POST['delete'])){
        $id_to_delete = mysqli_real_escape_string($conn, $_POST['id_to_delete']);
        $sql = "DELETE FROM my_table WHERE id = $id_to_delete";
        
        if(!mysqli_query($conn, $sql)){
            echo "ERROR :".mysqli_error($conn);
        }else{
            header('Location: config.php');
        }
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Detials</title>
    <style>
        .Box{
            height: 25vh;
            width: 100%;
            background-color: #f3f3f3;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
    <h3>DETIALS ABOUT THE PRODUCTS</h3>
       <div class="Box">
           <h6><?php echo htmlspecialchars($content['email']); ?></h6>
           <h6><?php echo htmlspecialchars($content['address']); ?></h6>
           <h6><?php echo htmlspecialchars($content['id']); ?></h6>

           <!-- delete form  -->
           <form action="details.php" method="POST">
               <input type="text" name="id_to_delete" value= <?php echo $_GET['id']?>
               <br>
               <input type="submit" class="btn btn-danger mt-2" name="delete" value="delete">
           </form>
       </div>
    </div>
</body>
</html>