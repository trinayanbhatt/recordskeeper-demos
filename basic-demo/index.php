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
    <title>Recordskeeper Demo</title>
    <link rel="icon" type="image/x-icon" href="images/favicon.png">

    <!-- Bootstrap core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href = "css/style.css" rel="stylesheet">
    <link href = "css/toggle.css" rel="stylesheet">
   <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">


  </head>

  <body>
  <!-- prelaoder spins here -->
  	<div class="se-pre-con"></div>
  <!-- prelaoder spins here -->

 <!-- header here  -->
   			<header id="top">
            <p id="logo">
              <a href="./">
              <img src="images/logo.png">
              </a>
            </p>
            <nav id="skip">
              <ul>
                <li><a href="#nav" accesskey="n">Skip to navigation (n)</a></li>
                <li><a href="#content" accesskey="c">Skip to content (c)</a></li>
                <li><a href="#footer" accesskey="f">Skip to footer (f)</a></li>
              </ul>
            </nav>
            <nav id="nav">
              <ul>
                
                <div id="togglecont">
                  <input class="tgl tgl-light" id="cb1" type="checkbox"/>
                      <label class="tgl-btn" for="cb1"></label>
                </div>
                <span >
                  <label id="togglecontlabel">TestNetwork</label>
                </span>   
              
               </ul>
             </nav>
        </header>
<!-- header ends here  -->

    <!-- Page Content -->
    <div class="container faucetcontainer">
        <!-- MultiStep Form -->
        <div class="row">
            <div class="col-md-12 ">
                <form id="msform">
                    <!-- progressbar -->
                    <ul id="progressbar">
                        <li class="active intro">Introduction</li>
                        <li>Get XRK </li>
                        <li>CREATE RECORD</li>
                        <li>Publish RECORD</li>
                        <li>Retrieve RECORD</li>
                         <li>Thank You</li>
                    </ul>
                     <!-- fieldsets -->
                    <fieldset >
                        <h2 class="fs-title">Secure your data by uploading it on Recordskeeper </h2>
                            <h3 class="fs-subtitle">Let's learn How to upload your confidential  data on Recordskeeper        Blockchain in just few clicks.
                                
                            </h3>
                            <div class="form leadform row">
                                <div class="col-md-6">
                                    <input type = "text" id="leadfirstname" name="leadfirstname" class="leadinputs " placeholder="Enter your Name " required>
                                  
                                </div>
                                <div class="col-md-6">
                                    <input type = "email" id="leademail" name="leademail" class="leadinputs " placeholder = "Enter your email address" required>
                                </div>
                                
                                
                               
                                
                            </div>
                             <div class="">
                                    <div id="html_element"></div>
                                </div>
                        <input type="button" name="next" class="next action-button width200" value="Start Demo" id="startdemo" />
                    </fieldset>
                    
                    <!-- fieldsets -->
                    <fieldset id="fieldset1">
                        <h2 class="fs-title">Get XRK Token</h2>
                            <p class="font15">
                                If you don't have XRK wallet which you need to upload data on Recordskeeper Blockchain then you can 
                                create a new XRK Wallet by clicking here.
                            </p>
                            <input type="button" name = "newUser" class="action-button newUser" value="Generate XRK Wallet" id="createkeypair"  data-toggle="modal" data-target="#myModal"/>
                            <div class="topbot25">
                                <p class="font15">
                                   Or If you are already a registered user and already have a XRK wallet then you can simply
                                    enter your address here and continue.
                                </p>
<!--                                <h3 class="fs-subtitle">Already Registered ? Enter your address</h3>-->
                                <input type="text" name = "registered" class=" " value="" placeholder="Enter your Address" id = "registerd"/>
                            </div>
                        
                         <!-- <input type="button" name="previous" class="previous action-button-previous" value="Previous"/> -->
                        <input type="button" name="next" class="next action-button" value="Next" id="firstNext"/>
                    </fieldset>
                    <fieldset>
                        <h2 class="fs-title">Record your Data </h2>
                        <h3 class="fs-subtitle">Secure Blockchain Network</h3>
                        <p class="font15">
                            Enter your data identifier which is associated with your data and it will be publically visible on blockchain.
                        </p>
                        <input type="text" name="idkey" placeholder="Enter Record Identifier key" id="idkey"/>
                        <p class="font15">
                            Enter your data, which may be in any format like JSON, digest, hexcode, text, e.t.c.
                        </p>
                        <textarea placeholder="Enter your Data" rows="10" id="dataTextarea"></textarea>
                        
                        <input type="button" name="previous" class="previous action-button-previous recordPrevBtn" value="Previous" id="recordPrevBtn" />
                        <input type="button" name="next" class="next action-button" value="Next"/ id="textareaBtn" >
                    </fieldset>
                    <fieldset>
                        <h2 class="fs-title">Review your Data</h2>
                        <p class="font15">
                            Please Review your data carefully and click on authorize to submit the 
                            data on blockchain.
                        </p>
                    
                        <div>
                            <div class="row errorContainer">
                                <p>Your Record has been successfully published !!</p>
                                <div class="urldiv">
                                   <span class="transid" >Transaction ID: </span>
                                   <span class="transactionid"> # </span>
                                </div>
                                 <div class="urldiv">
                                   <span id="transurl">Transaction URL : </span>
<!--                                    <span class="mts"></span>-->
                                   <div><a class="transactionid transactionUrl" target="_blank"> </a></div>
                                </div>
                            </div>
                            <div class="row topbot25">
                               <!--  <div class="col-md-3">
                                    <p class="font15 themecolor text-left">Address</p>
                                     <p class="font15 themecolor text-left"></p>
                                     <p class="font15 themecolor text-left">
                                        Data Identifier Key
                                    </p>
                                    <p class="font15 themecolor text-left">
                                        Your Data
                                    </p>
                            
                                </div>
                                <div class="col-md-9">
                                    <p class="font15 text-left" id="reviewAddress">  <span class="font15 themecolor balancespan"> </span> </p>
                                   
                                    
                                     <p class="font15 text-left" id="reviewKey">

                                       
                                    </p>
                                    <p class="font15 text-left" id="reviewData">
                                      
                            
                                    </p>
                                    <p class="font15 text-left" id="reviewData">
                                       

                                        
                                        <span class="font15 themecolor balancespan"> </span>
                                    </p>
                                </div> -->
                                <div class="">
                                  <div class="col-md-3 col-sm-5">
                                    <p class="font15 themecolor text-left">Address</p>
                                  </div>
                                   <div class="col-md-9 col-sm-7">
                                     <p class="font15 text-left" id="reviewAddress">  <span class="font15 themecolor balancespan"> </span> </p>
                                   </div>
                                   <div class="col-md-3 col-sm-5">
                                    <p class="font15 themecolor text-left">Data Identifier Key</p>
                                  </div>
                                   <div class="col-md-9 col-sm-7">
                                     <p class="font15 text-left" id="reviewKey">
                                   </div>
                                    <div class="col-md-3 col-sm-5">
                                    <p class="font15 themecolor text-left">Data </p>
                                  </div>
                                   <div class="col-md-9 col-sm-7">
                                     <p class="font15 text-left" id="reviewData">
                                   </div>
                                </div>
                                <p class="font15">
                                    Enter your private key
                                  </p>
                                  <input id="password-field" type="password" name="password" placeholder="Enter your private key" value="">
                                  <i toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></i>
                            </div>
                            
                           
                                
                           
                        </div>
                        <input type="button" name="previous" class="previous action-button-previous" value="Previous" id="reviewPrev" />
                        <input type="button" name="authorize" class=" action-button width200" value="Publish" id="authorize"/> 
                         <input type="button" name="next" class="next action-button width200" value="Next" id="authnext"/> 
                    </fieldset>
                    <fieldset>
                        <h2 class="fs-title">Retrieve your Data</h2>
                        <p class="font15">
                           Enter your Record identifier to retrieve data from Recordskeeper Blockchain.
                        </p>
                        <div> 
                            <div class="row topbot25">
                                <div class="">
                                  
                                    <input type="text" name = "key" class="abcds" value="" placeholder="Enter record key " id = "regist"/>
                            
                                </div>
                                <div class="datacontainer">
                                    <div class="row mtb5">
                                        <div class="font15 themecolor text-left ext col-md-3">Publisher Address : </div>
                                        <div class="font13 text-left col-md-7 overx" id = "publisheraddress"></div>
                                    </div>
                                     <div class="row mtb5">
                                        <div class="font15 themecolor text-left ext col-md-3">Record Identifier : </div>
                                         <div class="font13 text-left col-md-7 overx" id = "savedkey"></div>
                                    </div>
                                     <div class="row mtb5">
                                        <div class="font15 themecolor text-left ext col-md-3">Record Data : </div>
                                         <div class="font13 text-left col-md-7 overx" id="hexdata"></div>
                                    </div>        
                                </div>
                                <div class="table-responsive"> 
                                  <div class="noteContainer">
                                    <p id="youcanfind">You can find all records related to this key <a href="" target="_blank" id="streamlink"> here </a> .</p>
                                  </div>
                                  <table class="table table-a" id="table-one"> 
                                    <tr>
                                      <th>Publisher Address </th>
                                      <th>Record Identifier Data </th>
                                      <th class="tabletime"> Date &amp; Time (UTC) </th>
                                    </tr>
                                  </table>
                                </div>
                                
                            </div>
                           
                             
                                
                           
                        </div>
                        <!-- <input type="button" name="previous" class="previous action-button-previous" value="Previous"/> -->
                        <input type="button" name="next" class=" action-button width200" value="Retrieve" id="retrieve"/> 
                        <input type="button" name="next" class="next action-button width200" value="Next" id="retrnext"/> 
                        
                    </fieldset>
                     <fieldset>
                         <div class="completcont">
                            <div >
                                <img src="images/success.png" class="simg">
                             </div>
                            <div class="">
                                <h2 class="fs-title mtop10">You've successfully completed Demo. </h2>
                             </div>
                         </div>
                        
                         <h3 class="fs-subtitle">Explore more about us .</h3>
                         <div class="row">
                            <a class="acolor" target="_blank" href="https://explorer.recordskeeper.co/">
                                <div class="">Recordskeeper Mainnet Explorer</div>
                             </a>
                              <a class="acolor" target="_blank" href="https://test-explorer.recordskeeper.co/">
                                <div class="">Recordskeeper Testnet Explorer</div>
                             </a>
                              <a class="acolor" target="_blank" href="https://faucet.recordskeeper.co//">
                                <div class="">Recordskeeper Faucet</div>
                             </a>
                              <a class="acolor" target="_blank" href="https://wallet.recordskeeper.co/">
                                <div class="">Recordskeeper Wallet </div>
                             </a>
                              <a class="acolor" target="_blank" href="https://stats.recordskeeper.co/">
                                <div class="">Recordskeeper Stats</div>
                             </a>
                           
                         </div>

                          <input type="button" name="previous" class="previous action-button-previous" value="Previous" id="lastPrevious" />
                          <a href="./"><input type="button" name="restartDemo" class="" value="Restart Demo" id="restartDemo" /></a> 
                         <div class="row footerrow">
                             <a href="https://www.facebook.com/recordskeeper/" target="_blank" class="themecolor">
                                <i class="fab socialfonts fa-facebook-f "></i>
                             </a>
                             <a href="https://twitter.com/records_keeper" target="_blank" class="themecolor">
                                <i class="fab socialfonts fa-twitter"></i>
                             </a>
                             
                             <a href="https://t.me/joinchat/B4T_PxInGAjiXLz1N66t3Q" target="_blank" class="themecolor">
                                <i class="fab socialfonts fa-telegram-plane"></i>
                             </a>
                           
                         </div>
                                
                           
                    </fieldset>
                    
                </form>
            </div>
        </div>
<!-- /.MultiStep Form -->

    

    </div>
   

<!--      modal box here -->
<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Recordskeeper Wallet</h4>
      </div>
      <div class="modal-body standfont">
        <p class="themecolor"><i class="fas fa-dot-circle themecolor maright10"></i>Your wallet has been created.<br>
          Please download your private key and save it at a safe place, you will need it for your trasactions.
          </p>
        <p id="modalshowaddress">

        </p>
        <p id ="modalshowkey">
          
        </p>
           <a download="Recordskeeper-wallet-key.json" id="downloadlink" download>Download</a>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default createWalBtn" data-dismiss="modal" >Close</button>
      </div>
    </div>

  </div>
</div>      
      

    <!-- Bootstrap core JavaScript -->
    <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.0/sweetalert2.all.min.js"></script>
   <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async defer>
    </script>
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="js/main.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.0/sweetalert2.all.min.js"></script>

    </script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async defer>
     
    
  </body>
<footer id="footer">
          <ul>
          <li> &copy; RecordsKeeper <span class="date">2018</span></li>
          <li><a href="./" target="_blank">Terms</a></li>
          <li><a href="./" target="_blank">Privacy Policy</a></li>
          <li><a href="http://explorer.recordskeeper.co/" target="_blank">Mainnet Explorer</a></li>
          <li><a href="http://test-explorer.recordskeeper.co/" target="_blank">Testnet Explorer</a></li>
          <li><a href="http://faucet.recordskeeper.co/" target="_blank">Faucet</a></li>
          <li><a href="http://stats.recordskeeper.co/" target="_blank">Stats</a></li>
          <li><a href="http://demo.recordskeeper.co/" target="_blank">Demo</a></li>
          </ul>
</footer>
</html>
