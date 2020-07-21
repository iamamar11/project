<?php

$ERROR = array(
    'empty' => '',
    'hours' => '',
    'rate' => '',
    'date' => ''
);
$hrs = $py = $dt ='';
    if(!isset($_POST['enter'])){
        $ERROR['empty'] = "button not clicked";
    }
    else{
    if(!empty($_POST['hours'])){
        $hrs = $_POST['hours'];
    }else{
        $ERROR['hours'] = "Please set value for hours";
    }
    if(!empty($_POST['rate'])){
        $py = $_POST['rate'];
    }else{
        $ERROR['rate'] = "Please set value for rate";
    }
    if(!empty($_POST['date'])){
        $dt = $_POST['date'];
    }else{
        $ERROR['date'] = "Please set value for date";
    }

    if(array_filter($ERROR)){
        echo "All feilds are Mandatory";
    }else{
        $earn = $hrs*$py;
        echo "Today's Earning is : ".$earn."<br>";
        $conn = mysqli_connect('localhost','root','','salary');
        $sql = "INSERT INTO kiran (hours,pay,earning,created_at) VALUES ('$hrs','$py','$earn','$dt')";
        $query = mysqli_query($conn,$sql);
        
        if($query){
            echo "RECORD ENTERED";
        }else{
            echo "ERROR : ".mysqli_error($conn);
        }
    }
}