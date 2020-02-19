
                                // draw body function
function drawFbody(){

             FRleg()
 
             FLleg()

             Fhead()
             Fbody()
 

             FRarm()
             /FLarm()
}

                                // draw right body function
function drawRbody(){
 

             RLarm()
             RLleg()
             Rhead()
             Rbody()
 
             RRleg()
             RRarm()
}


function drawLbody() {

LRarm()
LRleg()
Lbody()
Lhead()
LLleg()
LLarm()

}


                                                                                                // stances                    



// function that creates standing stance. Use it at start and end of every move to bring ninja back to standing psition

function Fstanding(){
       FbodyA      = 0*deg        ; 
 

       FLthighA    = 5*deg    ;
 
       FRthighA    = -5*deg        ;
   
       FLlimbA     = -0*deg        ;
  
       FRlimbA     = 0*deg        ;

  

      FLupperArmA     = 10*deg       ;

      FLhandA     = -5*deg       ;
 
  
      FRupperArmA      = -10*deg      ;
    
      FRhandA    = 5*deg       ;
  
             draw.clearRect(0,0,canvasW,canvasH)
      drawFbody()
}

function Rstanding(){
       RbodyA      = -3*deg        ; 
 

       RLthighA    = 10*deg    ;
 
       RRthighA    = -10*deg        ;
   
       RLlimbA     = -0*deg        ;
  
       RRlimbA     = 0*deg        ;

  

      RLupperArmA     = 15*deg       ;

      RLhandA     = -5*deg       ;
 
  
      RRupperArmA      = -10*deg      ;
    
      RRhandA    = -15*deg       ;
  
             draw.clearRect(0,0,canvasW,canvasH)
      drawRbody()
}

function Lstanding(){
       LbodyA      = 3*deg        ; 
 

       LLthighA    = -10*deg    ;
 
       LRthighA    = 10*deg        ;
   
       LLlimbA     = 0*deg        ;
  
       LRlimbA     = -0*deg        ;

  

      LLupperArmA     = -15*deg       ;

      LLhandA     = 5*deg       ;
 
  
      LRupperArmA      = 10*deg      ;
    
      LRhandA    = 15*deg       ;
  
     draw.clearRect(0,0,canvasW,canvasH)
      drawLbody()
}


             
                                                                                                  //  fight stance  
 


function Lfighting(){
       LbodyA      = 3*deg        ; 
 

       LLthighA    = -20*deg    ;
 
       LRthighA    = 30*deg        ;
   
       LLlimbA     = -20*deg        ;
  
       LRlimbA     = -10*deg        ;


  
      LLupperArmA     = 20*deg
      LLhandA     = 145*deg       ;
 
  
      LRupperArmA      = 50*deg      ;
    
      LRhandA    = 70*deg       ;
  
     draw.clearRect(0,0,canvasW,canvasH)
      drawLbody()
}


function Rfighting(){
       RbodyA      = -3*deg        ; 
 

       RLthighA    = 20*deg    ;
 
       RRthighA    = -30*deg        ;
   
       RLlimbA     = 20*deg        ;
  
       RRlimbA     = 10*deg        ;


  
      RLupperArmA     = -20*deg
      RLhandA     = -145*deg       ;
 
  
      RRupperArmA      = -50*deg      ;
    
      RRhandA    = -70*deg       ;
  
     draw.clearRect(0,0,canvasW,canvasH)
      drawRbody()
}



                                                                                                        // moves




                                                                                                 // wave function 
var wv1 = -30 ;
var wv2 = 0 ;
var wv3 = -30 ;
var wv4 = 0 ;
var wv5 = 0;

function wv_reset(){
       wv1 = -30 ;
       wv2 = 0 ;
       wv3 = -30 ;
       wv4 = 0 ;
       wv5 = 0
}

var i = 0 ;
function wave(){
wv_reset()
var waveTime = setInterval( function(){	      
                    if(wv1 == -30){ 
                          Fstanding()}
	if( wv1 > -120 ){
                          FLupperArmA      = 105*deg       ;

	       FLhandA   = -wv1*deg     

	       wv1 --  }
	if ( wv1 == -120 &&  wv2 < 90 ){
	      
	      FLhandA   = -wv1*deg - wv2*deg    

	      wv2 ++ }
                 if( wv2 == 90 &&  wv3 > - 120){
            
	       FLhandA   = -wv3*deg     

	       wv3 --  }
	if ( wv3 == -120 &&  wv4 < 90 ){
	      
	      FLhandA   = -wv3*deg - wv4*deg    

	     wv4 ++ }
                   if(wv4 == 90 && wv5 < 1){
                       Fstanding()
	    wv5++
                        clearInterval(waveTime)}

             draw.clearRect(0,0,canvasW,canvasH)
             drawFbody()            
             i++
} , 5 ) 

}    




                                                                                                      // jump function
 var jv1 = 0 ;
var jv2 = 0 ;  
var jv3 = 0 ;
var jv4 = 0 ;
var jv5 = 0 ;
var jv6 = 0 ;      


function jv_reset(){
 jv1 = 0 ;
 jv2 = 0 ;  
 jv3 = 0 ;
 jv4 = 0 ;
 jv5 = 0 ;
 jv6 = 0 ;    
}

function jump(){
jv_reset()

var jumpTime = setInterval( function(){
if(jv1 == 0){
Fstanding()
}
//fold legs 
	if( jv1 < 50 ){
	       FbodyCY  += 2

                          FLthighA    +=  1*deg    ;
 
	       FLlimbA     -= 2*deg        ;
  

	       FRthighA   -= 1*deg        ;
   
	       FRlimbA     += 2*deg        ;

      

	       jv1+=2  }
// unfold legs
	if ( jv1 == 50 &&  jv2 < 50 ){ 
	      FbodyCY  -= 2 

                          FLthighA    -= 1*deg    ;
 
	        FLlimbA     += 2*deg        ;
  

	      FRthighA   += 1*deg        ;
   
	        FRlimbA     -= 2*deg        ;

      
 
	      jv2+=2 }

// jump up 
	if ( jv2 == 50 &&  jv3 < 40 ){ 
	      FbodyCY  -= 4   
	      jv3++ }
// come down
	if ( jv3 == 40 &&  jv4 < 40 ){ 
	      FbodyCY  += 4    
	      jv4++ }
//fold legs 
	if ( jv4 == 40 &&  jv5 < 30 ){ 
	      FbodyCY  += 1    

                          FLthighA    += 1*deg    ;
 
	        FLlimbA     -= 2*deg        ;
  

	      FRthighA   -= 1*deg        ;
   
	        FRlimbA     += 2*deg        ;

  

	      jv5++ }
// unfold legs
	if ( jv5 == 30 &&  jv6 < 30 ){ 
	      FbodyCY  -= 1    

                          FLthighA    -= 1*deg    ;
 
                          FLlimbA     += 2*deg        ;
  

                           FRthighA   += 1*deg        ;
   
 	        FRlimbA     -= 2*deg        ;


	      jv6++ }
                      if( jv6 == 30){
                           Fstanding()
                           clearInterval(jumpTime)}
 
             draw.clearRect(0,0,canvasW,canvasH)

	 drawFbody()
} , 10 ) 
}




                                                                                                                // punch function

var pv1 =0
var pv2 =0
function punch(){

    pv1 = 0
    pv2 = 0

    var punchStyle = Math.floor(Math.random()*3)
    var punchA = Math.random()*0.7 +1

    var punchTime = setInterval(
        function(){
            if(punchStyle == 0 ){

                if(pv1 == 0){Rfighting()}
                if(pv1 < 50){
                RRupperArmA  -= punchA*deg
                RRhandA  +=  1.5*deg
                pv1 ++
                }

                if(pv1 == 50 && pv2 < 50){
                RRupperArmA  += punchA*deg
                RRhandA  -=  1.5*deg
                pv2 ++
                }

                if(pv2==50){ 
                Rfighting()
                clearInterval(punchTime)
                }
            }
            
            if(punchStyle== 1){

                if(pv1 == 0){
                Rfighting()
                RLhandA  = -90*deg }

                if(pv1 < 50){
                RLupperArmA  -= 2*deg
                RLhandA  += 1.3*deg
                pv1 ++
                }

                if(pv1 == 50 && pv2 < 50){
                RLupperArmA  += 2*deg
                RLhandA  -=  1.3*deg
                pv2 ++
                }
            
                if(pv2==50){ 
                Rfighting() 
                clearInterval(punchTime)
                }
            }
            
            if(punchStyle == 2){
            if(pv1 == 0){Rfighting()}
            if(pv1 < 50){
             RLupperArmA  -= punchA*deg
            RLhandA  +=  3*deg
            pv1 ++
            }
            if(pv1 == 50 && pv2 < 50){
             RLupperArmA  += punchA*deg
            RLhandA  -=  3*deg
            pv2 ++
            }
            if(pv2==50){
            Rfighting()
            clearInterval(punchTime)
            }
            }
            
            
            draw.clearRect(0,0,canvasW,canvasH)
            drawRbody()
            
            },5)

}



                                                                                                             // wallk function

var wrv1 = 0
var wrv2 = 0
var wrv3 = 0
var wrv4 = 0
var wrv5 = 0
var wrv6 = 0
var wrv7 = 0
var wrv8 = 0
var wrv9 = 0
var wrv10 = 0

function wrv_reset(){
 wrv1 = 0
 wrv2 = 0
 wrv3 = 0
 wrv4 = 0
 wrv5 = 0
 wrv6 = 0
 wrv7 = 0
 wrv8 = 0
 wrv9 = 0
 wrv10 = 0
}



   var stepsTime
   var stepComplete = false;
function walkR(){

wrv_reset()

  stepsTime = setInterval(" steps()" , 25)
}


function steps(){

if(wrv1 == 0){
Rstanding() 
}
// RRthighA = -10, RLthighA = 10

if( wrv1 < 5 ){

    RRthighA += 1*deg 
    RLthighA += 1*deg

wrv1++}

                                                                                  // RRthighA = -5, RLthighA = 15 , left folding begin
 
if(wrv1 ==  5 && wrv2 < 5){

    RRthighA += 1*deg
    RLthighA -= 1*deg
    RLlimbA += 4*deg

wrv2++}

                                                                                  // RRthigh = 0 ,  RLthighA =  , RLlimbA = 

if(wrv2 == 5 && wrv3 < 10){

    RLthighA -= 1.5*deg
    RRthighA += 1*deg
    RLlimbA += 0.5*deg

wrv3++}

                                                                                  //  RRthighA = 10, RLthighA =  , RLlimbA =  

if(wrv3 == 10 && wrv4 < 5){

    RLthighA -= 4*deg 
    RLlimbA -= 0*deg
    RRthighA += 0.5*deg
wrv4 ++}

                                                                                  //   RRthighA = 12.5,  RLthighA =  , RLlimbA = 

if(wrv4 == 5 && wrv5 < 5){ 
  
    RLthighA += 1.5*deg
    RLlimbA -= 5*deg
    RRthighA += 0.5*deg

wrv5 ++}

                                                                                  // RRthighA = 15 , RLthighA = -5 , right folding begins

if( wrv5 == 5 && wrv6 < 5 ){

    RLthighA += 1.5*deg
    RRthighA -= 1*deg
    RRlimbA += 4*deg

wrv6++}

                                                                                  // RRthighA = 20 , RLthighA = 0, RRlimbA = 20 
 
if(wrv6 ==  5 && wrv7 < 5){

    RLthighA += 1*deg 
    RRthighA -= 1*deg
    RRlimbA += 1*deg

wrv7++}

                                                                                  //  RRthighA = 20 , RLthigh = 0 , RRlimbA = 25 ,

if(wrv7 == 5 && wrv8 < 10){
    RRthighA -=  3*deg
    RLthighA += 0.5*deg

wrv8++}

                                                                                  //  RRthighA = -20 , RLthighA = 10 , RRlimbA = 15 ,

if(wrv8 == 10 && wrv9 < 5){
  
    RRthighA += 1.5*deg
    RRlimbA -= 5*deg
    RLthighA += 1*deg

wrv9 ++}

                                                                                  // RRlimbA = 5 , RRthighA = -15 , RLthighA = 12.5

if(wrv9 == 5 && wrv10 < 5){ 

    RRthighA += 1.5*deg
    RLthighA += 1*deg

wrv10 ++}

                                                                                    // RRthighA = -15 , RLthighA = 15

if(wrv10 == 5){
wrv_reset()
}
                                                                                  // RRthighA = -10, RLthighA = 10 


draw.clearRect(0,0,canvasW,canvasH)
drawRbody()

}














// kick



function kick (){
Rfighting()
draw.clearRect(0,0,1000,1000)
RbodyA = -10*deg

RLthighA = -100*deg
RLlimbA = 130*deg

RRthighA = 10*deg
RRlimbA = 0*deg
drawRbody()


var t1 = setTimeout( function(){
var kickA = Math.floor(Math.random()*76) 
Fstanding()
draw.clearRect(0,0,1000,1000)
FbodyA   = -40*deg
FLthighA = 40*deg
FRthighA = -kickA*deg

FRupperArmA = -30*deg
FRhandA =  -40*deg

FLhandA = 195*deg

drawFbody()
clearInterval(t1)
}, 500)

var t2 = setTimeout( function(){
draw.clearRect(0,0,1000,1000)
RbodyA = -10*deg

RLthighA = -100*deg
RLlimbA = 130*deg

RRthighA = 10*deg
RRlimbA = 0*deg
drawRbody()
},1000)

}









var bfv1 = 0
var bfv2 = 0
var bfv3 = 0 
var bfv4 = 0
var bfv5 = 0
var bfv6 = 0 
var bfv7 = 0 
var bfv8 = 0
var bfv9 = 0

function bfv_reset(){
 bfv1 = 0
 bfv2 = 0
 bfv3 = 0 
 bfv4 = 0
 bfv5 = 0
 bfv6 = 0 
 bfv7 = 0 
 bfv8 = 0
 bfv9 = 0
}
function backflip(){
bfv_reset()

Rstanding()
var backflipTime = setInterval(
function(){

if(bfv1 < 10 ){

RLthighA -= 1*deg
RRthighA  += 1*deg


RRupperArmA -= 1*deg
RLupperArmA -= 3.5*deg

RRhandA -= 0*deg
RLhandA -= 1*deg
RbodyCX += 0.2

bfv1 ++ }

if(bfv1 == 10 && bfv2 < 60 ){
RheadA -= 0.5*deg

RbodyA += 0.5*deg
RbodyCY += 0.5

RLthighA -= 1*deg
RRthighA  -= 1*deg

RLlimbA += 1*deg
RRlimbA  += 1*deg

RRupperArmA += 1*deg
RLupperArmA += 1*deg

//RRhandA -= 4*deg
//RLhandA -= 4*deg
RbodyCX += 0.1

bfv2 ++ }

if(bfv2 == 60 && bfv3 < 30 ){

RbodyA -= 1*deg
RbodyCY -= 1

RLthighA += 2*deg
RRthighA  += 2*deg

RLlimbA -= 1.5*deg
RRlimbA  -= 1.5*deg

RRupperArmA -= 6.5*deg
RLupperArmA -= 6.5*deg

//RRhandA -= 4*deg
//RLhandA -= 4*deg

bfv3 ++ }

if(bfv3 == 30 && bfv4 < 15 ){


RbodyA -= (4/1.5)*deg
RbodyCY -= 2

RLthighA -= (6/1.5)*deg
RRthighA  -= (6/1.5)*deg

RLlimbA += 1*deg
RRlimbA  += 1*deg

RRupperArmA += 7*deg
RLupperArmA += 7*deg

RRhandA -= 2*deg
RLhandA -= 2*deg
RbodyCX += 0.6/1.5

bfv4 ++ }

if(bfv4 == 15 && bfv5 < 30 ){


RbodyA -= 18/3*deg
RbodyCY -= 2/3

RLthighA -= 2*deg
RRthighA  -= 2*deg

RLlimbA += 2*deg
RRlimbA  += 2*deg

RRupperArmA -= 1*deg
RLupperArmA -= 1*deg

RRhandA -= 2*deg
RLhandA -= 2*deg
RbodyCX += 0.6/3

bfv5 ++ }



if(bfv5 == 30 && bfv6 < 30 ){

RheadA += 1*deg

RbodyA -= 14/3*deg
RbodyCY += 5/3
RbodyCX -= 0.6

RLthighA += 4*deg
RRthighA  += 4*deg

RLlimbA -= 3*deg
RRlimbA  -= 3*deg

RRupperArmA += 4/3*deg
RLupperArmA += 4/3*deg

RRhandA += 2*deg
RLhandA += 2*deg
//RbodyCX += 0.6/3

bfv6 ++ }

                                                  // unfold legs in the end of bkf 

if(bfv6 == 30 && bfv7 < 20 ){

RbodyA += 1*deg
RbodyCY += 0.1

RLthighA -= 2*deg
RRthighA  -= 2*deg

RLlimbA += 3*deg
RRlimbA  += 3*deg

RRupperArmA += 4/3*deg
RLupperArmA += 4/3*deg

RRhandA -= 4*deg
RLhandA -= 4*deg

bfv7 ++ }

                                                  // fold legs after jump

if(bfv7 == 20 && bfv8 < 40 ){

RbodyA -= 0.5*deg
RbodyCY -= 0.05

RLthighA += 1*deg
RRthighA  += 1*deg

RLlimbA -= 3/2*deg
RRlimbA  -= 3/2*deg

RRupperArmA += 2/3*deg
RLupperArmA += 2/3*deg

RRhandA += 1*deg
RLhandA += 1*deg

bfv8 ++ }

                                                  // unfold legs after jump

if(bfv8 == 40 && bfv9 < 20){
RLthighA += 0.5*deg
RRthighA  -= 0.5*deg


//RRupperArmA += 0.5*deg
//RLupperArmA = 3.5*deg

RRhandA -= 0*deg
RLhandA -= 1*deg
RbodyCX -= 0.1

bfv9++}
                                                  // back to standing
if(bfv9 == 20){
Rstanding()
clearInterval(backflipTime)
}

draw.clearRect(0,0,1000,1000)
drawRbody()
},10)

}




                                                                                                          // run
