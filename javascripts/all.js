var container = $(".container");

// 防止click穿透到上層
function StopBubble(e) {
  if (e && e.stopPropagation) {//非IE
    e.stopPropagation();
  }
  else {//IE
    window.event.cancelBubble = true;
  }
}

$(".menu-btn").on("click", function(){
  container.toggleClass("show-menu");
  return false;
});
$(".off-canvas-menu").on("click", function(event){
  StopBubble(event);
});
$(".shows-btn").on("click", function(){
  container.toggleClass("show-shows");
  return false;
});


// 執行開啓第二層選單
var menuItem = $('#shows .shows-title');
menuItem.on("click", function(event){
  var target = $(event.currentTarget);
  menuItem.not(target).parent().removeClass('open');
  target.parent().toggleClass('open');
  StopBubble(event);
  event.preventDefault();
});
$(".shows-collapse").on("click", function(event){
  event.stopPropagation();
});

$(document).on("click", function(){
  menuItem.parent().removeClass('open');
  container.removeClass("show-menu").removeClass("show-shows");
});

// lightbox
$('.open-popup-link').magnificPopup({
  type: 'ajax'
});
