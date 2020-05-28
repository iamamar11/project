<?php
    require 'connection.php';
    // create a session if button is clicked
   
    $email = $_POST['email'];
    $password = $_POST['password'];
    // fetching all the info from the database to store in array for checking for the credentails

    $sql = "SELECT * FROM my_table WHERE email=?";
    // $query = mysqli_query($conn,$sql);
    // $fetch = mysqli_fetch_assoc($query);

    // initialise a prepare statement
    $stmt = mysqli_stmt_init($conn);
    // prepare the statement
    if(!mysqli_stmt_prepare($stmt,$sql)){
        echo "ERROR WHILE PREPARING STATEMENT";
    }else{
        // start binding the data and execute it
        mysqli_stmt_bind_param($stmt,'s',$email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        // if there is any result fetched
        if($row = mysqli_fetch_assoc($result))
        {
            if($password != $row['title'])
            {
                echo "Incorrect password";
            }else
            {
                session_start();
                $_SESSION['email'] = $email;
                $_SESSION['password'] = $password;
                header('Location: recepies.php');
            }
        }else{
            echo "No User With this Email";
        }
    }
    
    // $fetch = mysqli_fetch_all($query,MYSQLI_ASSOC);
    


    // //  created two array to store value inside for email and password
    // $email= array();
    // $pwd = array();
    // foreach($fetch as $row){
    //     $email[] = $row['email'];
    //     $pwd[] = $row['title'];  
    // }

    // // login check array is associate array which store password as key and email as value
    // $logincheck = array_combine($pwd,$email);
    // // print_r($logincheck);
    
    // // check if for the pwd and email as key and value

    // $key = array_search($_SESSION['email'],$logincheck);
    // // var_dump($key);

    // if(!$key){
    //     echo "EMAIL NOT REGISTERED";
    // }else{
    //     if($_SESSION['password'] != $key){
    //         echo "Incorrect password";
    //     }
    //     else{
    //         header('Location: home.php');
    //         echo "you are Logged IN";
    //     }
    // }



?>