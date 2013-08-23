$(".menu-btn").click(function(){
  $(".container").toggleClass("show-menu");
  return false;
});




$(".shows-btn").click(function(){
  $(".container").toggleClass("show-shows");
  return false;
});


// 點擊任何一處，關閉已開啟的 .show-collapse
// $(document).on('click',function(){
//   $('.shows-collapse').collapse('hide');
// })
