//      PRELOADER

$(window).on('load', function(){
    setTimeout(removeLoader, 200); //wait for page load PLUS one second.
  });
  
  function removeLoader(){
      $("#preload").fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $("#preload").remove(); //makes page more lightweight 
    });  
  }
  
  
  
  
  //        MOBILE NAV
  
  
  const menuBtn = document.querySelector('.btn-menu');
  const menuBtnClose = document.querySelector('.btn-close');
  const menu = document.querySelector('.menu-navi');
  const menuNav = document.querySelector('.response-menu');
  
  
  menuBtn.addEventListener('click', showMenu);
  menuBtnClose.addEventListener('click', hideMenu);
  
  
  
  
  
  function showMenu(e) {
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBtn.classList.add('hide');
    menuBtnClose.classList.add('show');
    e.preventDefault();
  };
  
  function hideMenu(e) {
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBtn.classList.remove('hide');
    menuBtnClose.classList.remove('show');
    e.preventDefault();
  }
  
  $('.response-menu__item').click(function(e) {
    menuBtn.classList.remove('hide');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBtnClose.classList.remove('show');
    e.preventDefault();
  });
  
  
  
  
  //        VH MOBILE
  
  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
  
  
  
  //      HEADER HIDE
  
  // grab an element
  var myElement = document.querySelector("header");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();
  
  
  //      CAROUSEL HERO
  
  $(document).ready(function(){
    $('.carousel').owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        animateOut: 'fadeOut'
    }
  
    );
  });
  
  
  
  
  
  
  //      LIGHTBOX GALLERY
  
  lightbox.option({
    'resizeDuration': 400,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false,  
  });
  
  //      SCROLL TO ELEMENT
  
    $('a[href^="#"]').click(function(event){
        event.preventDefault();
        var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
        //change this number to create the additional off set        
        var customoffset = 0;
        $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
    });
    
    //      ANIMATION ON SCROLL
  
    AOS.init({
        duration: 1200,
        anchorPlacement: 'top-bottom',
        offset: 10,
      });
  
  
  
  
      //      YOUTUBE
  
  
  function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
  r(function(){
      if (!document.getElementsByClassName) {
          // IE8 support
          var getElementsByClassName = function(node, classname) {
              var a = [];
              var re = new RegExp('(^| )'+classname+'( |$)');
              var els = node.getElementsByTagName("*");
              for(var i=0,j=els.length; i<j; i++)
                  if(re.test(els[i].className))a.push(els[i]);
              return a;
          }
          var videos = getElementsByClassName(document.body,"youtube");
      } else {
          var videos = document.getElementsByClassName("youtube");
      }
  
      var nb_videos = videos.length;
      for (var i=0; i<nb_videos; i++) {
          // Based on the YouTube ID, we can easily find the thumbnail image
          videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
  
          // Overlay the Play icon to make it look like a video player
          var play = document.createElement("div");
          play.setAttribute("class","play");
          videos[i].appendChild(play);
  
          videos[i].onclick = function() {
              // Create an iFrame with autoplay set to true
              var iframe = document.createElement("iframe");
              var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
              if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
              iframe.setAttribute("src",iframe_url);
              iframe.setAttribute("frameborder",'0');
  
              // The height and width of the iFrame should be the same as parent
              iframe.style.width  = this.style.width;
              iframe.style.height = this.style.height;
  
              // Replace the YouTube thumbnail with YouTube Player
              this.parentNode.replaceChild(iframe, this);
          }
      }
  });
  
      
     
  
  
  
  