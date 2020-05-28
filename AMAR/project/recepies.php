<?php session_start();
    if(empty($_SESSION)){
        header('Location: login.php?error="loginfirst"');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Document</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .recepieList{
            display: grid;
            grid-template-columns: repeat(2, minmax(300px, 1fr));
        }
        .myRecepies{
            height: min-content;
            border-radius: 15px;
            background-color: #F6E1B8;
            padding: 10px;
            margin: 10px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            /* border-radius: 15px; */
        }
        .myRecepies:hover{
            transform: scale(1.01);
            transition: .7s ease;
        }
        .info{           
            margin: 15px;
        }
        a:hover a{
            color: white;
        }
        figure{
            height: 200px;
            width: 200px;
            justify-self: end;
        }
        .myimage{
            height: 90%;
            width: 90%;
            border: 2px solid black;
            border-radius: 10px;
        }
        span{
            color: gray;
        }
        main{
            background-color: #f3f3f3;
            min-height: 100vh;
            height: auto;
            color: black;
        }
    </style>
</head>
<body>
    <main>
        <div class=".container">
            <?php require 'index.php';?>
             
            <?php 
            require 'ingridient/getrecepie.php';
            // print_r($fetch);
            ?>
            <section class="recepieList">
            <?php foreach($fetch as $items){?>
                <article class='myRecepies'>
                    <article class="info">
                        <h3>Dish Name : <?php echo $items['rname']; ?></h3>
                        <h6>Ingridients : <?php echo $items['choice']; ?></h6>
                        <h6>Instructions : <?php echo $items['des']; ?></h6>
                        <span>Posted By :<?php echo $items['user'] ?></span>
                    </article>
                    <figure>
                        <?php echo "<img class = 'myimage' src = 'image/dish/".$items['photo']."'>";?>
                    </figure>
                </article>               
            <?php }//end of foreach  ?>
            </section>
        </div>
    </main>
</body>
</html>