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
                        <li class="active">Introduction</li>
                        <li>Get XRK </li>
                        <li>Capture Data</li>
                        <li>Review Data</li>
                    </ul>
                     <!-- fieldsets -->
                    <fieldset>
                        <h2 class="fs-title">Secure your data by uploading it on Recordskeeper </h2>
                            <h3 class="fs-subtitle">Let's learn How to upload your confidential  data on Recordskeeper        Blockchain in just few clicks.
                                
                            </h3>
<!--
                            <p>Things you will learn here</p>
                            <ul>
                                <li>Get XRK Token</li>
                                <li>Uploading Data on Blockchain</li>
                                <li>Accessing Data stored on Blockchain</li>
                                
                            </ul>
-->
                           

                        <input type="button" name="next" class="next action-button width200" value="Start Learning"/>
                    </fieldset>
                    <!-- fieldsets -->
                    <fieldset>
                        <h2 class="fs-title">Get XRK Token</h2>
                            <p class="font15">
                                If you don't have XRK wallet which you need to upload data on Recordskeeper Blockchain then you can 
                                create a new XRK Wallet by clicking here.
                            </p>
                            <input type="button" name = "newUser" class="action-button newUser" value="Generate XRK Wallet"/>
                            <div class="topbot25">
                                <p class="font15">
                                   Or If you are already a registered user and already have a XRK wallet then you can simply
                                    enter your address here and continue.
                                </p>
<!--                                <h3 class="fs-subtitle">Already Registered ? Enter your address</h3>-->
                                <input type="text" name = "newUser" class=" " value="" placeholder="Enter your Address"/>
                            </div>
                        
                         <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                        <input type="button" name="next" class="next action-button" value="Next"/>
                    </fieldset>
                    <fieldset>
                        <h2 class="fs-title">Record your Data </h2>
                        <h3 class="fs-subtitle">Secure Blockchain Network</h3>
                        <p class="font15">
                            Enter your data identifier which is associated with your data and it will be publically visible on blockchain.
                        </p>
                        <input type="text" name="idkey" placeholder="Enter an Identifier key"/>
                        <p class="font15">
                            Enter your data, which may be in any format like JSON, digest, hexcode, text, e.t.c.
                        </p>
                        <textarea placeholder="Enter your Data in JSON format" rows="10"></textarea>
                        <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                        <input type="button" name="next" class="next action-button" value="Next"/>
                    </fieldset>
                    <fieldset>
                        <h2 class="fs-title">Review your Data</h2>
                        <p class="font15">
                            Please Review your data carefully and enter your private key to authorize and submit the 
                            data on blockchain.
                        </p>
                        <p>
                            <span class="font15 maright30">1LhiWkvppxvtcdZL2zjXfvUsCfSangoCY8HqeL</span>
                            <span class="font15">40 XRK</span>
                        </p>
                        
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