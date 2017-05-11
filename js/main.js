$(document).ready(function(){
  $('.projects.content').hide();
  $('.projects.item').hover(function() {
    $(this).children().show();
  }, function() {
    $(this).children().hide();
  })

  $(document).on('click', '.clickable', function(e){
    var link = $(e.target).attr("link");
    window.open(link, '_blank');
  });

  // $('html, body').animate({
  //   'scrollTop': $('#anchorName2').offset().top
  // }, 2000);

//   $(document).on('click', 'a', function(event){
//     event.preventDefault();
//
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
// });
})
