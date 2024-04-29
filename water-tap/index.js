var waterEl=document.getElementById("waterEl")
var tapbtn = document.getElementById("tapbtn");
var flow=document.getElementById("flow")
var H = 500;
var Mt = 0;
var tapstatus = "Close";
var watflow="";

function taps() {
    if (tapstatus == "Close") {
      
      tapbtn.style = "background:green;";
      tapstatus="Open"
    
      waterEl.style.borderTopLeftRadius="0px"
       waterEl.style.borderTopRightRadius="0px"
       if(H>0){
         flow.style.backgroundColor="aqua";
            var intervalwater=setInterval(function() {
                 H=H-1;
                 Mt=Mt+1;
                waterEl.style.height=H+"px"
                waterEl.style.marginTop=Mt+"px"
        if(H==0||watflow=="OFF"){
          clearInterval(intervalwater);
        flow.style.backgroundColor="white";
         watflow="ON";
        }
  
     },50)
    
     
    }
  }
    else if(tapstatus=="Open"){
      
        tapbtn.style.backgroundColor="red";
        tapstatus="Close"
   flow.style.backgroundColor="white";
   watflow="OFF";
    }
  
    
  }
  
  