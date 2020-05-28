<?php
            $ERROR = array(
                'recepie' => '',
                'choice' => '',
                'instructions' => '',
                'upload' => ''
            );
            $recepie = $choice = $instructions = '';
            if(isset($_POST['create'])){
               
                if(empty($_POST['recepieName'])){
                    $ERROR['recepie'] = "Recepie input feild cannot be empty";
                }else{
                    $recepie = test_input($_POST['recepieName']);
                }
                if(empty($_POST['multiple'])){
                    $ERROR['choice'] = "ingridients options cannot be empty";
                }else{
                    $choice = ($_POST['multiple']);
                }
                if(empty($_POST['instructions'])){
                    $ERROR['instructions'] = "instructions input feild cannot be empty";
                }else{
                    $instructions = test_input($_POST['instructions']);
                }

                // file upload to database
                $file = $_FILES['upload'];
                $fileName = $_FILES['upload']['name'];
                $fileExt = explode(".",$fileName);
                $fileExtension = strtolower(end($fileExt));
                $valid = array('jpg','jpeg','png');
                if(in_array($fileExtension,$valid)){
                    if($_FILES['upload']['error'] == 0){
                        if($_FILES['upload']['size'] < 20000000){
                            $fileDestination = 'image/dish/'.$fileName;
                            $fileLocation = $_FILES['upload']['tmp_name'];
                        }else{
                            $ERROR['upload'] = "File too big";        
                        }
                    }else{
                        $ERROR['upload'] = "ERROR while uploading file";    
                    }
                }else{
                    $ERROR['upload'] = "File format should be JPG, JPEG, PNG";
                }

                
                // go to next page
                if(array_filter($ERROR)){
                    echo "Please fill the feilds correctly";
                }else{
                    // start storing data to database;
                    move_uploaded_file($fileLocation,$fileDestination);
                    require 'connection.php';
                    $recepieName = mysqli_real_escape_string($conn,$recepie);
                    
                    // implode to convert array into string
                    $choice =  implode(",",$choice);
                    $instructions = mysqli_real_escape_string($conn,$instructions);

                    //  user to get the username i.e anything before @sign in email address which is stores in session; 
                    $useremail =  explode("@",$_SESSION['email']); 
                    $username = current($useremail);
                    $query = "INSERT INTO recepie (rname, choice, des, user, photo) VALUES ('$recepieName','$choice','$instructions','$username','$fileName')";
                    
                    if(mysqli_query($conn,$query)){
                        echo "New Record entered Successfully"; 
                        // header("Location: recepies.php");
                     }else{
                         echo "Query Error : ".mysqli_error($conn);
                     }
                    
                }

            } //end isset if
             
            

            function test_input($data){
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
            }
            ?>