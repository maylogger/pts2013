var container = $(".container");

$(".menu-btn").click(function(){
  container.toggleClass("show-menu");
  event.stopPropagation();
});
$(".off-canvas-menu").click(function(){
  event.stopPropagation();
});
$(".shows-btn").click(function(){
  container.toggleClass("show-shows");
  event.stopPropagation();
});


// 執行開啓第二層選單
var menuItem = $('#shows .shows-title');
menuItem.click(function(event){
  var target = $(event.currentTarget);
  menuItem.not(target).parent().removeClass('open');
  target.parent().toggleClass('open');
  event.stopPropagation();
  event.preventDefault();
});
$(".shows-collapse").click(function(event){
  event.stopPropagation();
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
});
