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
<html lang="" dir="ltr">
  <head>
    <meta charset="utf-8" name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="main.css">
    <title>Contact Us!</title>
</head>
  <body class="contactPageBody">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="index.html">BBI Initiative</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="index.html">Home</a>
          <a class="nav-item nav-link" href="learnMore.html">Get Started</a>
          <a class="nav-item nav-link active" href="#">Contact Us!<span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="https://www.newbsanity.com">Newbsanity</a>
          <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Pricing</a>
        </div>
      </div>
    </nav>

      <!-- <div class="container"> -->
        <div class="jumbotron">
        <h1 class="display-4">Contact Us!</h1>
        <p class="lead">Send us your worst/best Bad Business Ideas!<br>
          Employ your gooey human wish centers that we may add your idea to our robot data tunnels.<br>
          No guarantees meatbag.
        </p>
        <p>
        <?php
        echo $thank
         ?>
       </p>
        </div>



<div class="container">

      <form name="form-two" id="contactUs">
      <div class="form-row">
      <div class="form-group col-md-6">
        <label for="contactFN4">Name</label>
        <input type="text" class="form-control" name="fName2" id="contactFN4" placeholder="Who dis?" required>
      </div>
      </div>
      <div class="form-row">
      <div class="form-group col-md-6">
        <label for="emailType4">Email Address</label>
        <input type="email" class="form-control" name="emailType4" id="emailType4" placeholder="despacito@getaBurrito.com" required>
      </div>
      </div>
      <div class="form-row">
      <div class="form-group col-md-6">
      <label for="contactCat">Catagory of Bad Idea</label>
      <select name="ideaCat" id="contactCat" class="form-control" required>
        <option selected>Company Profitablity</option>
        <option>Personal Financial Gain</option>
        <option>Putting a curse on a fellow employee</option>
        <option>Innovation</option>
        <option>Sucking up to the CEO</option>
        <option>Making Friends</option>
        <option>Being a better Person</option>
        <option>Creating your own Religion</option>
      </select>
      </div>
      </div>
      <div class="form-row">
      <div class="form-group col-md-6">
        <label for="contactTags">What tags to associate with your idea?</label>
        <input type="text" class="form-control" name="contactTag" id="contactTags" placeholder="ninjas, donuts, explosions" maxlength="50"required>
      </div>
      </div>
      <div class="form-row">
      <div class="form-group col-md-6">
        <label for="contactIdea">Explain your Bad Business Idea</label>
        <textarea type="text" class="form-control" name="contactIdeaInput" id="contactIdeaInput" cols="100" rows="10" placeholder="Buy Genie, wish for bad idea ideas." required></textarea>
      </div>
      </div>
      <br>
      <button type="button" id="contactSubmit" class="btn btn-danger">Send the Badness</button>
      </form>

</div>

<div class="modal fade" id="contactSent" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-notify modal-success" role="document">
    <!--Content-->
    <div class="modal-content">
      <!--Header-->
      <div class="modal-header">
        <p class="heading lead">Thank you!</p>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>

      <!--Body-->
      <div class="modal-body">
        <div class="text-center">
          <!-- <i class="fas fa-check fa-4x mb-3 animated rotateIn"></i> -->
          <p>Your Bad Business Idea has been sent to the Robot King</p>
        </div>
      </div>

      <!--Footer-->
      <div class="modal-footer justify-content-center" id="badModal">
        <button type="button" class="btn btn-danger btn-md" data-dismiss="modal" id="sendThank">Close</button>
      </div>
    </div>
    <!--/.Content-->
  </div>
</div>


<br>

<p></p>



<script src="https://code.jquery.com/jquery-3.4.1.js" type="text/javascript"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script src="main.js"></script>



  </body>
</html>
