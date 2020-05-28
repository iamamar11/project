<?php
$conn = mysqli_connect('localhost','root','','my_database');

if(!$conn){
    echo "ERROR in connection : ".mysqli_error($conn);
}

?>