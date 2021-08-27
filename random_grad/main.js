"use strict"

let grad1;
let grad2;
let testcolor = 0;
let gdprcheck = 0;

function reload() {
    grad1 = random();
    grad2 = random();
    changeColor();
};

function changeColor() {
    document.getElementById("body").style.background = `linear-gradient(90deg, ${grad1}, ${grad2})`;
    document.getElementById("hexcode1").innerHTML = `${grad1}`;
    document.getElementById("hexcode2").innerHTML = `${grad2}`;
    localStorage.setItem("grad1", grad1);
    localStorage.setItem("grad2", grad2);
}

// function copy() {
//     let toCopy = document.getElementById("hexcode");
//     toCopy.select();
//     document.execCommand("copy");
// }

function random() {
    let red  = (Math.floor(Math.random()*256)).toString(16);
    if (red.length < 2 ){
        red = "0" + red;
    }
    let green  = (Math.floor(Math.random()*256)).toString(16);
    if (green.length < 2 ){
        green = "0" + green;
    }
    let blue  = (Math.floor(Math.random()*256)).toString(16);
    if (blue.length < 2 ){
        blue = "0" + blue;
    }
    return `#${red}${green}${blue}`;
    
};

function init() {
    grad1 = localStorage.getItem("grad1");
    grad2 = localStorage.getItem("grad2");
    changeColor();
}

window.onload = init()