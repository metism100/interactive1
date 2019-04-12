let bluebutton = document.getElementById("item-2");
var clickcount = [];
console.log(bluebutton);


bluebutton.addEventListener("click", countfunction);


function countfunction() {
    clickcount.push(this);
    var len = clickcount.length;
    console.log(clickcount.length);

        if(clickcount.length === 1){
            first();
        } if(clickcount.length === 2) {
            second();
        }
}

function first() {
	 document.getElementById("t2").style.opacity = "1";
	 document.getElementById("t1s").style.opacity = "1";
}
function second() {
	document.getElementById("t1s").style.opacity = "1";
	
}


