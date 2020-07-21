<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salary</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="main">
        <form action="<?php $_SERVER['PHP_SELF'];?>" method="POST">
        <legend><?php require 'database.php';echo $ERROR['empty'];?></legend>
        <div class="row">
            <label for="hours">Hours Worked</label>
            <input type="text" name="hours" value="<?php echo $hrs?>" id="hours">
            <span><?php echo $ERROR['hours'];?></span>
        </div>  
        <div class="row">
            <label for="Pay Rate">Pay Rate</label>
            <input type="text" name="rate" value="<?php echo $py?>" id="rate">
            <span><?php echo $ERROR['rate'];?></span>
        </div>
        <div class="row">
            <label for="Date">Date</label>
            <input type="date" name="date" value="<?php echo $dt?>" id="date">
            <span><?php echo $ERROR['date'];?></span>
        </div>
        <button type="submit" name="enter" value="Click" >Enter</button>
        </form>
   </div>
    
    
    <script src="script.js"></script>
</body>
</html>