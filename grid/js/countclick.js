let bluebutton = document.getElementById("item-1");
var clickcount = [];
console.log(bluebutton);


bluebutton.addEventListener("click", countfunction);


function countfunction() {
    clickcount.push(this);
    var len = clickcount.length;
    console.log(clickcount.length);

        if(clickcount.length === 1){
            first();
        } 
        if(clickcount.length === 2) {
            second();
        }

     if(clickcount.length === 3) {
            third();
        }

     if(clickcount.length === 4) {
            fourth();
        }

    if(clickcount.length === 5) {
            five();
        }
    if(clickcount.length === 6) {
            six();
        }
    if(clickcount.length === 7) {
            seven();
        }
    if(clickcount.length === 8) {
            eight();
        }

     if(clickcount.length === 9) {
            nine();
        }

    if(clickcount.length === 10) {
            ten();
        }
    if(clickcount.length === 11) {
            eleven();
        }
    if(clickcount.length === 12) {
            twelve();
        }
    if(clickcount.length === 13) {
            thirteen();
        }
    if(clickcount.length === 14) {
            fourteen();
        }
}

function first() {
	 document.getElementById("t2").style.opacity = "1";
	 document.getElementById("t1s").style.opacity = "1";
}
function second() {
    document.getElementById("t3").style.opacity = "1";
	document.getElementById("t2s").style.opacity = "1";
	
}

function third() {
    document.getElementById("t4").style.opacity = "1";
    document.getElementById("t3s").style.opacity = "1"; 
}


function fourth() {
    document.getElementById("t5").style.opacity = "1";
    document.getElementById("t4s").style.opacity = "1"; 
}

function five()  {
   document.getElementById("t6").style.opacity = "1";
   document.getElementById("t5s").style.opacity = "1";
}

function six()  {
   document.getElementById("t7").style.opacity = "1";
   document.getElementById("t6s").style.opacity = "1";
}

function seven()  {
   document.getElementById("t8").style.opacity = "1";
   document.getElementById("t7s").style.opacity = "1";
}

function eight() {
     document.getElementById("t9").style.opacity = "1";
     document.getElementById("t8s").style.opacity = "1";
}

function nine() {
    document.getElementById("t10").style.opacity = "1";
    document.getElementById("t9s").style.opacity = "1";
}

function ten() {
    document.getElementById("t11").style.opacity = "1";
    document.getElementById("t10s").style.opacity = "1"; 
}


function eleven() {
    document.getElementById("t12").style.opacity = "1";
    document.getElementById("t11s").style.opacity = "1"; 
}

function twelve()  {
   document.getElementById("t12").style.opacity = "1";
   document.getElementById("t13s").style.opacity = "1";
}

function thirteen()  {
   document.getElementById("t13").style.opacity = "1";
   document.getElementById("t14s").style.opacity = "1";
}

function fourteen()  {
   document.getElementById("t14").style.opacity = "1";
}
