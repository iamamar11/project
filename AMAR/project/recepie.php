<?php session_start();
    if(empty($_SESSION)){
        header('Location: login.php?error="loginfirst"');
    }
?>
<?php  require 'ingridient/adddata.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/24326faed9.js" crossorigin="anonymous"></script>
    <title>Recepie</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        label{
            text-align: center;
        }
        main{

            padding: 20px;
            display: grid;
            grid-template-columns: 1fr 3fr;
            background-color: #f3f3f3;
            

        }
        .leftaside{
            padding: 10px;
            border-radius: 15px;
            background-color: #f6e1b8;
        }
        .rightaside{
            margin-left: 10px;
            padding: 10px;
            border-radius: 15px;
            background-color: #f6e1b8;
        }
        ul{
            list-style: none;
            margin: 10px ;
        }
        i{
            color: green;
            padding: 0px 5px;
            cursor: pointer;
        }
        .btn, input{
            display: block;
            width: 100%;
            padding: 5px;
        }
        .error{
            color: red;
        }
        .myrow{
            
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
        }
    </style>
</head>
<body>
    <div class=".container">
    <?php require 'index.php';?>
    <main>
        <aside class="leftaside">
           <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
                <label for="">write ingrident name and press ADD button</label>
                <input class="form-control" type="text" name="item" placeholder="Name" value="<?php echo $ingridient;?>">
                <span class="error"><?php echo $ERROR['ingr']; ?></span>
                <input class="form-control mt-2" type="text" name="des" placeholder="Description" value="<?php echo $description;?>">
                <span class="error"><?php echo $ERROR['des']; ?></span>
                <input class="btn btn-success mt-2" type="submit" name="add" value="Add">
            </form>
       
            <!-- injecting php code here -->
           <?php 
               
                require 'ingridient/showdata.php';
           ?>
        </aside>
        
        <aside class="rightaside" >

        <?php require 'ingridient/createrecepie.php'?>


            <h4>create your custom recepie</h4>

            <form action="recepie.php" method="POST" enctype="multipart/form-data">

                <input type="text"class="form-control" name="recepieName" placeholder="Recepie Name" value ="<?php echo $recepie;?>">
                <span class="error"><?php echo $ERROR['recepie']; ?></span>

                <select class="form-control my-3" name="multiple[]" multiple value ="<?php echo $choice;?>">
                    <?php require 'ingridient/select.php';
                        foreach($fetch as $element){?>
                            <option value="<?php echo $element['name']?>"><?php echo $element['name']." - (".$element['des'].")"; ?></option>
                    <?php } ?>
                </select>

                <span class="error"><?php echo $ERROR['choice']; ?></span>
                <textarea class="form-control my-3" name="instructions" cols="30" rows="5" placeholder="write the description here" value ="<?php echo $instructions;?>"></textarea>
                <span class="error"><?php echo $ERROR['instructions']; ?></span>
                <input type="file" name="upload" >
                <span class="error"><?php echo $ERROR['upload']; ?></span>
                <input class="btn btn-success" type="submit" name="create" value="SUCCESS">

            </form>
                     

        </aside>

       
        
   </main>
    </div>
</body>
</html>