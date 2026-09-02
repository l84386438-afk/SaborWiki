const v1 = document.getElementById("v1");
const normal = document.getElementById("normal");

const som = new Audio("Sons/ULTRAKILL/soco.ogg");
const som2 = new Audio("ProjetoCurso/Sons/GD/normal.mp3");

let quadradosimulator = document.getElementById("melhorjogodetodos")
let lastar = document.getElementById("lastar")
let ultrakill = document.getElementById("ultrakill")
let geometrydash = document.getElementById("geometrydash")

geometrydash.onclick = function() {
    open("jogo2.html")
}
lastar.onclick = function() {
    open("jogo3.html")
}
quadradosimulator.onclick = function() {
    open("jogo4.html")
}
ultrakill.onclick = function() {
    open("jogo1.html")
}

if (v1) {
    v1.addEventListener("click", () => {
        som.currentTime = 0;
        som.volume = 0.075;
        som.play();
    });
}
