$(document).ready(function () {

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

  
}
    $(".check-box-list input[type=checkbox]").click(function (event) {
       if ($(this).is(":checked")) {          
         $(".check-box-list input[type=checkbox]").removeAttr("checked"); 
         $('#'+this.attributes.id.value).attr("checked", "checked");          
          if($(this).val() ==="Document" || $(this).val() ==="Photo" || $(this).val() ==="ID Card"){                              
             $('#scan').find('span').text(event.target.value); 
             $(".option-landing .optionli").css('margin-top','0px');
             setTimeout(delayScanMode, 500)                       
          } 
       }
   });

 

    $(".check-box-list1 input[type=checkbox]").click(function (event) {       
       if ($(this).is(":checked")) {
          $(".check-box-list1 input[type=checkbox]").removeAttr("checked");
          $('#'+this.attributes.id.value).attr("checked", "checked");                                 
           if($(this).val() ==="1 to 1-Sided" || $(this).val() ==="1 to 2-Sided"){ 
             $("#sides").find('span').text(event.target.value);
             $(".option-landing .optionli").css('margin-top','-97px'); 
             setTimeout(delayScanMode, 500);
          }	
       }
   });
   $(".check-box-list2 input[type=checkbox]").click(function (event) {
       if ($(this).is(":checked")) {          
          $(".check-box-list2 input[type=checkbox]").removeAttr("checked");
          $('#'+this.attributes.id.value).attr("checked", "checked");            
          if($(this).val() ==="Automatic" || $(this).val() ==="Color" || $(this).val() ==="Grayscale" ){                   
             $('#color').find('span').text(event.target.value);
             $(".option-landing .optionli").css('margin-top','-185px');               
             setTimeout(delayScanMode, 500);                
          }
       }
   });
   $(".check-box-list3 input[type=checkbox]").click(function (event) {
       if ($(this).is(":checked")) {
          $(".check-box-list3 input[type=checkbox]").removeAttr("checked");
          $('#'+this.attributes.id.value).attr("checked", "checked");            
          if($(this).val() ==="None" || $(this).val() ==="Custom" || $(this).val() ==="Fit to Page" ){             
             $('.option-landing #resize').find('span').text(event.target.value);
             $(".option-landing .optionli").css('margin-top','-270px'); 
             setTimeout(delayScanMode, 500); 
           }
       }
   });

 });

 

 $(document).ready(function(){
  // if($("#introduction .carousel a").hasClass('active')) {
   //   console.log("testing first load");
   //  $(".carousel .carousel-item").eq(0).removeClass("active");     
    // var test = $(".carousel .carousel-item").eq(2).addClass("active");     
     
 //  }  

   $(".icon-round").hide();
   $(".second-Row").hide();		 
   $(".third-Row").hide();
   $(".copy-frame").hide();
   $(".Copy-Section").hide();
   $(".Scan-Section").hide();
   $(".example2").hide();
   $(".icon-rt ").hide();
   $(".example3").hide();
   $(".example4").hide();
   $(".Dot-Section1").hide();
   $(".Dot-Section").hide();
   $(".loading-c").hide();
   $(".Fax-Section").hide();
   $(".done-button").hide();
   $(".done-but-tick1").hide();
   $(".Copy-child-Section").hide();
   $(".Main-content").hide();
   $(".Print-content-color").hide();  
   $(".Print-content-color .example3").hide();
   $(".Send-to-contact .Copy-Content").hide();	
   $(".Dot-Section .Cancel-copy").hide();
   $(".option-landing").hide();
   $(".option-landing-firstpage").hide();
   $(".optionli-child2").hide();
   $(".optionli-child3").hide();
   $(".option-landing-scanmode").hide();
   $(".option-landing-sides").hide();
   $(".option-landing-color").hide();
   $(".option-landing-resize").hide();
   $(".Printing-txt").hide();
   $(".Complete-txt").hide();
   $(".Copying-txt").hide();
   $(".done-but-round").hide();
   $(".show .show-line").hide();
   $(".fax-keyboard-section").hide();
   $(".Settings-Section ").hide();
   $(".Fax-content-add-recipient").hide();        
   $(".fax-keyboard-confirm-section").hide();
   $(".Send-to-contact").hide();
   $(".fax-animation").hide();


   $(".icon-cancel .Cancel-btn").css('opacity','0.3');

/*Add Recipient click button event*/

   $(".add-receipient").click(function(){
      $(".send-but").hide();
      $('.hi-light-copy').animate({width: '696px'},300);
      // $(".fax-keyboard-confirm-section").css('width','696px');
      $(".Fax-content-add-recipient .fax-check-child1").css('margin-top','0px');
      $(".Fax-content-confirm").addClass('anim-disappear').hide(1000);
      $(".Fax-content-confirm").css('width','696px;');
      $(".fax-keyboard-confirm-section").css('width','696px');
      setTimeout(addreceipient, 300);
  });

  function addreceipient(){
   $(".Fax-content-add-recipient").css('display','block').addClass('anim-txt').show(300);
  }

  $("#backspace").click(function(){     
   $(".Fax-content-confirm ul li:first-child").css('height','70px');
   var faxtxt = $(".display").val();
   $(".fax-keyboard-section").hide();
   
   $('.fax-keyboard-confirm-section').show(500).css('display','flex').addClass('anim-appear');
   $(".hi-light-copy").animate({marginTop:'75px', opacity:'1'}).show(10); 
   
   $(".icon-rt").css('display','block');      
   $(".icon-rt .done-but, .fax-send-count").css('display','none');
   $(".icon-rt .but-text").css('visibility', 'visible');
   $('.hi-light-copy').animate({width: '460px'},100);
   $(".Fax-content-confirm").css('width','696px;');
   
   $(".fax-keyboard-confirm-section").css('width','480px');
   $(".Top-shade").show();
   $(".Bottom-shade").show();
   $(".fax-keyboard-confirm-section .fax-check-child1").css('margin-top','0px');
   $('.fax-keyboard-confirm-section .fax-txt-head-bind').html(' <span class="fax-txt">'+ faxtxt +'</span> ');                  
});

/*Send to contact click button event*/
   $(".send-to-cont").click(function(){
      $(".icon-rt .send-but").css('display','none');
      $(".icon-rt .done-but").css('display','none');
      $(".icon-rt .done-button").css('display','none');
      $(".Send-to-contact .Send-check-child1").css('margin-top','0px');
      $(".Fax-Section .Fax-content").hide();
      $(".Fax-content-add-recipient").addClass('anim-disappear').hide(600);
      $(".fax-keyboard-confirm-section").css('width','485px');
      $(".Fax-content-confirm").hide();
      $(".Send-to-contact").css('display','block').addClass('anim-appear');
      $(".fax-keyboard-confirm-section").css('display','block').addClass('anim-appear');
      $(".fax-keyboard-confirm-section .done-but").hide();
      $(".fax-keyboard-confirm-section").css('width','696px');
      // $(".hi-light-copy").css('width','460px');
      $('.hi-light-copy').animate({width: '460px'},500); 
   });
   $(".set-tick").click(function(){
      $(".Fax-content-confirm").removeClass('anim-disappear');
      $(".fax-txt-head-bind .fax-txt").hide();      
      $(".fax-keyboard-confirm-section").css({display:'block', width: '480px'}).addClass('anim-txt');
      $(".Fax-content-confirm").css('display','block').addClass('anim-txt');
      $(".Send-to-contact").addClass('anim-disappear').hide(300);
      $(".fax-send-count").css('display','block');
      $(".fax-keyboard-confirm-section .fax-check-child1").css('margin-top','0px');
      $(".icon-rt .send-but").css('display','block');
      $(".icon-rt .done-but").css('display','none');
      $(".icon-rt .done-button").css('display','none');
   });
   $(".icon-rt .send-but").click(function(){
         $(".Fax-content-confirm").hide();
         $(".icon-rt, .hi-light-copy ").hide();
         $(".Top-shade").hide();
         $(".Bottom-shade").hide();
         $(".back-btn").css('opacity','0.3');
         $(".Cancel-btn").css('opacity','1');
         $(".fax-animation").addClass('anim-appear').show(500);
         $(".fax-keyboard-confirm-section").css('width','696px');
         
         var index = 0;
         var total = $('rece').size() - 1;
         setInterval(function(){               
            var rece = $('rece:eq(' + index + ')');
            $('p.show-lines').html(rece.text()).fadeIn("slow");               
            if(index == total){
               index = 0;
            } else {
               index++;
            }               
         }, 3800);

            $(".icon-cancel .Cancel-btn").click(function(){
                  $(".Cancel-btn").css('opacity','0.3');
                  $(".fax-animation").hide();
                  $(".fax-keyboard-confirm-section").addClass('anim-reappear-left-right');
                  $(".Fax-content-confirm").show();
                  $(".icon-rt, .hi-light-copy ").show();
                  $(".Top-shade").show();
                  $(".Bottom-shade").show();
                  $(".fax-keyboard-confirm-section").css('width','486px');
            });
         setTimeout(faxanimation, 12800);
   });

   function faxanimation(){
      console.log("animation end");
      $(".Cancel-btn").css('opacity','0.3');
      $(".fax-animation").hide();
      $(".fax-keyboard-confirm-section").addClass('anim-reappear-left-right');
      $(".Fax-content-confirm").show();
      $(".icon-rt, .hi-light-copy ").show();
      $(".Top-shade").show();
      $(".Bottom-shade").show();
      $(".fax-keyboard-confirm-section").css('width','486px');
   }
   $(".fax-keyboard-confirm-section .done-but").click(function(){
       $(".fax-keyboard-confirm-section .hi-light-copy").hide();
       $(".fax-keyboard-confirm-section .done-but").hide();
       $(".Top-shade").hide();
       $(".Bottom-shade").hide();
       $(".Fax-content-confirm").hide();
       $(".fax-animation").show();
       setTimeout(faxlanding, 12800);	
   });
   function faxlanding(){
       $(".hi-light-copy").css('width','660px');
       $(".done-but").hide();
       $(".fax-animation").hide();
       $(".Fax-Section").show();
       $(".fax-keyboard-confirm-section .hi-light-copy").show();
       $(".fax-keyboard-confirm-section .done-but").show();
       $(".fax-keyboard-confirm-section").hide();
       $(".Top-shade").show();
       $(".Bottom-shade").show();
       $(".Fax-content-confirm").hide();
   }
   
   $(".send-contact").click(function(){
       $(".Fax-content-add-recipient").hide();
       $(".Send-to-contact").show();
       $('.fax-keyboard-confirm-section .done-but').show();       
   });
  
   $(".menu-num li").click(function(){
       var selText = $(this).text();
       $(".copy-num").css('margin-top','-8px');   
       $(this).addClass('active');
       // $(this).parents('.example1').find('.copy-num').html('<li class="copy-num" style="margin-top: -10px;"># Copies'+ selText +'</li>');
       $('.example1').find('.copy-num').html('<img class="copy-icon" src="./images/Icons_SVG/u17.png">#Copies <span class="copies-txt">'+ selText +'</span>');
    });

    function onScreenEntryOptions(){
      $(".option-content").animate({marginLeft: '0px'},600);
      
      setTimeout( function(){  
         $(".option-function").show();
         $(".option-content").css({'opacity':'1','visibility': 'visible'}); 
         $(".option-function").css({'opacity':'1','visibility': 'visible'}); 
             }, 600 );
      }

    $(".option-landing ul .option-scan").click(function(event){
      if(history_details.indexOf('delayScanMode()') === -1){
         history_details.push('delayScanMode()');
      }
      console.log("option clicked",history_details);
    $(".option-landing").css({'opacity':'0.3'});
    setTimeout( function(){
       $(".option-landing .option-content").animate({'margin-left':'-2.162em'},600);
       $(".option-landing .option-function").hide(200);
      setTimeout( function(){$(".option-landing").css({'margin-left':'-42.162em'});  }, 200 );
    }, 600 );
   
   $(".option-landing-scanmode .optionli-scan-child1").css('margin-top','-10px');
   $(".option-landing-scanmode").css({'opacity':'0.3','position':'fixed'}); 
   setTimeout( function(){   
      $(".option-content").css({'margin-left':'2.162em'});
      $(".option-landing-scanmode").css({ 'margin-left': '0px'});
   },600 );
   setTimeout( function(){$(".option-landing-scanmode").show();  }, 700 );
   setTimeout( function(){
      $(".option-content").animate({ 'margin-left': '0px'},600);
      setTimeout( function(){ $(".option-landing-scanmode").css({'opacity':'1'}); },600);
   }, 800 );


    if( event.target.textContent ==="Document"){ 
      //  $(".optionli-scan-child1").css('margin-top','-10px');
       $("#trigger-scan1").css('checkbox','checked');
    }else if( event.target.textContent ==="Photo" )
    {
       $(".optionli-scan-child1").css('margin-top','-98px');
    }else if( event.target.textContent ==="ID Card"){
       $(".optionli-scan-child1").css('margin-top','-186px');
    }
});

   $(".option-landing ul .option-sides").click(function(event){
      if(history_details.indexOf('delayScanMode()') === -1){
         history_details.push('delayScanMode()');
      }
      console.log("option clicked",history_details);
      $(".option-landing").css({'opacity':'0.3'});
      setTimeout( function(){
         $(".option-landing .option-content").animate({'margin-left':'-2.162em'},600);
         $(".option-landing .option-function").hide(200);
        setTimeout( function(){$(".option-landing").css({'margin-left':'-82.162em'});  }, 200 );
      }, 600 );

      $(".option-landing-sides .optionli-land-child1").css('margin-top','-21px');
      $(".option-landing-sides").css({'opacity':'0.3','position':'fixed'}); 
      setTimeout( function(){   
         $(".option-content").css({'margin-left':'2.162em'});
         $(".option-landing-sides").css({ 'margin-left': '0px'});
      },600 );
      setTimeout( function(){$(".option-landing-sides").show();  }, 700 );
      setTimeout( function(){
         $(".option-content").animate({ 'margin-left': '0px'},600);
         setTimeout( function(){ $(".option-landing-sides").css({'opacity':'1'}); },600);
      }, 800 );

       if(event.target.textContent ==="1 to 1-Sided"){ 
          $(".optionli-land-child1").css('margin-top','-21px');
       }else if( event.target.textContent ==="1 to 2-Sided" )
       {
          $(".optionli-land-child1").css('margin-top','-109px');

       }
   });

   $(".option-landing ul .option-color").click(function(event){           
      if(history_details.indexOf('delayScanMode()') === -1){
         history_details.push('delayScanMode()');
      }
      console.log("option clicked",history_details);
      $(".option-landing").css({'opacity':'0.3'});
      setTimeout( function(){
         $(".option-landing .option-content").animate({'margin-left':'-2.162em'},600);
         $(".option-landing .option-function").hide(200);
        setTimeout( function(){$(".option-landing").css({'margin-left':'-112.162em'});  }, 200 );
      }, 600 );
      $(".option-landing-color .optionli-land-child1").css('margin-top','-24px');
      $(".option-landing-color").css({'opacity':'0.3','position':'fixed'}); 
      setTimeout( function(){   
         $(".option-content").css({'margin-left':'2.162em'});
         $(".option-landing-color").css({ 'margin-left': '0px'});
      },600 );
      setTimeout( function(){$(".option-landing-color").show();  }, 700 );
      setTimeout( function(){
         $(".option-content").animate({ 'margin-left': '0px'},600);
         setTimeout( function(){ $(".option-landing-color").css({'opacity':'1'}); },600);
      }, 800 );

       if(event.target.textContent ==="Automatic"){ 
          $(".optionli-color-child1").css('margin-top','-24px');
       }else if( event.target.textContent ==="Color" )
       {
          $(".optionli-color-child1").css('margin-top','-112px');
       }else if( event.target.textContent ==="Grayscale" )
       {
          $(".optionli-color-child1").css('margin-top','-200px');
       }
    });

    $(".option-landing ul .option-resize").click(function(){ 
      if(history_details.indexOf('delayScanMode()') === -1){
         history_details.push('delayScanMode()');
      }
      console.log("option clicked",history_details);
      $(".option-landing").css({'opacity':'0.3'});
      setTimeout( function(){
         $(".option-landing .option-content").animate({'margin-left':'-2.162em'},600);
         $(".option-landing .option-function").hide(200);
        setTimeout( function(){$(".option-landing").css({'margin-left':'-152.162em'});  }, 200 );
      }, 600 );
      $(".option-landing-resize .optionli-land-child1").css('margin-top','-24px');
      $(".option-landing-resize").css({'opacity':'0.3','position':'fixed'}); 
      setTimeout( function(){   
         $(".option-content").css({'margin-left':'2.162em'});
         $(".option-landing-resize").css({ 'margin-left': '0px'});
      },600 );
      setTimeout( function(){$(".option-landing-resize").show();  }, 700 );
      setTimeout( function(){
         $(".option-content").animate({ 'margin-left': '0px'},600);
         setTimeout( function(){ $(".option-landing-resize").css({'opacity':'1'}); },600);
      }, 800 );

       if(event.target.textContent ==="None"){ 
          $(".optionli-resize-child1").css('margin-top','-24px');
       }else if( event.target.textContent ==="Custom" )
       {
          $(".optionli-resize-child1").css('margin-top','-112px');
       }else if( event.target.textContent ==="Fit to Page" )
       {
          $(".optionli-resize-child1").css('margin-top','-200px');
       }
    });
    //---- Ranjith end ------
   $(".carousel-item.scan-icon").click(function(){
      $(".Landing-Page").hide(0);
      $(".Copy-Section").hide(50);
      $(".Scan-Section").show(10);
      //$(".second-Row").addClass('secondrow-push');
   });

   $("#introduction .copy-page").click(function(){
         if($(this).hasClass('active')) {
            $(".back-btn").css('opacity','1');                        
            $(".back-btn").css('cursor','pointer');  
            $(".Smarttask-Page").animate({zoom:'.9', opacity:'.2'}).hide(300);
            $(".Menu-Page").animate({zoom:'.9', opacity:'.2'}).hide(300);
            $(".ID-Page").animate({zoom:'.9', opacity:'.2'}).hide(300);
            $(".Scan-Page").animate({zoom:'.9', opacity:'.2'}).hide(300);
            $(".indicators .active").animate({zoom:'.9', opacity:'.2'}).hide(300);            
            $(".copy-page").animate({opacity: '0', left:'-250px'}).hide(600);
            $(".Print-content-main").hide(300);		   
            $(".Landing-Page .Main-content").show(300);
            $(".Copy-Content .example1").delay(300).animate({ opacity : 1, left : "0px" }, 600).show(2000);            
            $(".Landing-Page .example1").css('visibility','visible');            
            $(".icon-rt").css('display','block');
            $(".send-but").css('display','none');            
            $(".icon-rt .but-text").css('visibility','visible');                      
         }       
     });
   
   var history_details = [];
   $(".back-btn").click(function(){
      console.log(history_details,history_details.length-1);
      eval(history_details[history_details.length-1]);
   })

   $(".copy-num").click(function(){		 	
      /*$(".hi-light-copy").css({'width':'450px'},{'transition':' width 2s'});*/
      $('.hi-light-copy').animate({width: '552px'},100);     
      // $(".hi-light-copy").addClass('move-me-3');
      // $(".icon-round").css('transition','1s');
      // $(".icon-round").show(1000);
      $(".copy-button .done-but").animate({width: '80px', height : '90px'},100);
      $(".copy-button .done-but").addClass('move-me-2');	   
      // $(".Copy-Content .example1").addClass('First-block-animation').hide(500);	
      $(".Copy-Content .example1").animate({left: '-2.162em'},300);
      $(".Copy-Content .example1").animate({"opacity": "0"}).hide(600);
      // $(".Copy-Content .example2").css('opacity','0');
      // $(".Copy-Content .example2").animate({"opacity": "1"}).show(100);
      
      $(".copy-button .done-but-tick1").show(100);
      $(".copy-button .but-text").hide();
      // $(".copy-button .done-but").hide();
      $(".options").hide();
      $(".no-row").hide();
      $(".example3").hide();	  
      // $(".Copy-Content .example2").delay(150).animate({ opacity : 1, left : "0px" }, 1000).show();
      // $(".Copy-Content .example2 .menu-num").delay(150).animate({ opacity : 1, left : "0px" }, 1000).show();
      $(".example2").delay(150).animate({opacity : 1, left : "0px"}, 1000).show();
      $(".example2 .copy-ul .copy-num1").delay(150).animate({opacity : 1, left : "0px"}, 1000).show();
      $(".example2 .menu-num").delay(150).animate({opacity : 1, left : "0px"}, 1000).show();
   });
 

   $(".Print-content-copy .done-but-tick1").click(function(){	
      $('.hi-light-copy').animate({width: '420px'},100);
      $(".example2 .copy-ul .copy-num1").delay(150).animate({opacity : 1, left : "2.162em"}, 1000).hide();
      $(".example2 .menu-num").delay(150).animate({opacity : 1, left : "2.162em"}, 1000).hide();
      $(".copy-button .done-but").animate({width: '210px', height : '90px'},100);
      $(".copy-button .but-text").show(100);
      $(".copy-button .done-but-tick1").hide(0);
      $(".options").show();
      $(".copy-button .done-but").removeClass('move-me-2');	
      $(".copy-button").show(10);
      $(".Print-content-copy .example2").hide(100);
      $(".Print-content-copy .example1").show(300);	
      $(".Copy-Content .example1").animate({"opacity": "1"}).show(600);	 
      //$(".scrollspy").css({'width':'680px'});   
   });


   $(".Fax-Page").click(function(){ 
      history_details.push("showLandingPage()"); 
      if($(this).hasClass('active')) {
         $(".back-btn").css('opacity','1'); 
         $('.hi-light-copy').animate({width: '690px'},500);     
         $(".Landing-Page").show(10);
         $(".example1").css('display','none');
         $(".Landing-Page .Main-content").show();
         $(".Main-content .Print-content-copy").show();
         $(".Landing-Page .Print-content-main").hide();
         $(".Print-content-copy").show();
         
         setTimeout(faxtxtlanding, 500);   
      }     
  });
   function faxtxtlanding(){
      // $(".Main-content .Fax-Section").show(1000);  
      $(".Main-content .Fax-Section").css('display','block').addClass('anim-txt');
   }

   $(".fax-number").click(function(){
         history_details.push("showFirstLandingPage()");
         $(".Fax-Section").addClass('anim-disappear');         
         $(".Fax-Section").hide(1000);        
         setTimeout(faxkeyboard,1100);         
   });

   function faxkeyboard(){         
      $('.hi-light-copy').animate({marginTop:'-80px', opacity:'0'}).hide(50);       
      $(".fax-keyboard-section").addClass('transitionBU');
      $(".fax-keyboard-section").css({'opacity':'1', marginTop:'40px'}).show(50);      
      $(".fax-keyboard-confirm-section .Fax-content-add-recipient").hide();      
      $(".Top-shade").hide();
      $(".Bottom-shade").hide();                  
   }
   $(function(){
      $(".clear").hide();
      $(".keys").click(function(){
         $(".clear").show();
      });

      $(".back_btn").click(function(){
          $(".keyboard").hide();
          $(".fax_btn").show();
      });
      
      var $display = $('#display');
      $display.val();
      
       $('#clear_btn').click(function(){
        $('.display').val($('.display').val().substring(0, $('.display').val().length - 1));
     
      });

      $(document).on('click', 'button.number', function(){
          if($display.val() != 0) {
              $display.val($display.val() + $(this).val());
          } else {
              $display.val($(this).val());
          }
          
      });

      function phoneno(){          
          $('#display').keypress(function(e) {
              var a = [];
              var k = e.which;

              for (i = 48; i < 58; i++)
                  a.push(i);

              if (!(a.indexOf(k)>=0))
                  e.preventDefault();
          });
      }
  });
  $(".options").click(function(){
     console.log('hi');
      history_details.push("showOption()");
      $(".option-landing ul li:first-child").css('height','82px');
      $(".done-but").hide();
      $(".example1").addClass('transitionLR');
      setTimeout(hideexample1, 300); 
      $('.hi-light-copy').animate({width: '690px'},300);
      setTimeout(hidebut, 1000);         
   });

     
   function hideexample1(){
      $(".example1").hide(); 
      $(".Print-content-copy .option-landing").show();
      onScreenEntryOptions(); 
      $(".Print-content-copy .option-landing .optionli").css('margin-top','-1px'); 
   }
   function hidebut(){    
      $(".icon-rt").hide(10); 
   }

 /*Copy button click event*/
   $(".copy-button .but-text").click(function(){
    $(".Print-content-copy").hide(10);	
    $(".Top-shade").hide(10);
    $(".Bottom-shade").hide(10);
    $(".icon-cancel .Cancel-btn").css('opacity','1');
    $(".Dot-Section").show();	
    $('.show .show-line').hide();

       var index = 0;
       var total = $('rec').size() - 1;
       setInterval(function(){               
          var rec = $('rec:eq(' + index + ')');
          $('p.show-line').html(rec.text()).fadeIn("slow");               
          if(index == total){
             index = 0;
          } else {
             index++;
          }               
       }, 3800);

       $(".icon-cancel .Cancel-btn").css('opacity','1').click(function(){
          $('.Dot-Section .show').hide();
          setTimeout(cancelcopying, 10);             
       });
      
               
        setTimeout(explode, 12000);	

    //  $('.Copying-txt').fadeIn('slow', function(){
    //       $('.Copying-txt').delay(5000).fadeOut(); 
    //       setTimeout(printcopy, 5500);	
    //    });
    //    function printcopy(){
    //       $('.Printing-txt').fadeIn('slow', function(){
    //          $('.Printing-txt').delay(4000).fadeOut(); 
    //          setTimeout(completecopy, 4500);	
    //       });   
    //    } 
    //    function completecopy(){
    //       $('.Complete-txt').fadeIn('slow', function(){
    //          $('.Complete-txt').delay(4000).fadeOut(); 	
    //       });   
    //    }

    //    $(".icon-cancel .Cancel-btn").css('opacity','1').click(function(){
    //       console.log("cancel button click from animation page");
    //       setTimeout(cancelcopying, 10);
         
    //       // $('.Cancel-copy').fadeIn('slow', function(){
    //       //    $('.Cancel-copy').delay(400).fadeOut();  
    //       //    setTimeout(cancelcopying, 500);	
    //       // });             
    //    });

      
   });
   function cancelcopying(){
      // $(".Print-content-copy").show(10);
      // $(".Dot-Section").hide();	
      // $(".icon-cancel .Cancel-btn").css('opacity','0.3');
      // $(".icon-cancel .Cancel-btn").css('cursor','pointer');
      // $(".Dot-Section .copy-gif-anim").hide(100);
      // $(".Dot-Section .Cancel-copy").show(10);               
      $(".Dot-Section .copy-gif-anim").hide();            
      $(".Cancel-copy").show(0);  
   }
 
   function explode(){
      $(".loading").hide();			
      setTimeout(nextscreen, 2000);		
   }
   function nextscreen(){
    $(".Bottom-shade").show();
    $(".Dot-Section").hide();
    $(".icon-cancel .Cancel-btn").css('opacity','0.3');
    $(".Print-content-copy").show();			
   }

   $("#return").click(function(){
      window.history.back();
   });
   
   $(".example3 .copy-color-2 li").click(function(){
     $(".example3").hide(100);
     $(".example4").show();			   	   
   });

  
   
   $(document).ready(function(){
      var $checkboxes = $('.Send-checkbox-faxlist input[name="set-input"]');          
      if ($('input.faxcheckbox').prop('checked')) {         
         var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
         $('#count-checked-checkboxes').text(countCheckedCheckboxes);
         var countCheckedCheckboxess = $checkboxes.filter(':checked').length;
         $('#count-checked-checkboxess').text(countCheckedCheckboxes);
      }         
      $checkboxes.change(function(){
         var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
         $('#count-checked-checkboxes').text(countCheckedCheckboxes);
         $('#count-checked-checkboxess').text(countCheckedCheckboxes);
         
         $('#edit-count-checked-checkboxes').val(countCheckedCheckboxes);
      });
   });
   // $(".swapMe-up .up1, .swapMe-up .up2").click(function(){      
   //    $(".Fax-Section ul .firstli").animate({'marginTop' : "-=90px"}).addClass('active');
   //    if($(".Fax-Section ul li").hasClass('empty')){         
   //       $(".Fax-Section ul li .empty").css('background','red');
   //    }
   // });

   $(".swapMe-up .up1").click(function(){
      $(".Print-content-copy .scrollspy .copy-num").animate({'marginTop' : "-=90px"});
      $(".Print-content-copy .scrollspy .example2 .no-first-row .num-first").animate({'marginTop' : "-=90px"});
      $(".Print-content-copy .scrollspy .example3 .copy-color-1 .copy-color-1-1").animate({'marginTop' : "-=90px"});
      $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({'marginTop' : "-=90px"});
      $(".Print-content-copy .scrollspy .option-landing .option1 .optionli").animate({'marginTop' : "-=90px"});
      $(".option-landing-scanmode .optionli-scan-child1").animate({'marginTop' : "-=90px"});
      $(".option-landing-sides .optionli-land-child .optionli-land-child1").animate({'marginTop' : "-=90px"});
      $(".Print-content-copy .scrollspy .option-landing-color .optionli-color-child .optionli-color-child1").animate({'marginTop' : "-=90px"});
      $(".Print-content-copy .scrollspy .option-landing-resize .optionli-resize-child1").animate({'marginTop' : "-=90px"});
      $(".Fax-Section .Section-check-child1 ").animate({'marginTop' : "-=90px"});
      $(".Fax-content-confirm .fax-check-child1 ").animate({'marginTop' : "-=90px"});
      $(".Send-to-contact .Send-check-child1 ").animate({'marginTop' : "-=90px"});
      $(".Fax-content-add-recipient .fax-check-child1").animate({'marginTop' : "-=90px"});
});
$(".swapMe-down .down1").click(function(){
      $(".Print-content-copy .scrollspy .example2 .no-first-row .num-first").animate({'marginTop' : "+=90px"});
      $(".Print-content-copy .scrollspy .example3 .copy-color-1 .copy-color-1-1").animate({'marginTop' : "+=90px"});
      $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({'marginTop' : "+=90px"});
      $(".Print-content-copy .scrollspy .option-landing .option1 .optionli").animate({'marginTop' : "+=90px"});
      $(".option-landing-scanmode .optionli-scan-child1").animate({'marginTop' : "+=90px"});
      $(".option-landing-sides .optionli-land-child .optionli-land-child1").animate({'marginTop' : "+=90px"});
      $(".Print-content-copy .scrollspy .option-landing-color .optionli-color-child .optionli-color-child1").animate({'marginTop' : "+=90px"});
      $(".Print-content-copy .scrollspy .option-landing-resize .optionli-resize-child1").animate({'marginTop' : "+=90px"});
      $(".Fax-Section .Section-check-child1").animate({'marginTop' : "+=90px"});
      $(".Fax-content-confirm .fax-check-child1 ").animate({'marginTop' : "+=90px"});
      $(".Send-to-contact .Send-check-child1 ").animate({'marginTop' : "+=90px"});
      $(".Fax-content-add-recipient .fax-check-child1").animate({'marginTop' : "+=90px"});
});
$(".swapMe-up .up2").click(function(){
   $(".Print-content-copy .scrollspy .example2 .no-second-row .num-second").animate({'marginTop' : "-=90px"});
   $(".Print-content-copy .scrollspy .example3 .copy-color-2 .copy-color-2-1").animate({'marginTop' : "-=90px"});
   $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({'marginTop' : "-=90px"});
   $(".Print-content-copy .scrollspy .option-landing .option1 .optionli").animate({'marginTop' : "-=90px"});
   $(".option-landing-scanmode .optionli-resize-child1").animate({'marginTop' : "-=90px"});
   $(".option-landing-sides .optionli-land-child .optionli-land-child1").animate({'marginTop' : "-=90px"});
   $(".Print-content-copy .scrollspy .option-landing-color .optionli-color-child .optionli-color-child1").animate({'marginTop' : "-=90px"});
   $(".Print-content-copy .scrollspy .option-landing-resize .optionli-resize-child1").animate({'marginTop' : "-=90px"});
   $(".Fax-Section .Section-check-child1").animate({'marginTop' : "-=90px"});
   $(".Fax-content-confirm .fax-check-child1 ").animate({'marginTop' : "-=90px"});
   $(".Send-to-contact .Send-check-child1 ").animate({'marginTop' : "-=90px"});
   $(".Fax-content-add-recipient .fax-check-child1").animate({'marginTop' : "-=90px"});
});
$(".swapMe-down .down2").click(function(){
   $(".Print-content-copy .scrollspy .example2 .no-second-row .num-second").animate({'marginTop' : "+=90px"});
   $(".Print-content-copy .scrollspy .example3 .copy-color-2 .copy-color-2-1").animate({'marginTop' : "+=90px"});
   $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({'marginTop' : "+=90px"});
   $(".Print-content-copy .scrollspy .option-landing .option1 .optionli").animate({'marginTop' : "+=90px"});
   $(".option-landing-scanmode .optionli-resize-child1").animate({'marginTop' : "+=90px"});
   $(".option-landing-sides .optionli-land-child .optionli-land-child1").animate({'marginTop' : "+=90px"});
   $(".Print-content-copy .scrollspy .option-landing-color .optionli-color-child .optionli-color-child1").animate({'marginTop' : "+=90px"});
   $(".Print-content-copy .scrollspy .option-landing-resize .optionli-resize-child1").animate({'marginTop' : "+=90px"});
   $(".Fax-Section .Section-check-child1").animate({'marginTop' : "+=90px"});
   $(".Fax-content-confirm .fax-check-child1 ").animate({'marginTop' : "+=90px"});
   $(".Send-to-contact .Send-check-child1 ").animate({'marginTop' : "+=90px"});
   $(".Fax-content-add-recipient .fax-check-child1").animate({'marginTop' : "+=90px"});
});

$(".swapMe-down").click(function(){
       $(".Print-content-copy .scrollspy .copy-num").animate({'marginTop' : "+=90px"});
});

$("span.up").click(function(){
    $(this).parent().insertBefore($(this).parent().prev())
});

$("span.down").click(function(){
    $(this).parent().insertAfter($(this).parent().next())
});
 
     $(".indicators .indicator-item").eq(0).text("Smart Tasks");
     $(".indicators .indicator-item").eq(1).text("Menu");
     $(".indicators .indicator-item").eq(2).text("Copy");
     $(".indicators .indicator-item").css('width','250px');
     $(".indicators .indicator-item").eq(3).text("ID Copy");
     $(".indicators .indicator-item").eq(4).text("Scan");
     $(".indicators .indicator-item").eq(5).text("Fax");
 });

 $(function(){
       height = $('#carousel .carousel-item').length+1;     

       width = $('#carousel .carousel-item').length;

       $.each($('#carousel .carousel-item'), function(key, value){
           $(this).attr('id', key);
       });
   });

   // document.addEventListener('DOMContentLoaded', function() {
   //    //find wich slide is the middle one
   //    var carousel_items = document.querySelectorAll('.carousel-item').length;
   //    var middle_slide = Math.round(carousel_items / 2);
   //    console.log("middle slide", middle_slide );
   //    console.log('The slide in the middle is the ' + middle_slide + ' out of ' + carousel_items);
      
   //    //Carousel initialization
   //    var options = {};
   //    var elems = document.querySelectorAll('.carousel');
   //    var instances = M.Carousel.init(elems, options);
      
   //    //Set the carousel to show the middle slide first
   //    var elem = document.querySelector('.carousel');
   //    var instance = M.Carousel.getInstance(elem);
   //    instance.set(middle_slide);
   //  })
   // var pages = document.querySelectorAll(".carousel-item");
   
   // for(var i=0; i<pages.length;i++) {
   //     pages[i].addEventListener("click", function(e){
   //       e.stopPropagation();
   //     });
   // }
   
     
         document.addEventListener("DOMContentLoaded", function() {
         //   var elems = document.querySelectorAll(".carousel");
               setTimeout(function(){
                  var carousel_items = document.querySelectorAll('.carousel-item').length;
                  var middle_slide = Math.round(carousel_items / 5);
                  //   var instances = M.Carousel.init(elems);
                  
                  window.next = function() {
                     var el = document.querySelector(".carousel");
                     var l = M.Carousel.getInstance(el);
                     l.next(1);
                  }
                  var elem = document.querySelector('.carousel');
                  var instance = M.Carousel.getInstance(elem);
                  instance.set(middle_slide);
            }, 1000);         
         });
