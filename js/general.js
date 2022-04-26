$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(".menu-icon").hide();
        $(".close-text").show();
      });
      
      $(".close-text").click(function(){
        $(".menu-icon").show();
        $(".close-text").hide();
      });
})