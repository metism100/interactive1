let orbutton = document.getElementById("item-2");
var orclickcount = [];
console.log(orbutton);


orbutton.addEventListener("click", orcountfunction);


function orcountfunction() {
    orclickcount.push(this);
    var len = orclickcount.length;
    console.log(orclickcount.length);

        if(orclickcount.length === 1){
            first();
        }
        if(orclickcount.length === 2){
            orfirst();
        } if(orclickcount.length === 3) {
            orsecond();
        }
        if(orclickcount.length === 4){
            orthree();
        } if(orclickcount.length === 5) {
            orfour();
        }
        if(orclickcount.length === 6){
            orfive();
        } if(orclickcount.length === 7) {
            orsix();
        }
        if(orclickcount.length === 8){
            orseven();
        } if(orclickcount.length === 9) {
            oreight();
        }
        if(orclickcount.length === 10){
            ornine();
        } if(orclickcount.length === 11) {
            orten();
        }
}

function first() {
     document.getElementById("d").style.opacity = "1";
     document.getElementById("d").style.animationPlayState = "running";
     document.getElementById("d").style.animationDuration = "3s";
     document.getElementById("d").style.animationFillMode = "forwards";
}

function orfirst() {
	 document.getElementById("d1").style.opacity = "1";
     document.getElementById("d1").style.animationPlayState = "running";
     document.getElementById("d1").style.animationDuration = "3s";
     document.getElementById("d1").style.animationFillMode = "forwards";
}
function orsecond() {
	document.getElementById("d2").style.opacity = "1";
    document.getElementById("d2").style.animationPlayState = "running";
    document.getElementById("d2").style.animationDuration = "3s";
    document.getElementById("d2").style.animationFillMode = "forwards";
}
function orthree() {
    document.getElementById("d3").style.opacity = "1";
    document.getElementById("d3").style.animationPlayState = "running";
    document.getElementById("d3").style.animationDuration = "3s";
    document.getElementById("d3").style.animationFillMode = "forwards";
}
function orfour() {
    document.getElementById("d4").style.opacity = "1";
    document.getElementById("d4").style.animationPlayState = "running";
    document.getElementById("d4").style.animationDuration = "3s";
    document.getElementById("d4").style.animationFillMode = "forwards";
}
function orfive() {
    document.getElementById("d5").style.opacity = "1";
    document.getElementById("d5").style.animationPlayState = "running";
    document.getElementById("d5").style.animationDuration = "3s";
    document.getElementById("d5").style.animationFillMode = "forwards";
}
function orsix() {
    document.getElementById("d6").style.opacity = "1";
    document.getElementById("d6").style.animationPlayState = "running";
    document.getElementById("d6").style.animationDuration = "3s";
    document.getElementById("d6").style.animationFillMode = "forwards";
}
function orseven() {
    document.getElementById("d7").style.opacity = "1";
    document.getElementById("d7").style.animationPlayState = "running";
    document.getElementById("d7").style.animationDuration = "3s";
    document.getElementById("d7").style.animationFillMode = "forwards";
}
function oreight() {
    document.getElementById("d8").style.opacity = "1";
    document.getElementById("d8").style.animationPlayState = "running";
    document.getElementById("d8").style.animationDuration = "3s";
    document.getElementById("d8").style.animationFillMode = "forwards";
}
function ornine() {
    document.getElementById("d9").style.opacity = "1";
    document.getElementById("d9").style.animationPlayState = "running";
    document.getElementById("d9").style.animationDuration = "3s";
    document.getElementById("d9").style.animationFillMode = "forwards";
}
function orten() {
    document.getElementById("d10").style.opacity = "1";
    document.getElementById("d10").style.animationPlayState = "running";
    document.getElementById("d10").style.animationDuration = "3s";
    document.getElementById("d10").style.animationFillMode = "forwards";
}