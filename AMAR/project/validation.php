<!-- validate and insert data into the database -->
<?php   
    require 'connection.php';
    
// associate array of error to display dynamic errrors to user.
$ERROR = array(
    'email' => '',
    'username' => '',
    'address' => '',
    'city' => '',
    );

//variable to display value to the form to prevent it from disappearing IF NOT INITIAL IT WILL DISPLAY RANDOM TAG  
$email = $city = $username = $address = '';

// logic to validate the complete form
// 1st check if value is set to Submit button
    if(!isset($_GET['submit'])){
        // header('Location: signupform.php');
    }
    else
    {   
        // check if the input feild is containing some value
        if(empty($_GET['email'])){
            $ERROR['email'] = "Feild is mandatory";
        }
        else{
            // execute the function to eliminate unwanted spaces and text.
            $email = test_input($_GET['email']);
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $ERROR['email'] = "E-mail format is incorrect";
            }
        }
        // Code to validate city name should contain letter only
        if(empty($_GET['city'])){
            $ERROR['city'] = "Feild is mandatory";
        }
        else{
            $city = test_input($_GET['city']);
            if(!preg_match("/^[a-zA-Z ]*$/",$city)){
                $ERROR['city'] = "City format is incorrect";
            }
        }
        if(empty($_GET['username'])){
            $ERROR['username'] = "This feild is mandatory";
        }
        else{
            $zip = test_input($_GET['username']);
        }
        if(empty($_GET['address'])){
            $Error['address'] = "Feild is mandatory";
        }else{
            $address = test_input($_GET['address']);
        }
        require 'my_table.php';
        // after completing the page is to be redirected to the new page.
        if(array_filter($ERROR)){
            echo "Please fill the feilds correctly";
        }else{
            // connect to Data base and insert this value into DataBase
            $email = mysqli_real_escape_string($conn,$_GET['email']);
            $username = mysqli_real_escape_string($conn,$_GET['username']);
            $address = mysqli_real_escape_string($conn,$_GET['address']);
               
            // crete $query to insert data into database
            $query = "INSERT INTO my_table (title,email,address) VALUES ('$username','$email','$address');";

            //Save to DB and check it
            if(mysqli_query($conn,$query)){
               echo "New Record entered Successfully"; 
               header('Location: login.php');
            }else{
                echo "Query Error : ".mysqli_error($conn);
            }
        }
    }// end of submit

    //function to eliminate unwanted spaces and backslaces;
    function test_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>