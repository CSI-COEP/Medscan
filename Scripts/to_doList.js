
  //// NOTES / TO-LIST 


  $(".inner-list").on("click","li", function(){
    $(this).toggleClass("task-completed");
});

$(".inner-list").on("click","span",function(){

    $(this).parent().fadeOut(800,function(){
        $(this).remove();
    });

});

$("input[type='text']").keypress(function(event){

        if(event.which==13){

          var listText =  ($(this).val());
          $(this).val("");
          $(".inner-list").append("<li>  <span><i class='fa fa-trash'></i></span>" + listText + "</li>"); 
        }
});

$(".fa-plus-circle").click(function(){

    $("input[type='text']").fadeToggle();

});