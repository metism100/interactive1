let orbutton = document.getElementById("item-1");
var orclickcount = [];
console.log(orbutton);


orbutton.addEventListener("click", orcountfunction);


function orcountfunction() {
    orclickcount.push(this);
    var len = orclickcount.length;
    console.log(orclickcount.length);

        if(orclickcount.length === 1){
            orfirst();
        } if(orclickcount.length === 2) {
            orsecond();
        }
}

function orfirst() {
	 document.getElementById("d1").style.opacity = "1";
     document.getElementById("d1").style.animationPlayState = "running";
     document.getElementById("d1").style.animationDuration = "3s";
     document.getElementById("d1").style.animationFillMode = "forwards";
}
function orsecond() {
	
}
