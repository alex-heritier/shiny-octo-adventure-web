<?php

$to = "alex.heritier@gmail.com";
$subject = "Intro Chinese - Newsletter signup";
$message = $_POST['email'] .  " registered for the newsletter.";

// Append email to email list
$res = file_put_contents('emails.txt', $_POST['email']."\n", FILE_APPEND | LOCK_EX);

// Send myself an email
mail($to ,$subject ,$message);

echo true;
