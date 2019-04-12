
    
    /*button.onclick = function(event) {
  // const key = event.key; // const {key} = event; ES6+
   // if (key === "Delete") {
    {
      //alert("Space pressed!");
      $("#square").hide();
   // $(this).fadeOut('slow');
    }
  }*/
  var num = 0;

  $("#item-2 ").click(function(){
    num = num + 1;
    console.log(num);

    if(num = 2){
      $("#t2").addClass("show");
    }
    
  
   $("#t2s").addClass("show");
});

$("#show").click(function(){
  $("p").show();
});

$("#item-2 ").click(function(){
  $("#d1").addClass("show");
});

$("#show").click(function(){
  $("p").show();
});

$("#item-1 ").click(function(){
  $("#d1").addClass("show");
  $("#d1").addClass("showF");
  console.log('your message');
});

$("#show").click(function(){
  $("p").show();
});