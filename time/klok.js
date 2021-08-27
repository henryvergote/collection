

function veranderSegment(uur, min) {
    //uur tiental
    switch (Math.floor(uur/10)) {
        case 0:
            document.getElementById("uur11").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur12").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur13").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur14").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur15").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur16").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur17").style.background = "rgb(255, 255, 255)"; 
            break;
        case 1:
            document.getElementById("uur11").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur12").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur13").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur14").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur15").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur16").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur17").style.background = "rgb(49, 49, 49)"; 
            break;
        case 2:
            document.getElementById("uur11").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur12").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur13").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur14").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur15").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur16").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur17").style.background = "rgb(255, 255, 255)"; 
            break;
        };
    //uur eenheid
    switch (uur - (Math.floor(uur/10))*10) {
        case 0:
            document.getElementById("uur21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur24").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur25").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 1:
            document.getElementById("uur21").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur22").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur24").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur27").style.background = "rgb(49, 49, 49)"; 
            break;
        case 2:
            document.getElementById("uur21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur22").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur25").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur26").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 3:
            document.getElementById("uur21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur22").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 4:
            document.getElementById("uur21").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur27").style.background = "rgb(49, 49, 49)"; 
            break;
        case 5:
            document.getElementById("uur21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur23").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 6:
            document.getElementById("uur21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur23").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur25").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 7:
            document.getElementById("uur21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur22").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur24").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur27").style.background = "rgb(49, 49, 49)"; 
            break;
        case 8:
            document.getElementById("uur21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur25").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 9:
            document.getElementById("uur21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("uur26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("uur27").style.background = "rgb(255, 255, 255)"; 
            break;
    };
    //min tiental
    switch ((Math.floor(min/10))) {
        case 0:
            document.getElementById("min11").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min12").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min13").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min14").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min15").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min16").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min17").style.background = "rgb(255, 255, 255)"; 
            break;
        case 1:
            document.getElementById("min11").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min12").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min13").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min14").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min15").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min16").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min17").style.background = "rgb(49, 49, 49)"; 
            break;
        case 2:
            document.getElementById("min11").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min12").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min13").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min14").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min15").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min16").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min17").style.background = "rgb(255, 255, 255)"; 
            break;
        case 3:
            document.getElementById("min11").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min12").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min13").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min14").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min15").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min16").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min17").style.background = "rgb(255, 255, 255)"; 
            break;
        case 4:
            document.getElementById("min11").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min12").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min13").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min14").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min15").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min16").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min17").style.background = "rgb(49, 49, 49)"; 
            break;
        case 5:
            document.getElementById("min11").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min12").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min13").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min14").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min15").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min16").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min17").style.background = "rgb(255, 255, 255)"; 
            break;
    };
    //min eenheid
    switch (min - (Math.floor(min/10))*10) {
        case 0:
            document.getElementById("min21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min24").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min25").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min27").style.background = "rgb(255, 255, 255)";
            break;
        case 1:
            document.getElementById("min21").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min22").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min24").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min27").style.background = "rgb(49, 49, 49)"; 
            break;
        case 2:
            document.getElementById("min21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min22").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min25").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min26").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 3:
            document.getElementById("min21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min22").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 4:
            document.getElementById("min21").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min27").style.background = "rgb(49, 49, 49)"; 
            break;
        case 5:
            document.getElementById("min21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min23").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 6:
            document.getElementById("min21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min23").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min25").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 7:
            document.getElementById("min21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min22").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min24").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min27").style.background = "rgb(49, 49, 49)"; 
            break;
        case 8:
            document.getElementById("min21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min25").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min27").style.background = "rgb(255, 255, 255)"; 
            break;
        case 9:
            document.getElementById("min21").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min22").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min23").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min24").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min25").style.background = "rgb(49, 49, 49)"; 
            document.getElementById("min26").style.background = "rgb(255, 255, 255)"; 
            document.getElementById("min27").style.background = "rgb(255, 255, 255)"; 
            break;
    };
};

function berekenUur (date) {
    h = date.getHours();
    return h;
};

function berekenMin (date) {
    m = date.getMinutes();
    return m;
};

function update() {
    let k = 0;
    let d = new Date();
    uur = berekenUur(d); 
    min = berekenMin(d);
    veranderSegment(uur, min);
    console.log(k + 1);
}

function init() {
    const herhaal = setInterval(function() {
        let k = 0;
        let d = new Date();
        uur = berekenUur(d); 
        min = berekenMin(d);
        veranderSegment(uur, min);
        console.log(k + 1);
    }, 1000);
};

window.onload = init();