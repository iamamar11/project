<?php
    require 'connection.php';
    $sqlshow = "SELECT * FROM ingridents";
    $query = mysqli_query($conn, $sqlshow);
    // $fetch = mysqli_fetch_all($query,MYSQLI_ASSOC);
    $fetch = mysqli_fetch_all($query,MYSQLI_ASSOC);
    ?>