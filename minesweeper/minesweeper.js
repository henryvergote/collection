let vakjes = [11,12,13,14, 15,16,17,18,19,
    21,22,23,24,25,26,27,28,29,
    31,32,33,34,35,36,37,38,39,
    41,42,43,44,45,46,47,48,49,
    51,52,53,54,55,56,57,58,59,
    61,62,63,64,65,66,67,68,69,
    71,72,73,74,75,76,77,78,79,
    81,82,83,84,85,86,87,88,89,
    91,92,93,94,95,96,97,98,99,
    ]

let bommen = {
    plaatsen: [],
    maken() {
        for (let i = 1; i < 10; i++) {
            let random = Math.floor(Math.random()*100);
            if (vakjes.indexOf(random) === -1) {
                i -= 1;
            } else { 
                if (this.plaatsen.indexOf(random) !== -1) {
                    i -=1;
                } else {
                    this.plaatsen.push(random);
                }
            }
        }
        bommen.plaatsen.sort();
    }
}

const button = document.getElementById("knop");

let aantalOpen = 0;

let vlaggen = false;

function toonCijfer(vakje) {
    let aantalGrensBommen = 0;
    if (bommen.plaatsen.indexOf(vakje-10) !== -1) {
        aantalGrensBommen++;
    }
    if (bommen.plaatsen.indexOf(vakje+10) !== -1) {
        aantalGrensBommen++;
    }
    if(vakje % 10 !== 0) {
        if (bommen.plaatsen.indexOf(vakje-11) !== -1) {
            aantalGrensBommen++;
        }
        if (bommen.plaatsen.indexOf(vakje-1) !== -1) {
            aantalGrensBommen++;
        }
        if (bommen.plaatsen.indexOf(vakje+9) !== -1) {
            aantalGrensBommen++;
        }
    }
    if(vakje % 10 !== 9)
        if (bommen.plaatsen.indexOf(vakje-9) !== -1) {
            aantalGrensBommen++;
        }
        if (bommen.plaatsen.indexOf(vakje+1) !== -1) {
            aantalGrensBommen++;
        }
        if (bommen.plaatsen.indexOf(vakje+11) !== -1) {
            aantalGrensBommen++;
        }
    return aantalGrensBommen;
}



function init() {
    bommen.maken();
    bommen.plaatsen.forEach((value)=>{
        //document.getElementById(value).style.color = "rgb(255, 0, 0)";
    });
    vakjes.forEach((value)=>{
        document.getElementById(value).innerHTML = "x";
        document.getElementById(value).onclick = function(){
            //console.log(value);
            if (vlaggen === false) {
                if (bommen.plaatsen.indexOf(value) === -1) {
                    if (document.getElementById(value).innerHTML === "x") {
                        aantalOpen++;
                        console.log(aantalOpen);
                    }
                    if (toonCijfer(value) != 0) {
                        document.getElementById(value).innerHTML = toonCijfer(value);
                    } else {document.getElementById(value).innerHTML = "";}
                    if (aantalOpen === 72) {
                        bommen.plaatsen.forEach((value)=>{
                            document.getElementById(value).style.color = "rgb(0, 255, 0)";
                        });
                        alert("Alle bommen zijn ontmanteld");
                    }
            }
                else {
                    alert("BOM");
                    bommen.plaatsen.forEach((value)=>{
                        document.getElementById(value).style.color = "rgb(255, 0, 0)";
                    });
                }  
            } else {
                if (document.getElementById(value).style.color === "rgb(255, 155, 88)") {
                    document.getElementById(value).style.color = "rgb(0, 0, 0)";
                } else {
                    document.getElementById(value).style.color = "rgb(255, 155, 88)";
                }
            }
        };
        button.onclick = function() {
            vlaggen === true ? vlaggen = false : vlaggen = true;
            vlaggen === true ? button.style.backgroundColor = "rgb(255, 155, 88)" : button.style.backgroundColor = "rgb(183, 255, 245)";
            console.log(vlaggen)
        }
    });
    console.log(bommen.plaatsen.length)
};

window.onload = init();