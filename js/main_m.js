$(document).ready(function(){
  var show = 0;
  
  $('.show').on('click', function(){
    if(show == 0){
      $('main').addClass('close');
      show = 1;
    }else{
      $('main').removeClass('close');
      show = 0;}
  })
    
});