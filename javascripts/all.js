$(".menu-btn").click(function(){
  event.stopPropagation();
  $(".container").toggleClass("show-menu");
  return false;
});
$(".off-canvas-menu").click(function(){
  event.stopPropagation();
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


// imageloaded

$('body').imagesLoaded().done( function( instance ) {
  console.log('all images successfully loaded');
  $('body').removeClass('img-loading');
});


// test
$('.video').magnificPopup({
  type: 'iframe',


  iframe: {
    patterns: {
      dailymotion: {

        index: 'dailymotion.com',

        id: function(url) {
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {

                    return m[4];
                }
                return m[2];
            }
            return null;
        },

        src: 'http://www.dailymotion.com/embed/video/%id%'

      }
    }
  }


});
