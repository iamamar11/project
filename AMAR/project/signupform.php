
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Sign up</title>
    
    <style>
      .my-form{
        display: grid; 
        align-items: center;
        height: max-content;
        padding: 15px;
        background-color: #F3F3F3;
        width: 50%;
        margin: 8% auto;
      }

      legend{
          text-align: center;
          color: red;
          font-size: 18px;
      }
      h4, h6{
          text-align: center;
          width: 100%;
      }
      .submit{
          text-align: center;
          margin: 10px 0px;
      }
      span{
          color: RED;
      }
      /* .form-row{
        background: red;
        margin-left: 150px;
      } */
    </style>
</head>
<body>
 
<div class="container my-form">
  <form class="container" method="GET" action="signupform.php">
    <h4>Sign Up</h4>
    <legend><?php require 'validation.php';?></legend>
    <!-- <div class="form-row"> -->
      <div class="form-group col-lg-12">
        <label for="inputEmail4">Email</label>
        <input class="form-control" name="email" id="inputEmail4" placeholder="Email" value = "<?php echo $email; ?>" >
        <span><?php echo $ERROR['email']?> </span>
      </div>
      <div class="form-group col-lg-12">
        <label for="inputPassword4">password</label>
        <input type="password" class="form-control" name="username" id="inputPassword4" placeholder="password" value="<?php echo $username ?>">
        <span><?php echo $ERROR['username'] ?></span>
      </div>
    <!-- </div> -->
    <!-- <div class="form-row"> -->
    <div class="form-group col-lg-12">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" name="address" id="inputAddress" placeholder="1234 Main St" value="<?php echo $address ?>">
    </div>
      <div class="form-group col-lg-12">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" name="city" id="inputCity" value="<?php echo $city ?>">
        <span><?php echo $ERROR['city']?> </span>
      </div>
      <h6>Already a member? <a href="login.php">Log In</a></h6>
    <!-- </div> -->
    <div class="form-group col-lg-12 submit">
      <button type="submit" name="submit" value="SUCCESS" class="btn btn-primary">Sign up</button>
    </div>
  </form>
</div>         

</div>
</body>
</html>