<?php
 $data = $this->input->post('data');
 $data = json_decode($data);
 $name = $data->Name;
 $email = $data->Email;
 $catBad = $data->Category;
 $catTag = $data->TagList;
 $badIdea = $data->BadBusinessIdea;

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
