<?php

$to = "alex.heritier@gmail.com";
$subject = "Intro Chinese - Newsletter signup";
$message = $_POST['email'] .  " registered for the newsletter.";

mail($to ,$subject ,$message);

echo true;
