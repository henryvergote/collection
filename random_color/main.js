"use strict"

let backcolor;
let testcolor = 0;
let gdprcheck = 0;

function reload() {
    randomm();
    changeColor();
};

function changeColor() {
    document.getElementById("body").style.backgroundColor = backcolor;
    document.getElementById("hexcode").innerHTML = `${backcolor}`;
    localStorage.setItem("kleur", backcolor);
}

// function copy() {
//     let toCopy = document.getElementById("hexcode");
//     toCopy.select();
//     document.execCommand("copy");
// }

function randomm() {
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
    return backcolor = `#${red}${green}${blue}`;
    
};

function init() {
    backcolor = localStorage.getItem("kleur");
    changeColor();
}

window.onload = init()