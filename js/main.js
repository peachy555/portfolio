$(document).ready(function(){
  $(document).on('click', '.contacts.clickable', function(e){
    window.open($(e.target).html(), '_blank');
  });
})
