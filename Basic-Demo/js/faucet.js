
/////////////////////////////////
   // Recordskeeper Faucet 	  //
  // Adarsha  Jha			 //
 // Toshblocks innovations  //
/////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//declaring global flags here //

var CONSOLE_DEBUG = true;
var first ='';
var privkey1;
// global flags declaration ends here // 


$(document).ready(function(){
    
		 // Animate loader off screen
    
		   $(".se-pre-con").fadeOut("slow");  // fadeout the preloader
    
            x = toHex('18j9TSr5iwbZUM6w9HNyJyJPBJot14bMCm2w6R');
    
            console.log('hexcode :',x);
    
            recordData();
    
            liststreamData();
    
            getBalance();
    
           firstNext();
            
});




function firstNext(){
     $('#firstNext').click(function(){
                  
            first = document.getElementById('registerd').value;
                console.log(first, "fir");
                if(first = ''){
                    alert('sdfsdf');
                }
//             
            });
}





$('#createkeypair').click(function(){
    CreateKeyPairs(); 
     
});



// CreateKeyPairs function here that makes a post request to sendwithdata.php
//params : NULL
// get_address
function CreateKeyPairs() {
	$.ajax({
	type: "POST",
	url: 'php/createKeyPairs.php',
	data:{action:'get_address'},
	success:function(Response) {
        var x = Response;
        x = JSON.parse(x);
    //	x = x.result;
        CONSOLE_DEBUG && console.log('result in json format :', x);
            var  pubaddr = x.result[0].address;   //public address here 
            privkey1 = x.result[0].privkey;    // privkey here
         CONSOLE_DEBUG && console.log('privkey', privkey1);  

        CONSOLE_DEBUG && console.log('result address :', pubaddr);
        localStorage.setItem("public address", pubaddr);
        document.getElementById('registerd').value = pubaddr;
        document.getElementById('modalshowaddress').innerHTML = 'Public Address : '+ pubaddr;
        document.getElementById('modalshowkey').innerHTML = 'Private Key : ' + privkey1;
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


function recordData(){
    $('#textareaBtn').click(function(){
       var idkey = document.getElementById('idkey').value;
        console.log('idkey', idkey);
//        localStorage.setItem("idkey", idkey);
        var data = document.getElementById('dataTextarea').value;
        console.log('data', data);
        
        var publicAddress = localStorage.getItem("public address");
        console.log("y", publicAddress);
        
        $('#reviewAddress').text(publicAddress);
        $('#reviewKey').text(idkey);
        $('#reviewData').text(data);
        
    });
}


$('#authorize').click(function(){
    sendWithData();
});

// sendWithData function here that makes a post request to sendwithdata.php
//params : NULL
// get_address

var datastring = 'sdfsdf';

function sendWithData() {
	$.ajax({
	type: "POST",
	url: 'php/sendwithstreamdata.php',
	data:{action:'get_address', datastring},
	success:function(Response) {
        var x = Response;
        x = JSON.parse(x);
    //	x = x.result;
        CONSOLE_DEBUG && console.log('result in json format :', x);
	}
	});
}


// sendWithData function here that makes a post request to sendwithdata.php
//params : NULL
// get_address

var ds = "gvcdgcv";

function liststreamData() {
	$.ajax({
	type: "POST",
	url: 'php/liststreamdata.php',
	data:{key:''},
	success:function(Response) {
        var x = Response;
        x = JSON.parse(x);
    //	x = x.result;
        CONSOLE_DEBUG && console.log('result in json format :', x);
	}
	});
}

// getBalance function here that makes a post request to sendwithdata.php
//params : NULL
// get_address



function getBalance() {
	$.ajax({
	   type: "POST",
	   url: 'php/getbalance.php',
	   data:{action:'get_balance'},
        success:function(Response) {
            var x = Response;
            x = JSON.parse(x);
        //	x = x.result;
            CONSOLE_DEBUG && console.log('getbalance :', x);
//            x.result[0].
        }
	});
}


 // download a privkey textfile here 
//  


(function () {
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };


  var create = document.getElementById('create'),
    textbox = document.getElementById('modalshowkey');

  create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile("privKey : "+privkey1);
    link.style.display = 'block';
  }, false);
})();
















// function for multiple steps here //
    
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
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
})
