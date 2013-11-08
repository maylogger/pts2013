$(".menu-btn").click(function(){
  event.stopPropagation();
  $(".container").toggleClass("show-menu");
  return false;
});

$(".shows-btn").click(function(){
  event.stopPropagation();
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

// video-light-box
$('.popup-youtube').magnificPopup({
  type: 'iframe'
});

$(document).click(function(){
  menuItem.removeClass('open');
  $(".container").removeClass("show-menu").removeClass("show-shows");
});
