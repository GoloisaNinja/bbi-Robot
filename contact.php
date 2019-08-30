 <?php
 $name = $_POST['fName2'];
 $email = $_POST['emailType4'];
 $cat = $_POST['ideaCat'];
 $tag = $_POST['contactTag'];
 $idea = $_POST['contactIdeaInput'];
 $formcontent="From: $name \n Email: $email \n Category: $cat \n Tags: $tag \n Idea: $idea";
 $recipient = "holidayninjastaff@gmail.com";
 $subject = "Bad Business Idea Submission";
 $mailheader = "From: $email \r\n";
 mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
 ?>
