
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"  href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Document</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            
        }
        article,  dialog, figcaption, figure, footer, header, hgroup, main {
          display: grid;
        }

        img{
            width:35px;
            margin: 10px 5px 0px 15px;
        }
        nav{
            display: grid;
            height: 7vh;
            grid-template-columns: 5% 2fr 1fr 5%;
            background-color: black;
        }
        .navList{
            height: 7vh;
            display: grid;
            grid-column: 3/4;
            list-style: none;
            grid-template-columns : repeat(auto-fit, minmax(100px ,1fr));
            justify-items: center;
            align-items: center;
        }
        .navList > li:hover{
            padding: 14px;
            position: relative;
            background-color: red;
            align-self: flex-end;
            justify-self: stretch;

        }
        a{
            color: white;
            text-decoration: none;
        }
        a:hover{
            text-decoration: none;
            color: white
        }
        .btn:hover{
            background-color: white;
            color: black;
            transition: .7s ease;
        }
        .user:hover{
            background-color: #F3F3F3;
            padding: 5px 20px;
            border-radius: 25px;
        }
        .dropdown{
            list-style: none;
            position: absolute;
            padding: 13px 10px;
            
            
        }
        .dropdown li{
            display: block;
            width: 200px;
            text-align: center;
            background-color: #333333;
            line-height: 40px;
            display: none;
        }
        .dropdown li:hover{
            background-color: red;
            
        }
        .drop:hover li{
            display: block

        }

        
    </style>
</head>
<body>
    <nav>
        <img src="image/favicon.png" alt="logo">
        <ul class= "navList">
            <li><a href="recepie.php" >CREATE RECEPIE</a></li>
            <li><a href="recepies.php" >ALL RECPIES</a></li>
            <li class ="drop"><a href="#" >ACCOUNT</a>
                <ul class= dropdown>
                    <li><a href="#"><?php echo $_SESSION['email'];?></a></li>
                    <li><a href="logout.php">Logout</a></li>
                </ul>
            </li>
            <!-- <span class="user"><?php
             if(empty($_SESSION['email'])){
                echo "GUEST";
            }else{
                echo $_SESSION['email'];
             }            
            ?></span> -->
        </ul>
    </nav>
</body>
</html>