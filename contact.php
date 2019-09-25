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
<html lang dir=ltr>
<head>
<meta charset=utf-8 name=viewport content="width=device-width">
<link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css integrity=sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS crossorigin=anonymous>
<link href="https://fonts.googleapis.com/css?family=Khand&display=swap" rel=stylesheet>
<link href="https://fonts.googleapis.com/css?family=Geo&display=swap" rel=stylesheet>
<link rel=stylesheet href=mainMinCs.css>
<title>Contact Us!</title>
</head>
<body class=contactPageBody style="opacity:0";>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id=contactNav>
<a class=navbar-brand href=index.html>BBI Initiative</a>
<button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarNavAltMarkup aria-controls=navbarNavAltMarkup aria-expanded=false aria-label="Toggle navigation">
<span class=navbar-toggler-icon></span>
</button>
<div class="collapse navbar-collapse" id=navbarNavAltMarkup>
<div class=navbar-nav>
<a class="nav-item nav-link" href=index.html>Home</a>
<a class="nav-item nav-link" href=learnMore.html>Get Started</a>
<a class="nav-item nav-link active" href=#>Contact Us!<span class=sr-only>(current)</span></a>
<a class="nav-item nav-link" href=https://www.newbsanity.com>Newbsanity</a>
<a class="nav-item nav-link disabled" href=# tabindex=-1 aria-disabled=true>Pricing</a>
</div>
</div>
</nav>
<div class=jumbotron id=contactJumbo>
<div class=container id=mainJumCont>
<h1 class=display-4 id=logoLead>BAD [+] CONTACT [+] US</h1>
<p class=lead>Send us your worst/best Bad Business Ideas!<br>
Employ your gooey human wish centers that<br>
we may add your idea to our robot data tunnels.<br>
Perhaps you will please the Robot King...<br>
No guarantees meatbag.
</p>
</div>
<div class=container>
<form name=form-two id=contactUs>
<div class=form-row>
<div class="form-group col-md-6">
<label for=contactFN4>Name</label>
<input type=text class=form-control name=fName2 id=contactFN4 placeholder="Who are you?" required>
</div>
</div>
<div class=form-row>
<div class="form-group col-md-6">
<label for=emailType4>Email Address</label>
<input type=email class=form-control name=emailType4 id=emailType4 placeholder="e.g. despacito@getaBurrito.com" required>
</div>
</div>
<div class=form-row>
<div class="form-group col-md-6">
<label for=contactCat>Catagory of Bad Idea</label>
<select style=background-color:#2f2f2f name=ideaCat id=contactCat class="form-control customDrop" required>
<option selected disabled>click to choose an option...</option>
<option>Immoral Company Profitability</option>
<option>Ill-gotten Financial Gain</option>
<option>Innovation</option>
<option>Widespread Panic</option>
<option>Unhealthy Side-effects</option>
<option>Making Friends</option>
<option>Losing Friends</option>
<option>Creating your own Religion</option>
<option>Revenge</option>
<option>Deliciousness</option>
<option>Just saying hi</option>
</select>
</div>
</div>
<div class=form-row>
<div class="form-group col-md-6">
<label for=contactTags>What tags to associate with your idea?</label>
<input type=text class=form-control name=contactTag id=contactTags placeholder="ninjas, donuts, explosions" maxlength="50"required>
</div>
</div>
<div class=form-row>
<div class="form-group col-md-6">
<label for=contactIdea>Explain your Bad Business Idea</label>
<textarea type=text class=form-control name=contactIdeaInput id=contactIdeaInput cols=100 rows=10 placeholder="Buy Genie, wish for bad idea ideas." required></textarea>
</div>
</div>
<br>
<div class=btn-group>
<span class=button-span>
<input type=button id=contactSubmit class="btn btn-danger btn-lg btn-block" value="Send the Badness">
</span>
</div>
</form>
</div>
</div>
<div class="modal fade" id=contactSent tabindex=-1 role=dialog aria-labelledby=myModalLabel aria-hidden=true>
<div class="modal-dialog modal-notify modal-success" role=document>
<div class=modal-content>
<div class=modal-header>
<p class="heading lead">Thank you!</p>
<button type=button class=close data-dismiss=modal aria-label=Close>
<span aria-hidden=true class=white-text>&times;</span>
</button>
</div>
<div class=modal-body>
<div class=text-center>
<p>Your Bad Business Idea has been sent to the Robot King</p>
</div>
</div>
<div class="modal-footer justify-content-center" id=badModal>
<button type=button class="btn btn-danger btn-md" data-dismiss=modal id=sendThank>Close</button>
</div>
</div>
</div>
</div>
<br>
<p></p>
<script src=https://code.jquery.com/jquery-3.4.1.js type=text/javascript></script>
<script src=https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js integrity=sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k crossorigin=anonymous></script>
<script src=https://kit.fontawesome.com/1148c1f779.js></script>
<script>$(document).ready(function(){setTimeout(function(){console.log("waited 10 secs");$("body").css("opacity",1)},100)});</script>
<script src=assetMain.js></script>
</body>
</html>
