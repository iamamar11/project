<?php
$ingridient = $description = "";
$ERROR = array(
    "ingr" => '',
    "des" => ''
);

        if(!isset($_POST['add'])){
            // echo "refresh";
        }else
        {
            if(!empty($_POST['item'])){
                $ingridient = test_input_string($_POST['item']);
            }else{
                $ERROR['ingr'] = "Ingridient feild cannot be empty";
            }

            if(!empty($_POST['des'])){
                $description = test_input_string($_POST['des']);  
            }else{
                $ERROR['des'] = "Description feild cannot be empty";
            }

            if(array_filter($ERROR)){
                echo "Please fill the feilds correctly";
            }else{
                require 'connection.php';
                $item =  mysqli_real_escape_string($conn,$ingridient);
                $des = mysqli_real_escape_string($conn,$description);
    
                $sql = "INSERT INTO ingridents (name,des) VALUES ('$item','$des');";
                $query = mysqli_query($conn,$sql);
                if(!$query){
                    echo "ERROR : ".mysqli_error($conn);
                }else{
                    echo "Record Entered";
                }
            }
        }   
        // to remove space and slaches
        function test_input_string($data){
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }

        ?>