
/////////////////////////////////
   // Recordskeeper Faucet    //
  // Adarsha  Jha            //
 // Toshblocks innovations  //
/////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//declaring global flags here //


var CONSOLE_DEBUG = true;
var first ='';
var privkey1;
var  pubaddr;
var pubkey1;
var dataHex;
var globe;
var jsondata;
var net = localStorage.getItem("network");
var captchaSuccess;
var testnetUrl = 'http://test-explorer.recordskeeper.co/RecordsKeeper%20Testnet/tx/';
var mainnetUrl = 'http://explorer.recordskeeper.co/RecordsKeeper%20Mainnet/tx/';
var Captcharesponse;
var response;
var registeraddr;
var captchares;
// global flags declaration ends here // 

$(document).ready(function(){
    
         // Animate loader off screenvae=
    
           $(".se-pre-con").fadeOut("slow");  // fadeout the preloader
          
if(net == "MainNetwork"){
                  $('#top').css('background', '#22283a');
                  $('#top').css('color', '#ffffff');
                  $('.tgl-light').prop('checked', true);
                 
                   $('#togglecontlabel').text('Main Network');
            }
            else if(net == "TestNetwork"){

                 $('#top').css('background', '#54b2ce');
                 $('#togglecontlabel').text('Test Network');
            }
            else{
                net == "TestNetwork";
                localStorage.setItem("network", "TestNetwork");
            }
          networkToggle();

          $("#lastPrevious").click(function(){
              $("#footer").css("margin-top", "450px");
          });

     
});

 function ToggleNetwork(){
        if($('#cb1').is(':checked'))
            {
             net = "TestNetwork";
               localStorage.setItem("network", "TestNetwork");
                $('#top').css('background', '#54b2ce');
                 $('#togglecontlabel').text('Test Network');
                 window.location.href = "index.php";
              
            }
            else
            {
                net = "MainNetwork";
               localStorage.setItem("network","MainNetwork");
                
                 $('#top').css('background', '#22283a');
                  $('#top').css('color', '#ffffff');
                 
                   $('#togglecontlabel').text('Main Network');
                   window.location.href = "index.php";
            }
    }
    function networkToggle(){
  $('.tgl-btn').click(function(){
        ToggleNetwork();
    });
}


window.onload = function() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');
    registeraddr = $('#registerd').val();
    // alert(registerd);
    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }
   

};




$('#createkeypair').click(function(){

    CreateKeyPairs(net); 
    $("#downloadlink").click();
    

    
     
});
// CreateKeyPairs function here that makes a post request to sendwithdata.php
//params : NULL
// get_address
function CreateKeyPairs(net) {
    var netw = net;
    $.ajax({
    type: "POST",
    url: 'php/createkeypairs.php',
    data:{net: netw},
    success:function(Response) {
        var x = Response;
        x = JSON.parse(x);
        var y = x.error;
        if(y != null){
            swal({
                    title:'Something went wrong! <br> Please try again!!!',
                    type: 'error',
                    confirmButtonClass: "btn-danger",
  confirmButtonText: "OK!",
                    timer: 15000
            });
        }
        else{
         jsondata = x.result[0];
        CONSOLE_DEBUG && console.log('result in json format keys:', jsondata);

              pubaddr = x.result[0].address;       //public address here 
              privkey1 = x.result[0].privkey;     // privkey here
              pubkey1 = x.result[0].pubkey;      // get public key here

        CONSOLE_DEBUG && console.log('privkey', privkey1);  
        CONSOLE_DEBUG && console.log('result address :', pubaddr);
        CONSOLE_DEBUG && console.log('result key :', pubkey1);
        localStorage.setItem("pubaddr", pubaddr);
        document.getElementById('registerd').value = pubaddr;
        document.getElementById('modalshowaddress').innerHTML = 'Public Address : '+ pubaddr;
        document.getElementById('modalshowkey').innerHTML = 'Private Key : ' + privkey1;
        
        
        ///////////////
         var dataStr = "data:text/json;charset=utf-8," + ('{'+'"xrk_address"'+":"+'"'+pubaddr+'"'+","+'"xrk_private_key"'+":"+'"'+privkey1+'"'+'}');
          var dlAnchorElem = document.getElementById('downloadlink');
          dlAnchorElem.setAttribute("href",     dataStr     );

                if(net == "MainNetwork"){
                     dlAnchorElem.setAttribute("download", "Recordskeeper-wallet.json");
                     dlAnchorElem.click();
                 }else if (net == "TestNetwork"){

                   dlAnchorElem.setAttribute("download", "Recordskeeper-test-wallet.json");
                     dlAnchorElem.click();
                 }
               
      
        (function () {
            var textFile = null,
              makeTextFile = function (text) {
                var data = new Blob([text], {type: 'application/json'});

                // If we are replacing a previously generated file we need to
                // manually revoke the object URL to avoid memory leaks.
                if (textFile !== null) {
                  window.URL.revokeObjectURL(textFile);
                }

                textFile = window.URL.createObjectURL(data);

                return textFile;
              };

 
                var create = document.getElementById('create'),
                textbox = document.getElementById(privkey1);


                var link = document.getElementById('downloadlink');
                link.href = makeTextFile('{'+'"xrk_address"'+":"+'"'+pubaddr+'"'+","+'"xrk_private_key"'+":"+'"'+privkey1+'"'+'}');
                link.style.display = 'block';

 
        });
        
        ////////////// self - invoking function  

    }
    }

    }); 
}
// toHex() function here that converts any string toHex
// Params : str 
// return : hex 
function toHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}
// recordData() function here that converts any string toHex
// Params : null 
// return : none
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
} 



  

$('#retrieve').click(function(){
    

  var retrieveKey = $('#regist').val();

  if(retrieveKey == ''){

      $('#leadfirstname').css('border','1px solid red');

      return false;

  }
  else{

     var key1 = document.getElementById('regist').value;
    liststreamData(key1,net);

  }


   
    
});

// retrivedata function here that makes a post request to liststreamdata.php
 //params : NULL
// get_address
function sendrawtransaction(netw) {
    var local = netw;
    var ab = globe;
    $.ajax({
    type: "POST",
    url: 'php/sendrawtransaction.php',
    data:({tx_hex: ab, net: local}),
    success:function(Response) {

        var x = Response;
        x = JSON.parse(x);
          x = x.result;
        CONSOLE_DEBUG && console.log('sendraw transation format :', x);
        $('.transactionid').text(x);
        if(local == "TestNetwork"){
        Url = testnetUrl + x;
    }
    else if(local == "MainNetwork")
    {
        Url = mainnetUrl + x;
    }
        console.log("Url",Url);
        $('.transactionUrl').text(Url);
        $('.transactionUrl').attr("href", Url);
         $('#authnext').show();

        $('#authnext').prop("disabled", false);

    }
    
});
}

function liststreamData(key1, netw) {
    var local = netw;
    var ac = key1;
    $.ajax({
    type: "POST",
    url: 'php/liststreamdata.php',
    data:({key: ac, net: local}),
    success:function(Response) {
        var x = Response;
        x = JSON.parse(x);
    //  x = x.result;
    var y = x.error;
    if (y != null){
        swal({
                    title:'Sorry, no Data was published with the specified Key identifier!',
                    type: 'error',
                    confirmButtonClass: "btn-danger",
  confirmButtonText: "OK!",
                    timer: 15000
            });
    }
    else{
    var p = x.result[0].publishers[0];
    var q = hex2a(x.result[0].data);
    $('#publisheraddress').text(p);
        $('#savedkey').text(x.result[0].key);
        $('#hexdata').text(q);
 
        CONSOLE_DEBUG && console.log('result in json format :', x);
           console.log(p);
         $(".datacontainer").css("display", "block");
    }
    }  
    });
}


// importAddress() function here that makes a post request to importaddress.php
//params : NULL
// 
  
function importAddress(netw) {
    var local = netw;
    var a = pubaddr;
    $.ajax({
       type: "POST",
       url: 'php/importaddress.php',
       data:({public: a, net: local}),
        success:function(Response) {
            var x = Response;
            x = JSON.parse(x);
            var y = x.error;
            console.log("value here : ",y);
            if (y != null){
            swal({
                    title:'We were unable to move on further with this Address of yours.',
                    type: 'error',
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "OK!",
                    timer: 15000
            });
            }
                   else{
                           //  x = x.result;
                               CONSOLE_DEBUG && console.log('importaddress result :', x);
                    $('#registerd').css('border','1px solid green');

                                         var current_fs, next_fs, previous_fs; //fieldsets
                                         var left, opacity, scale; //fieldset properties which we will animate
                                         var animating; //flag to prevent quick multi-click glitches

                                             if(animating) return false;
                                             animating = true;
                                             
                                             current_fs = $("#fieldset1");

                                             next_fs = $("#fieldset1").next();

                                              //activate next step on progressbar using the index of next_fs
                                         $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                                                  //show the next fieldset
                                                  next_fs.show();
                                                 //hide the current fieldset with style
                                                 current_fs.animate({opacity: 0}, {
                                                   step: function(now, mx) {
                                                       //as the opacity of current_fs reduces to 0 - stored in "now"
                                                       //1. scale current_fs down to 80%
                                                       scale = 1 - (1 - now) * 0.2;
                                                       //2. bring next_fs from the right(50%)
                                                       left = (now * 50)+"%";
                                                       //3. increase opacity of next_fs to 1 as it moves in
                                                       opacity = 1 - now;
                                                       current_fs.css({
                                                       'transform': 'scale('+scale+')',
                                                       'position': 'absolute'
                                                    });
                                                     next_fs.css({'left': left, 'opacity': opacity});
                                                 },
                                                 duration: 800,
                                                 complete: function(){
                                                     current_fs.hide();
                                                     animating = false;
                                                 },
                                                 //this comes from the custom easing plugin
                                                 easing: 'easeInOutBack'
                                         });

                  
                                      sendCoins(local);
                           }
        } 
    });





}

  // importAddress() function here that makes a post request to importaddress.php
 //params : NULL
// 
function sendCoins(netw) {
    var local = netw;
    var b = pubaddr;
    $.ajax({
       type: "POST",
       url: 'php/sendcoins.php',
       data:{addr: b, net: local},
        success:function(Response) {
            var x = Response;
            x = JSON.parse(x);
        //  x = x.result;
      
            CONSOLE_DEBUG && console.log('coins sent status :', x);
//            x.result[0].
        }
        
    });
}
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

 // createRawSendFrom() function here that makes a post request to importaddress.php
 //params : NULL
// 
$('#textareaBtn').click(function(){
       var idkey = document.getElementById('idkey').value;
        console.log('idkey', idkey);
//        localStorage.setItem("idkey", idkey);
        var data = document.getElementById('dataTextarea').value;
        console.log('data', data);
        
        console.log(document.getElementById('password-field').value);
        console.log(privkey1);

        var publicAddress = localStorage.getItem("pubaddr");
        console.log("y", publicAddress);
        
        $('#reviewAddress').text(publicAddress);
        $('#reviewKey').text(idkey);
        $('#reviewData').text(data);
        hexData = toHex(data);
        createRawSendFrom(idkey, net);        
    });
function createRawSendFrom(idkey, netw) {
    var local = netw;
    var aa = pubaddr;
    var ab = idkey;
    var ac = hexData;
    $.ajax({
       type: "POST",
       url: 'php/createrawsendfrom.php',
       data:{from: aa, key: ab, val: ac, net: local},
        success:function(Response) {
            var x = Response;
            x = JSON.parse(x);
            var y = x.error;
            console.log(y);
            if (y != null){
swal({
                    title:'Data is too large for you current Address balance. <br> Kindly get more XRK or try with small data!',
                    type: 'error',
                    confirmButtonClass: "btn-danger",
  confirmButtonText: "OK!",
                    timer: 15000
            });
            }
            else{
        //  x = x.result;
        globe = x.result;
            CONSOLE_DEBUG && console.log('create raw send from:', globe);
//            x.result[0].
        }
        }
    });
}

$('#authorize').click(function(){
   privkey1 = document.getElementById('password-field').value;
    signrawtransaction(net);
    // $('#authorize').prop("disabled", true);
    // $('#authorize').addClass("disabledbtn");
     // $('#authorize').attr('value', 'Published');
     
   
});

$('#authnext').click(function(){
  
});


function signrawtransaction(netw){
     var aa = privkey1;
    var ab = globe;
  var local = netw;
    $.ajax({
       type: "POST",
       url: 'php/signrawtransaction.php',
       data:{from: globe, key: aa, net: local},
        success:function(Response) {
            var x = Response;
            x = JSON.parse(x);
            var y = x.error;
            if (y != null){
            swal({
                    title:'Private Key entered is Incorrect. Please try again!',
                    type: 'error',
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "OK!",
                    timer: 15000
            });

            $('#password-field').css("border", "1px solid red");
            }
            else{
                 //  x = x.result;
                 globe = x.result.hex;
                 CONSOLE_DEBUG && console.log('sign raw:', globe);
                  //            x.result[0].
                  sendrawtransaction(net);
                   $('#password-field').css("border", "1px solid green");
                   $('#authorize').css("display", "none");

             $(".errorContainer").css("display", "block");
//                $(".errorContainer").fadeOut();
            }
        }
    });


}



////////   GOOGLE RECAPTCHA CLIENT SIDE AND SERVER SIDE VERIFICATION   /////////////

            //----------------------------------------------------/
           // onloadCallback()
          // this 
         //----------------------------------------------------/




 var onloadCallback = function() {
        grecaptcha.render('html_element', {    // oncallback render a div with id html_element
          'sitekey' : '6LfcOEcUAAAAAAia1cMp60bnm1PMaFrmJ808il_D', // sitekey for the  captcha 
          'theme' : 'light',           // change the theme for light and dark
          'widgetId': 'widgetId',      // add widget id attribute which is optional
          callback(){
            console.log( 'another callback function here');

             response = grecaptcha.getResponse();    // get the value of response when user submits recaptcha
            console.log('response from google : ', response);
          
            // send post method to captcha php that is usin curl post request for cross domain
             $.post("php/captcha.php",
                    {
                      googleResponse: response     // pass the google response
                     
                    },
                      function(response, status){   // pass two parameters respnse  and status 
                           console.log("response after ssv : ", response, status); 

                           if ( status == 'success'){
                             captchaSuccess = status;
                             captchares = captchaSuccess;
                            console.log("captchaSuccess :", captchaSuccess);
                            

                           }
                           // alert response and the status here after verification from google 
                      });
            }
        });
    };


////////   GOOGLE RECAPTCHA CLIENT SIDE AND SERVER SIDE VERIFICATION   /////////////



//jQuery time



$('#startdemo').click(function(e){
             // e.preventDefault();
            var name = $('#leadfirstname').val();
            var email = $('#leademail').val();
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if ( name == '' ){
        //        $('#startdemo').removeClass('next');
                 $('#leadfirstname').css('border','1px solid red');
                
                 
                return false;
              
                
            }
            if (  email == ''  ){
        //    
                 $('#leademail').css('border','1px solid red');
                 
                return false;
              
                
            }
            if(!email.match(re)) {
             $('#leademail').css('border','1px solid red');
             return false;
           }
            if(captchaSuccess == undefined){
              $("#html_element").css('border', '1px solid #ea2121');
              return false;
            } 
           
            else{

                 $('#leadfirstname').css('border','1px solid green');
                 $('#leademail').css('border','1px solid green');
                 $('#html_element').css('border','1px solid green');

                var current_fs, next_fs, previous_fs; //fieldsets
                var left, opacity, scale; //fieldset properties which we will animate
                var animating; //flag to prevent quick multi-click glitches

                    if(animating) return false;
                    animating = true;
                    
                    current_fs = $(this).parent();
                    next_fs = $(this).parent().next();

                     //activate next step on progressbar using the index of next_fs
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                         //show the next fieldset
                         next_fs.show(); 
                        //hide the current fieldset with style
                        current_fs.animate({opacity: 0}, {
                          step: function(now, mx) {
                              //as the opacity of current_fs reduces to 0 - stored in "now"
                              //1. scale current_fs down to 80%
                              scale = 1 - (1 - now) * 0.2;
                              //2. bring next_fs from the right(50%)
                              left = (now * 50)+"%";
                              //3. increase opacity of next_fs to 1 as it moves in
                              opacity = 1 - now;
                              current_fs.css({
                              'transform': 'scale('+scale+')',
                              'position': 'absolute'
                           });
                            next_fs.css({'left': left, 'opacity': opacity});
                        }, 
                        duration: 800, 
                        complete: function(){
                            current_fs.hide();
                            animating = false;
                        }, 
                        //this comes from the custom easing plugin
                        easing: 'easeInOutBack'
                });
            
               
            }
    });






$('#textareaBtn').click(function(e){
  // ALERT('SDHFKSD');
  var idkey = $('#idkey').val();
  var rcdata = $('#dataTextarea').val();
  var rcpass = $('#password-field').val();

  var email = $('#registerd').val();
   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


          if( idkey == '' || rcdata == '' ){

            $('#idkey').css('border','1px solid red');
            $('#dataTextarea').css('border','1px solid red');
            $('#password-field').css('border','1px solid red');

          }

           else{
                       $('#idkey').css('border','1px solid green');
                       $('#dataTextarea').css('border','1px solid green');
                       $('#password-field').css('border','1px solid green');

                      var current_fs, next_fs, previous_fs; //fieldsets
                      var left, opacity, scale; //fieldset properties which we will animate
                      var animating; //flag to prevent quick multi-click glitches

                          if(animating) return false;
                          animating = true;
                          
                          current_fs = $(this).parent();
                          next_fs = $(this).parent().next();

                           //activate next step on progressbar using the index of next_fs
                      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                               //show the next fieldset
                               next_fs.show(); 
                              //hide the current fieldset with style
                              current_fs.animate({opacity: 0}, {
                                step: function(now, mx) {
                                    //as the opacity of current_fs reduces to 0 - stored in "now"
                                    //1. scale current_fs down to 80%
                                    scale = 1 - (1 - now) * 0.2;
                                    //2. bring next_fs from the right(50%)
                                    left = (now * 50)+"%";
                                    //3. increase opacity of next_fs to 1 as it moves in
                                    opacity = 1 - now;
                                    current_fs.css({
                                    'transform': 'scale('+scale+')',
                                    'position': 'absolute'
                                 });
                                  next_fs.css({'left': left, 'opacity': opacity});
                              }, 
                              duration: 800, 
                              complete: function(){
                                  current_fs.hide();
                                  animating = false;
                              }, 
                              //this comes from the custom easing plugin
                              easing: 'easeInOutBack'
                      });
            
              

           }

});

$('#authnext').click(function(){
  // ALERT('SDHFKSD');


                   
                      var current_fs, next_fs, previous_fs; //fieldsets
                      var left, opacity, scale; //fieldset properties which we will animate
                      var animating; //flag to prevent quick multi-click glitches

                          if(animating) return false;
                          animating = true;
                          
                          current_fs = $(this).parent();
                          next_fs = $(this).parent().next();

                           //activate next step on progressbar using the index of next_fs
                      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                               //show the next fieldset
                               next_fs.show(); 
                              //hide the current fieldset with style
                              current_fs.animate({opacity: 0}, {
                                step: function(now, mx) {
                                    //as the opacity of current_fs reduces to 0 - stored in "now"
                                    //1. scale current_fs down to 80%
                                    scale = 1 - (1 - now) * 0.2;
                                    //2. bring next_fs from the right(50%)
                                    left = (now * 50)+"%";
                                    //3. increase opacity of next_fs to 1 as it moves in
                                    opacity = 1 - now;
                                    current_fs.css({
                                    'transform': 'scale('+scale+')',
                                    'position': 'absolute'
                                 });
                                  next_fs.css({'left': left, 'opacity': opacity});
                              }, 
                              duration: 800, 
                              complete: function(){
                                  current_fs.hide();
                                  animating = false;
                              }, 
                              //this comes from the custom easing plugin
                              easing: 'easeInOutBack'
                      });
            
              

         

});



$('#retrnext').click(function(){
  // ALERT('SDHFKSD');


                     

                      var current_fs, next_fs, previous_fs; //fieldsets
                      var left, opacity, scale; //fieldset properties which we will animate
                      var animating; //flag to prevent quick multi-click glitches

                          if(animating) return false;
                          animating = true;
                          
                          current_fs = $(this).parent();
                          next_fs = $(this).parent().next();

                           //activate next step on progressbar using the index of next_fs
                      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                               //show the next fieldset
                               next_fs.show(); 
                              //hide the current fieldset with style
                              current_fs.animate({opacity: 0}, {
                                step: function(now, mx) {
                                    //as the opacity of current_fs reduces to 0 - stored in "now"
                                    //1. scale current_fs down to 80%
                                    scale = 1 - (1 - now) * 0.2;
                                    //2. bring next_fs from the right(50%)
                                    left = (now * 50)+"%";
                                    //3. increase opacity of next_fs to 1 as it moves in
                                    opacity = 1 - now;
                                    current_fs.css({
                                    'transform': 'scale('+scale+')',
                                    'position': 'absolute'
                                 });
                                  next_fs.css({'left': left, 'opacity': opacity});
                              }, 
                              duration: 800, 
                              complete: function(){
                                  current_fs.hide();
                                  animating = false;
                              }, 
                              //this comes from the custom easing plugin
                              easing: 'easeInOutBack'
                      });
            
              

         

});
               


                 var current_fs, next_fs, previous_fs; //fieldsets
                var left, opacity, scale; //fieldset properties which we will animate
                var animating; //flag to prevent quick multi-click glitches


               
        
                $('#authnext').prop("disabled", true);
                $('#authnext').hide();


                $(".previous").click(function(){
                    if(animating) return false;
                    animating = true;
                    
                    current_fs = $(this).parent();
                    previous_fs = $(this).parent().prev();
                    
                    //de-activate current step on progressbar
                    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
                    
                    //show the previous fieldset
                    previous_fs.show(); 
                    //hide the current fieldset with style
                    current_fs.animate({opacity: 0}, {
                        step: function(now, mx) {
                            //as the opacity of current_fs reduces to 0 - stored in "now"
                            //1. scale previous_fs from 80% to 100%
                            scale = 0.8 + (1 - now) * 0.2;
                            //2. take current_fs to the right(50%) - from 0%
                            left = ((1-now) * 50)+"%";
                            //3. increase opacity of previous_fs to 1 as it moves in
                            opacity = 1 - now;
                            current_fs.css({'left': left});
                            previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
                        }, 
                        duration: 800, 
                        complete: function(){
                            current_fs.hide();
                            animating = false;
                        }, 
                        //this comes from the custom easing plugin
                        easing: 'easeInOutBack'
                    });
                });



               $(".submit").click(function(){
                    return false;
                });

$('#firstNext').click(function(){


var addr = $('#registerd').val();
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

           if ( addr == ''  ){
                $('#registerd').css('border','1px solid red');
               return false;
    
           }

      else{

             pubaddr = document.getElementById('registerd').value;
             localStorage.setItem("pubaddr",pubaddr);
                       importAddress(net);
          }
});

