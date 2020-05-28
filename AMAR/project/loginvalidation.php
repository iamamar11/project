<?php
$ERROR = array(
    'email' => '',
    'password' => '',
    'login' => ''
);
$emailfill = '';
        if(!isset($_POST['submit'])){
            if(isset($_GET['error'])){
                $ERROR['login'] = "You need to login first";
            }
        }
        else
        {
            if(empty($_POST['email'])){
                $ERROR['email'] = "Feild is mandatory";
            }
            else{
            // execute the function to eliminate unwanted spaces and text.
                $emailfill = test_input($_POST['email']);
                if(!filter_var($emailfill, FILTER_VALIDATE_EMAIL)){
                    $ERROR['email'] = "E-mail format is incorrect";
                }
            }
            if(empty($_POST['password'])){
                $ERROR['password'] = "This feild is mandatory";
            }
            if(array_filter($ERROR)){
                echo "Please Fill correctly";
            }else{
                // After doing all the validation we are creating session and check if the information is right for login 
                require 'selectedDB.php';
            }
        }

function test_input($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>