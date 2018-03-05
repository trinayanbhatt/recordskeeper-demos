
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
var testnetUrl = 'http://test-explorer.recordskeeper.co/RecordsKeeper%20Testnet/tx/';
var mainnetUrl = 'http://exp.recordskeeper.co/RecordsKeeper%20Mainnet/tx/';
var Captcharesponse;
var response;
var registeraddr;
// global flags declaration ends here // 

$(document).ready(function(){
    
         // Animate loader off screenvae=
    
           $(".se-pre-con").fadeOut("slow");  // fadeout the preloader
          


     
});
 


window.onload = function() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');
    registeraddr = $('#registerd').val();
    // alert(registerd);
    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }
   

};




$('#createkeypair').click(function(){

    CreateKeyPairs(); 
    $("#downloadlink").click();
    

    
     
});
// CreateKeyPairs function here that makes a post request to sendwithdata.php
//params : NULL
// get_address
function CreateKeyPairs() {
    $.ajax({
    type: "POST",
    url: 'php/createkeypairs.php',
    data:{action:'get_address'},
    success:function(Response) {
        var x = Response;

         
         

        x = JSON.parse(x);

         jsondata = x.result[0];

        



        CONSOLE_DEBUG && console.log('result in json format keys:', jsondata);

              pubaddr = x.result[0].address;       //public address here 
              privkey1 = x.result[0].privkey;     // privkey here
              pubkey1 = x.result[0].pubkey;      // get public key here

        CONSOLE_DEBUG && console.log('privkey', privkey1);  
        CONSOLE_DEBUG && console.log('result address :', pubaddr);
        CONSOLE_DEBUG && console.log('result key :', pubkey1);
        localStorage.setItem("public address", pubaddr);
        document.getElementById('registerd').value = pubaddr;
        document.getElementById('modalshowaddress').innerHTML = 'Public Address : '+ pubaddr;
        document.getElementById('modalshowkey').innerHTML = 'Private Key : ' + privkey1;
        
        
        ///////////////
         var dataStr = "data:text/json;charset=utf-8," + ('{'+'"xrk_address"'+":"+'"'+pubaddr+'"'+","+'"xrk_key"'+":"+'"'+privkey1+'"'+'}');
          var dlAnchorElem = document.getElementById('downloadlink');
          dlAnchorElem.setAttribute("href",     dataStr     );
          dlAnchorElem.setAttribute("download", "Recordskeeper-wallet.json");
          dlAnchorElem.click();
      
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
                link.href = makeTextFile('{'+'"xrk_address"'+":"+'"'+pubaddr+'"'+","+'"xrk_key"'+":"+'"'+privkey1+'"'+'}');
                link.style.display = 'block';

 
        })();
        
        ////////////// self - invoking function



       

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
    liststreamData(key1);

  }


   
    
});

// retrivedata function here that makes a post request to liststreamdata.php
 //params : NULL
// get_address
function sendrawtransaction() {
    var ab = globe;
    $.ajax({
    type: "POST",
    url: 'php/sendrawtransaction.php',
    data:({tx_hex: ab}),
    success:function(Response) {

        var x = Response;
        x = JSON.parse(x);
          x = x.result;
        CONSOLE_DEBUG && console.log('sendraw transation format :', x);
        $('.transactionid').text(x);
        Url = testnetUrl + x;
        console.log("Url",Url);
        $('.transactionUrl').text(Url);
        $('.transactionUrl').attr("href", Url)
        $('#authnext').prop("disabled", false);
    }
});
}

function liststreamData(key1) {
    var ac = key1;
    $.ajax({
    type: "POST",
    url: 'php/liststreamdata.php',
    data:({key: ac}),
    success:function(Response) {
        var x = Response;
        x = JSON.parse(x);
    //  x = x.result;
    var p = x.result[0].publishers[0];
    var q = hex2a(x.result[0].data);
    $('#publisheraddress').text(p);
        $('#savedkey').text(x.result[0].key);
        $('#hexdata').text(q);
 
        CONSOLE_DEBUG && console.log('result in json format :', x);
           console.log(p);
         $(".datacontainer").css("display", "block");
    }
       
    });
}


// importAddress() function here that makes a post request to importaddress.php
//params : NULL
// 
    $('#firstNext').click(function(){
        pubaddr = document.getElementById('registerd').value;
                  importAddress();
//             
            });

function importAddress() {
    var a = pubaddr;
    $.ajax({
       type: "POST",
       url: 'php/importaddress.php',
       data:({public: a}),
        success:function(Response) {
            var x = Response;
            x = JSON.parse(x);
        //  x = x.result;
            CONSOLE_DEBUG && console.log('importaddress result :', x);
//            x.result[0].
sendCoins();
        }
        
    });





}

  // importAddress() function here that makes a post request to importaddress.php
 //params : NULL
// 
function sendCoins() {
    var b = pubaddr;
    $.ajax({
       type: "POST",
       url: 'php/sendcoins.php',
       data:{addr: b},
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
        privkey1 = document.getElementById('password-field').value;
        console.log(document.getElementById('password-field').value);
        console.log(privkey1);

        var publicAddress = localStorage.getItem("public address");
        console.log("y", publicAddress);
        
        $('#reviewAddress').text(publicAddress);
        $('#reviewKey').text(idkey);
        $('#reviewData').text(data);
        hexData = toHex(data);
        createRawSendFrom(idkey);        
    });
function createRawSendFrom(idkey) {
    var aa = pubaddr;
    var ab = idkey;
    var ac = hexData;
    $.ajax({
       type: "POST",
       url: 'php/createrawsendfrom.php',
       data:{from: aa, key: ab, val: ac},
        success:function(Response) {
            var x = Response;
            x = JSON.parse(x);
        //  x = x.result;
        globe = x.result;
            CONSOLE_DEBUG && console.log('create raw send from:', globe);
//            x.result[0].
        }
    });
}

$('#authorize').click(function(){
    
    signrawtransaction();
     
   
});

$('#authnext').click(function(){
  
});


function signrawtransaction(){
     var aa = privkey1;
    var ab = globe;
  
    $.ajax({
       type: "POST",
       url: 'php/signrawtransaction.php',
       data:{from: globe, key: aa},
        success:function(Response) {
            var x = Response;
            x = JSON.parse(x);
        //  x = x.result;
        globe = x.result.hex;
            CONSOLE_DEBUG && console.log('sign raw:', globe);
//            x.result[0].
sendrawtransaction();

             $(".errorContainer").css("display", "block");
//                $(".errorContainer").fadeOut();
           
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

            if ( name == '' && email == ''  ){
        //        $('#startdemo').removeClass('next');
                 $('#leadfirstname').css('border','1px solid red');
                 $('#leademail').css('border','1px solid red');
                  $('#html_element').css('border','1px solid red');
                return false;
              
                
            }
            if(!email.match(re)) {
             $('#leademail').css('border','1px solid red');
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


$('#firstNext').click(function(){
  // ALERT('SDHFKSD');
  var addr = $('#registerd').val();
   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if ( addr == ''  ){
        //        $('#startdemo').removeClass('next');
                
                 $('#registerd').css('border','1px solid red');
                 
                return false;
              
                
            }
           
           else{

                       $('#registerd').css('border','1px solid green');

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


          if( idkey == '' || rcdata == '' || rcpass == ''){

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



