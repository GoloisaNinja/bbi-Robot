<?php
 $name = $_POST["Name"];
 $email = $_POST["Email"];
 $catBad = $_POST["Category"];
 $catTag = $_POST["TagList"];
 $badIdea = $_POST["BadBusinessIdea"];

 $body = "From: ".$name."\n";
 $body .= "Email: ".$email."\n";
 $body .= "Category: ".$catBad."\n";
 $body .= "Tags: ".$catTag."\n";
 $body .= "Idea: ".$badIdea."\n";

 $recip = "holidayninjastaff@gmail.com";
 $subject = "Bad Business Idea Submission";
 $mailHeader = "From: ".$email."\r\n";
 $thank ="Thank you";

 mail($recip, $subject, $body, $mailHeader);
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <p>
    <?php
    echo $body;
     ?>
   </p>
  </body>
</html>
