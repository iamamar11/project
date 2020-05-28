<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/form.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>LOGIN</title>
    <style>
        span{
            color: RED;
        }
        legend{
            font-size: 16px;
            color: RED;
        }
        form{
            width: 50%;
            margin: 0 auto;
        }

    </style>
</head>
<body>
    <div class="container my-form">
       <form action="<?php $_SERVER['PHP_SELF']?>" method="POST">
            <h4>Login to Website</h4>
            <legend><?php require 'loginvalidation.php'; echo $ERROR['login'];?></legend>
            <div class="form-group col-lg-12">
            <label for="inputEmail4">Email</label>
            <input class="form-control" name="email" id="inputEmail4" placeholder="Email" value="<?php echo $emailfill ?>"  >
            <span><?php echo $ERROR['email']?> </span>
            </div>
            <div class="form-group col-lg-12">
            <label for="inputPassword4">password</label>
            <input type="password" class="form-control" name="password"  placeholder="password">
            <span><?php echo $ERROR['password']?> </span>
            </div>
            <h6>New User? <a href="signupform.php">Sign Up</a></h6>
            
            <div class="submit">
                <button type="submit" name="submit" value="done" class="btn btn-success">Login</button>
            </div>
            <br>
       </form>
    </div>
</body>
</html>