<?php ?>
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, target-densitydpi=device-dpi">
    <title>Faucet - Recordskeeper</title>
    <link rel="icon" type="image/x-icon" href="images/favicon.png">

    <!-- Bootstrap core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href = "css/style.css" rel="stylesheet">
   
  </head>

  <body>
  <!-- prelaoder spins here -->
  	<div class="se-pre-con"></div>
  <!-- prelaoder spins here -->

 <!-- header here  -->
   			<header id="top">
				<p id="logo">
					<img src="images/logo.png">
				</p>
				<nav id="skip">
					
				</nav>
				<nav id="nav">
					<ul>
						<label id="togglecontlabel">TestNetwork</label>
					</ul>	
				</nav>
			</header>
<!-- header ends here  -->

    <!-- Page Content -->
    <div class="container faucetcontainer">
        <!-- MultiStep Form -->
<div class="row">
    <div class="col-md-10 col-md-offset-1 ">
        <form id="msform">
            <!-- progressbar -->
            <ul id="progressbar">
                <li class="active">Get XRK</li>
                <li>Capture Data</li>
                <li>Retrieve Data</li>
            </ul>
            <!-- fieldsets -->
            <fieldset>
                <h2 class="fs-title">Get XRK Coins</h2>
               
	                <input type="button" name = "newUser" class="action-button newUser" value="New User"/>
                <p>
                	 <h3 class="fs-subtitle">Already Registered ? Enter your address</h3>
                	<input type="text" name = "newUser" class=" " value="" placeholder="Registered User"/>
                </p>
                <input type="button" name="next" class="next action-button" value="Next"/>
            </fieldset>
            <fieldset>
                <h2 class="fs-title">Record your Data </h2>
                <h3 class="fs-subtitle">Secured Blockchain Network</h3>
                
                <input type="text" name="gplus" placeholder="Upload your file"/>
                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                <input type="button" name="next" class="next action-button" value="Next"/>
            </fieldset>
            <fieldset>
                <h2 class="fs-title">Retrieve your Data</h2>
                <h3 class="fs-subtitle">Fill in your credentials</h3>
                <input type="text" name="email" placeholder="Email"/>
                <input type="password" name="pass" placeholder="Password"/>
                <input type="password" name="cpass" placeholder="Confirm Password"/>
                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                <input type="submit" name="submit" class="submit action-button" value="Submit"/>
            </fieldset>
           

        </form>
    </div>
</div>
<!-- /.MultiStep Form -->
    </div>

    <!-- Bootstrap core JavaScript -->
    <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.0/sweetalert2.all.min.js"></script>
   <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async defer>
    </script>
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="js/faucet.js"></script>


  </body>

</html>