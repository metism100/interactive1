var num = 0;
  document.body.onkeyup = function(e){
    if(e.keyCode == 8)
  // const key = event.key; // const {key} = event; ES6+
   // if (key === "Delete") {
    {
      num = num + 1;
      //alert("Space pressed!");
      $("#rectangle"+num+"").hide();
   // $(this).fadeOut('slow');
    }
  }

/*
$('div').click(function() {
  $(this).fadeOut('slow');
});
}*/

  /*  $('document').ready(function(){
      $('body').click(function(){
        $('body').toggleClass('colorful');  
      });
    });
/
    $('#test').click(function() {
  
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        $div = $('#test'),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;
  
    $div.css({
        left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax ),
        width: Math.floor(getRandomArbitrary(0.7, 1) * divWidth ),
        height: Math.floor(getRandomArbitrary(0.7, 1) * divHeight ),
        backgroundColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
    });
  
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}*/
/*
   $(function(){
  var nav = $('.nav'),
      animateTime = 500,
      navLink = $('.header .top li');
  navLink.click(function(){
    if(nav.height() === 0){
      autoHeightAnimate(nav, animateTime);
    } else {
      nav.stop().animate({ height: '0' }, animateTime);
    }
  });
})*/

/* Function to animate height: auto *//*
function autoHeightAnimate(element, time){
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
          element.height(curHeight); // Reset to Default Height
          element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}*/