<?php

$to = "alex.heritier@gmail.com";
$subject = "Intro Chinese - Newsletter signup";
$message = $_POST['email'] .  " registered for the newsletter.";

mail($to ,$subject ,$message);

// error_log(print_r($GLOBALS, true));
//
// echo json_encode($message);

echo true;
