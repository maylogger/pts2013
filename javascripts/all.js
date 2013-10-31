$(".menu-btn").click(function(){
  $(".container").toggleClass("show-menu");
  return false;
});

$(".shows-btn").click(function(){
  $(".container").toggleClass("show-shows");
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
});
$(document).click(function(){
  menuItem.removeClass('open');
});


// video-light-box
$('.popup-youtube').magnificPopup({
  type: 'iframe'
});
