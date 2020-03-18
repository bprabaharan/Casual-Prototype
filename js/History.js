var history_details = [];

$(".back-btn").click(function(){
    console.log(history_details,history_details.length-1);
    eval(history_details[history_details.length-1]);
});

function showLandingPage(){    
    $(".hi-light-copy").animate({marginTop:'-50px',opacity:'0'},1000).hide();
    $(".Fax-Section").hide(1000);
    $(".Main-content").hide();
    $(".Print-content-main").css('width','696px').delay(100).show(100);
    $(".back-btn").css('opacity','.3');
    history_details.pop();
}

function showFirstLandingPage(){        
    $(".fax-keyboard-section").removeClass('transitionBU').animate({marginTop:'250px',opacity:'0'},600).hide(600);
    $(".Fax-Section").removeClass('anim-txt');
    $(".hi-light-copy").delay(300).animate({marginTop:'70px',opacity:'1'},600).show(300);
    $(".Top-shade,.Bottom-shade").show();
    $(".Fax-Section").delay(1500).removeClass('anim-disappear').addClass('anim-reappear-left-right').show(300);    
    history_details.pop();
}

function showOption(){
    console.log('showOption');
    $(".option-content, .option-function").css({'opacity':'0.3'});
    $(".option-landing .option-content").animate({'margin-left':'-2.162em'},600);
    $(".option-landing .option-function").hide(300);
   setTimeout( function(){
      $(".option-landing").hide();  
      $(".example1").removeClass('transitionLR');
      $(".example1").removeClass('anim-txt');
      $(".example1").hide();
      $(".example1").css({'animation': 'floatText .0s ease-in-out'});
      $(".example1").css({'margin-left':'-2.162em'}); 
      $(".example1").css({'opacity':'0.3'});
      $('.hi-light-copy').animate({width: '420px'},300);
      $('.scrollspy').animate({width: '420px'},300);
      $(".done-but,.copy-button").show(600);
      $(".copy-num").css({'margin-top':'-100px'});
      setTimeout( function(){ 
         $(".example1").show(); 
         $(".example1").animate({'margin-left':'0em'},600);
          setTimeout( function(){ 
             
                $(".option-function").hide(); 
                $(".option-content, .option-function").css({'opacity':'0.3'});
                $(".example1").css({'opacity':'1'});
             }, 600 );
       }, 600 );
       
    }, 600 );
    
    history_details.pop();
    console.log(history_details,history_details.length-1);
    
 }
 function delayScanMode(){
     
    $(".option-landing-scanmode").hide();
    $(".option-landing").hide();
    $(".option-landing-sides").hide();
    $(".option-landing-color").hide();
    $(".option-landing-resize").hide();
    //  $(".option-landing").removeClass('transitionLR');
     $(".option-landing").css({'margin-left':'80px'});  
    
     setTimeout( function(){  
       $(".option-landing").show();
       $(".option-landing").animate({'margin-left':'0px'},600);  
       setTimeout( function(){  
       $(".option-function").show();
       $(".option-landing").css({'opacity':'1','visibility': 'visible'}); 
       }, 600 );
       // $(".option-function").css({'opacity':'1','visibility': 'visible'}); 
           }, 600 );

           history_details.pop();
    console.log(history_details,history_details.length-1);
}