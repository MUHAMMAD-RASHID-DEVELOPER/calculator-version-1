

// showing the click button on screen
function show(num) {
    var output=document.getElementById("input").value;
    document.getElementById("input").value= output+num
}

// function to clear
function clr(){
    document.getElementById("input").value="";
}

// CALCULATION
function solve() {
    
var x=document.getElementById("input").value;
var y=eval(x);
document.getElementById("input").value=y;
}