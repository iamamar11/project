<?php
    require 'connection.php';


    // fetching detail fromm database.
    // $sql = "SELECT email FROM my_table;";
    // $query = mysqli_query($conn,$sql);
    // $fetch = mysqli_fetch_all($query, MYSQLI_ASSOC);
    // foreach($fetch as $element){
    //     echo $element['email']."<br>";
    // }

    // taking input from user and comparing with db.
    $emailid = '';
    $emailid = $_GET['email'];
    $sql = "SELECT email FROM my_table WHERE email=?;";
    // preparing statement initialising
    $stmt = mysqli_stmt_init($conn);
    // preparing the prepared statement
    if(!mysqli_stmt_prepare($stmt,$sql)){
        echo "ERROR in prepared statement";
    }else{
        // bind data to database
        mysqli_stmt_bind_param($stmt,'s',$emailid);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        
        $fetch = mysqli_fetch_assoc($result);
        if(!empty($fetch)){
            $ERROR['email'] = "User already exist with this EMAIL";
        }
            
    }

?>