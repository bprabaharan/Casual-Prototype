
 function play_help_video() {
  if(fromHistory){
   return false;
  }

 $('#slide-img').animate({ "bottom": "220px" }, 300);
 
  // Slider
  const autoplaySpeed = 2000;
  const transitionSpeed = 1;
  const help_video = document.querySelector('.help-video');
  const slideImg = document.querySelector('#slide-img');
  const help_videoCarousel = document.querySelector('.help_video-carousel');
  const slideOverlay = document.querySelector('.slide-overlay');
  const helpVideoContainer = document.querySelector('.help_video-container');

  // Controls
  const playSlideshow = document.querySelector('.play-slideshow');
  const pauseSlideshow = document.querySelector('.pause-slideshow');
  const help_videoToggle = document.querySelector('.slideshow-toggle');
  const help_videoToggleIcons = document.querySelectorAll('.slideshow-toggle img');
  const prevSlideArrow = document.querySelector('.prev-slide');
  const nextSlideArrow = document.querySelector('.next-slide');
  const slideIndicator = document.querySelector('.slide-selector');

  // Modal
  const help_videoModal = document.querySelector('.help-video-modal');
  const modalContent = document.querySelector('.modal-slide');
  const closeModalBtn = document.querySelector('.help-video-close');
  const largeScreenModal = window.matchMedia("(min-width: 1024px)");
  const tabletScreenModal = window.matchMedia("(min-width: 480px)");
  const phoneScreenModal = window.matchMedia("(max-width: 479px)");
  const slideText = document.querySelectorAll('.slide-box');

  // Indexing
  let slideDirection;
  let sectionIndex = 'indexDefault';
  //let numSlides = document.querySelector(".slide-selector").getElementsByTagName("li").length;
  let numSlides = 5;
  let slideInterval;
  let slideReady = true;
  let slidePaused = false;
  let slideModalFix = false;
  let index = 0;
  let position = [{ "bottom": "220px", "left":"0px", "zoom": "100%" },{ "bottom": "80px", "left":"0px", "zoom": "100%" },{ "bottom": "394px", "left":"0px", "zoom": "100%" },{ "bottom": "210px", "left":"0px", "zoom": "100%" },{  "bottom": "270px", "left":"150px", "zoom": "130%" }];
  
  //slider.style.width = `${(numSlides * 100)}%`;
  // Ensure transitions complete
  $(help_video).on('transitionstart', function() {
    //slideReady = false;
  });

  $(help_video).on('transitionend', function() {
    if (slideDirection == 1) {
      help_video.prepend(help_video.lastElementChild);
    } else {
      help_video.appendChild(help_video.firstElementChild);
    }
      
    help_video.style.transition = 'none';
    help_video.style.transform = 'translate(0)';
    setTimeout(function() {
      help_video.style.transition = `all ${transitionSpeed}s`;
    });
    slideReady = true;
  });
	
  // Prev/Next Slides
  prevSlide = () => {
    if (slideDirection == -1) {
      help_video.appendChild(help_video.firstElementChild);
      slideDirection = 1;
    }

    slideDirection = 1;

    if(index === 0){
		index = 5;
	}
	 index = index - 1;
	$('#slide-img').animate(position[index], 300);
	
    
  }

  nextSlide = () => {
    if (sectionIndex == 'indexDefault') {
      sectionIndex = 0;
    }
    
    if (slideDirection == 1) {
      help_video.prepend(help_video.lastElementChild);
      slideDirection = -1;
    }

    slideDirection = -1;

   if(index === 4){
		index = -1;
	}
	 index = index + 1;
	$('#slide-img').animate(position[index], 300);
	
  console.log(index);
	
  }

  // Change 'slide-selected' class
  setIndex = () => {
    $('.help-video-controls .slide-selected').removeClass('slide-selected');
    slideIndicator.children[sectionIndex].classList.add('slide-selected');
  }

  // Set prev/next index
  prevSectionIndex = () => {
    sectionIndex = (sectionIndex > 0) ? sectionIndex  - 1 : numSlides - 1;
  }

  nextSectionIndex = () => {
    sectionIndex = (sectionIndex < numSlides - 1) ? sectionIndex + 1 : 0;
  }

  // Prev/Next Arrows
  $(prevSlideArrow).click(() => {
    if (!slideReady) { return; }
    prevSlide();
    prevSectionIndex();
    setIndex();
  });

  $(nextSlideArrow).click(() => {
    if (!slideReady) { return; }
    nextSlide();
    nextSectionIndex();
    setIndex();
  });

  // Handle swipe to prev/next
  $(help_video).on('swiperight', function(e) {
    if (!slideReady) { return; }
    prevSlide();
    prevSectionIndex();
    setIndex();
  });

  $(help_video).on('swipeleft', function(e) {
    if (!slideReady) { return; }
    nextSlide();
    nextSectionIndex();
    setIndex();
  });

  // Slide selector
  document.querySelectorAll('.help-video-controls li').forEach(function(indicator, i) {
    $(indicator).click(function() {
		index = i;
      if (slideReady) {
       
      
        $('.help-video-controls ul li').removeClass('slide-selected');
		indicator.classList.add('slide-selected');
          clearInterval(slideInterval);
			
			$('#slide-img').animate(position[index], 300);
			sectionIndex = index;
			
        
      }
    });
  });

 

  // Left/Right, Spacebar & Escape Key Controls
  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
      if (!slideReady) { return; }
      prevSlide();
      prevSectionIndex();
      setIndex();
    }
    else if (e.keyCode == '39') {
      if (!slideReady) { return; }
      nextSlide();
      nextSectionIndex();
      setIndex();
    } else if (e.keyCode == '27') {
      closeModal();
    } else if (e.keyCode == '32') {      
      if (!slidePaused) {
        pauseSlideshow.style.display = 'none';
        playSlideshow.style.display = 'flex';

        pauseAutoplay();
        clearInterval(slideInterval);    

        slidePaused = true;
      } else {
        playSlideshow.style.display = 'none';
        pauseSlideshow.style.display = 'flex';

        $(helpVideoContainer).on('mouseenter', function(e){
          var onMouEnt = e.type == 'mouseenter' ? clearInterval(slideInterval) : auto() ;
        });
      
        $(helpVideoContainer).on('mouseleave', function(e){ 
          mouseLeaveCheck(e);  
        });
      }
    }
  } 



  // Autoplay Toggle
  pauseAutoplay = () => {
    $(helpVideoContainer).on('mouseenter', function(e){
      clearInterval(slideInterval);
    });
  
    $(helpVideoContainer).on('mouseleave', function(e){ 
      clearInterval(slideInterval);
    });
  }

  mouseLeaveCheck = (e) => {
    var onMouEnt = e.type == 'mouseenter' ?  
                      clearInterval(slideInterval) :   
                      auto();       
  }

  slideToggle = () => {
   
      $(helpVideoContainer).on('mouseenter', function(e){
      
        var onMouEnt = e.type == 'mouseenter' ? clearInterval(slideInterval) : auto() ;
      });
    
      $(helpVideoContainer).on('mouseleave', function(e){ 
        mouseLeaveCheck(e);  
      });
  }

  if (slidePaused == false) {    
    $(helpVideoContainer).on('mouseenter', function(e){
      var onMouEnt = e.type=='mouseenter' ? clearInterval(slideInterval) : auto() ;
    });
  
    $(helpVideoContainer).on('mouseleave', function(e){ 
      if (slideModalFix) {
        auto();
      } else if (slidePaused) {
        clearInterval(slideInterval);
      } else {
        mouseLeaveCheck(e);               
      }
    });
  } 

  $(pauseSlideshow).click(function() {
    pauseSlideshow.style.display = 'none';
    playSlideshow.style.display = 'flex';
    console.log("pause");
    pauseAutoplay();
    clearInterval(slideInterval);
    slidePaused = true;
    //slideToggle();
    
  });

  $(playSlideshow).click(function() {
    playSlideshow.style.display = 'none';
    pauseSlideshow.style.display = 'block';
    slidePaused = false;
    console.log("play");
    clearInterval(slideInterval);
    auto();
    //slideToggle();
  });

  // Autoplay
  auto = () => {
    console.log('alert');
   
    slideInterval = setInterval(function() {
      nextSlide();
      nextSectionIndex();
      setIndex();
    }, autoplaySpeed); // interval 
  }
 
  // window.clearInterval(slideInterval);
  
  auto();
  // Pause autoplay when window is not in focus
   function addEvent(obj, evType, fn, isCapturing){
    if (isCapturing==null) isCapturing=false; 
    if (obj.addEventListener){
      // Firefox
      obj.addEventListener(evType, fn, isCapturing);
      return true;
    } else if (obj.attachEvent){
      // MSIE
      var r = obj.attachEvent('on'+evType, fn);
      return r;
    } else {
      return false;
    }
  }

  // register to the potential page visibility change
  addEvent(document, "potentialvisilitychange", function(event) {});

  // register to the W3C Page Visibility API
  var hidden=null;
  var visibilityChange=null;
  if (typeof document.mozHidden !== "undefined") {
    hidden="mozHidden";
    visibilityChange="mozvisibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden="msHidden";
    visibilityChange="msvisibilitychange";
  } else if (typeof document.webkitHidden!=="undefined") {
    hidden="webkitHidden";
    visibilityChange="webkitvisibilitychange";
  } else if (typeof document.hidden !=="hidden") {
    hidden="hidden";
    visibilityChange="visibilitychange";
  }

  var potentialPageVisibility = {
    pageVisibilityChangeThreshold:3*3600, // in seconds
    init:function() {
      function setAsNotHidden() {
        var dispatchEventRequired=document.potentialHidden;
        document.potentialHidden=false;
        document.potentiallyHiddenSince=0;
        if (dispatchEventRequired) dispatchPageVisibilityChangeEvent();
      }

      function initPotentiallyHiddenDetection() {
        if (!hasFocusLocal) {
          clearInterval(slideInterval);

          // the window does not has the focus => check for  user activity in the window
          lastActionDate=new Date();
          if (timeoutHandler!=null) {
            clearTimeout(timeoutHandler);
          }
          timeoutHandler = setTimeout(checkPageVisibility, potentialPageVisibility.pageVisibilityChangeThreshold*1000+100); // +100 ms to avoid rounding issues under Firefox
        }
      }

      function dispatchPageVisibilityChangeEvent() {
        unifiedVisilityChangeEventDispatchAllowed=false;
        var evt = document.createEvent("Event");
        evt.initEvent("potentialvisilitychange", true, true);
        document.dispatchEvent(evt);
      }

      function checkPageVisibility() {
        var potentialHiddenDuration=(hasFocusLocal || lastActionDate==null?0:Math.floor((new Date().getTime()-lastActionDate.getTime())/1000));
                                      document.potentiallyHiddenSince=potentialHiddenDuration;
        if (potentialHiddenDuration>=potentialPageVisibility.pageVisibilityChangeThreshold && !document.potentialHidden) {
          // page visibility change threshold reached => raise the event
          document.potentialHidden=true;
          dispatchPageVisibilityChangeEvent();
        }
      }

      var lastActionDate=null;
      var hasFocusLocal=true;
      var hasMouseOver=true;
      document.potentialHidden=false;
      document.potentiallyHiddenSince=0;
      var timeoutHandler = null;

      addEvent(document, "pageshow", function(event) {});
      addEvent(document, "pagehide", function(event) {});
      addEvent(window, "pageshow", function(event) {});
      addEvent(window, "pagehide", function(event) {});
      addEvent(document, "mousemove", function(event) {
        lastActionDate=new Date();
      });
      addEvent(document, "mouseover", function(event) {
        hasMouseOver=true;
        setAsNotHidden();
      });
      addEvent(document, "mouseout", function(event) {
        hasMouseOver=false;
        initPotentiallyHiddenDetection();
      });
      addEvent(window, "blur", function(event) {
        hasFocusLocal=false;
        initPotentiallyHiddenDetection();
      });
      addEvent(window, "focus", function(event) {
        hasFocusLocal=true;
        setAsNotHidden();
      });
      setAsNotHidden();
    }
  }

  potentialPageVisibility.pageVisibilityChangeThreshold=0; // 4 seconds for testing
  potentialPageVisibility.init();

}