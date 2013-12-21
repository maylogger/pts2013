var container = $(".container");

$(".menu-btn").click(function(){
  // event.stopPropagation();
  container.toggleClass("show-menu");
  return false;
});
$(".off-canvas-menu").click(function(){
  // event.stopPropagation();
  return false;
});
$(".shows-btn").click(function(){
  // event.stopPropagation();
  container.toggleClass("show-shows");
  return false;
});


// 執行開啓第二層選單
var menuItem = $('#shows > li');
menuItem.click(function(event){
  // console.log(event);
  var target = $(event.currentTarget);
  event.stopPropagation();
  menuItem.not(target).removeClass('open');
  target.toggleClass('open');
  event.preventDefault();  
});


$(document).click(function(){
  menuItem.removeClass('open');
  container.removeClass("show-menu").removeClass("show-shows");
});


// imageloaded
$('.sidebar').imagesLoaded().done( function( instance ) {
  // console.log('all images successfully loaded');
  $('body').removeClass('img-loading');
});


// lightbox
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true,
  mainClass: 'custom-popup-class'
  // Optionally pass markup without attaching it to DOM
  /*items: {
    src: '<div id="popup-with-something" class="mfp-hide"><div class="some-element">Instead of this element you may put anything else and it\'ll scale proportionally (e.g. flash embed object or your custom video player) </div></div>'
  }*/
});
