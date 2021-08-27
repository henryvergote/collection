

function finaalCijfer (plaats,segmenten) {
    let pos =1
    segmenten.forEach(element => {
        if (element == 1) {
            document.getElementById(plaats + pos.toString()).style.background = "rgb(255, 255, 255)";
        } else {
            document.getElementById(plaats + pos.toString()).style.background = "rgb(49, 49, 49)"; 
        };
        pos++;
    });
};


function maakCijfer (plaats, cijfer) {
    switch (cijfer) {
        case 0:
            finaalCijfer(plaats,[1,1,1,0,1,1,1]);
            break;
        case 1:
            finaalCijfer(plaats, [0,0,1,0,0,1,0]);
            break;
        case 2:
            finaalCijfer(plaats, [1,0,1,1,1,0,1]);
            break;
        case 3:
            finaalCijfer(plaats, [1,0,1,1,0,1,1]);
            break;
        case 4:
            finaalCijfer(plaats, [0,1,1,1,0,1,0]);
            break;
        case 5:
            finaalCijfer(plaats, [1,1,0,1,0,1,1]);
            break;
        case 6:
            finaalCijfer(plaats, [1,1,0,1,1,1,1]);
            break;
        case 7:
            finaalCijfer(plaats, [1,0,1,0,0,1,0]);
            break;
        case 8:
            finaalCijfer(plaats, [1,1,1,1,1,1,1]);
            break;
        case 9:
            finaalCijfer(plaats, [1,1,1,1,0,1,1]);
            break;
    };
}




function veranderSegment(uur, min) {
    //uur tiental
    maakCijfer("uur1", (Math.floor(uur/10)));
    //uur eenheid
    maakCijfer("uur2", (uur - (Math.floor(uur/10))*10));
    //min tiental
    maakCijfer("min1", (Math.floor(min/10)));
    //min eenheid
    maakCijfer("min2", (min - (Math.floor(min/10))*10));
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
    let k = 0;
    const herhaal = setInterval(function() {
        let d = new Date();
        uur = berekenUur(d); 
        min = berekenMin(d);
        veranderSegment(uur, min);
        console.log(k);
        k++;
    }, 1000);
};

window.onload = init();