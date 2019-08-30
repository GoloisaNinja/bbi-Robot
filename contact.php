<?php
 $name = $_POST['Name'];
 $email = $_POST['Email'];
 $cat = $_POST['Category'];
 $tag = $_POST['Tag List'];
 $idea = $_POST['Bad Business Idea'];
 $formcontent="From: $name \n Email: $email \n Category: $cat \n Tags: $tag \n Idea: $idea";
 $recipient = "holidayninjastaff@gmail.com";
 $subject = "Bad Business Idea Submission";
 $mailheader = "From: $email \r\n";
 mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
 ?>
