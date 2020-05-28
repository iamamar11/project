<?php
  require 'connection.php';

  // 1. write Query to get title
  $query = 'SELECT title, id, Address,email FROM my_table ORDER BY id';
    // $query = "INSERT INTO my_table (title, address, email) VALUES ('Gurtaj','Kansas','tajjatt@gmail.com');";
  
  // 2. Make query and get the result;
  $sqlquery = mysqli_query($conn, $query);

  // 3. Fetch the resulting row as an array;
  $content = mysqli_fetch_all($sqlquery, MYSQLI_ASSOC);
  // $content = mysqli_fetch_assoc($sqlquery);
  // Additional steps after getting done with the query;

  // mysqli_free_result($sqlquery);

  // Close the connection
  // mysqli_close($conn);

  // 4. print the content
  // print_r($content);
?>



