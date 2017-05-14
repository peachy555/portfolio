$(document).ready(function(){
  $('.projects.content').hide();
  $('.projects.item').hover(function() {
    $(this).children().fadeIn();
  }, function() {
    $(this).children().fadeOut();
  })

  $(document).on('click', '.clickable', function(e){
    var link = $(e.target).attr("link");
    window.open(link, '_blank');
  });

  $(document).on('click', 'a.menu.item', function(event){
    event.preventDefault();
    var distance = $( $.attr(this, 'href') ).offset().top;
    $('html, body').animate({
        scrollTop: distance
    }, distance/2.5);
});
})
