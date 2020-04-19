// ------------------ Variables ---------------------

var modalTieBack, modalTie, modalLoseBack, modalLose, modalWinBack, modalWin, text, time, resultado;
var manoJugador = 0;
var manoPc = Math.random() * 3 + 1
manoPc = parseInt(manoPc);


// ------------------ Ejecutor ---------------------

function piedra() {
    manoJugador = 1;
    countdown();
}
function papel() {
    manoJugador = 2;
    countdown();
    
}
function tijera() {
    manoJugador = 3;
    countdown();
}

// ------------------- Contador ------------------

function countdown() {
    var nrContador = document.getElementById("nrContador");
    time = 2;
    document.getElementById("contenedor").style.visibility = "visible";
    inter = setInterval(function () {
        nrContador.innerHTML = time;
        time = time - 1;
        if (time == -1) {
            clearInterval(inter);
            document.getElementById("contenedor").style.visibility = "hidden";
            comprobador();
            pc();
            marcador();
            nrContador.innerHTML = 3;
        }
    }, 700);
}




// ------------------ Resultado IA ---------------------

function pc() {
    text = document.getElementById("textoResultado");
    if (manoPc == 1) {
        text.innerHTML = "Piedra"
    }
    else if (manoPc == 2) {
        text.innerHTML = "Papel"
    }
    else if (manoPc == 3) {
        text.innerHTML = "Tijera"
    }
}

// ------------------ Comprobador ---------------------

function comprobador() {

    modalWinBack = document.getElementById("overlay_1");
    modalWin = document.getElementById("popup_1");
    modalLoseBack = document.getElementById("overlay_2");
    modalLose = document.getElementById("popup_2");
    modalTieBack = document.getElementById("overlay_3");
    modalTie = document.getElementById("popup_3");

    if (manoJugador == manoPc) {
        abrirModal(modalTieBack, modalTie);
        modalTieBack.style.backgroundColor = "rgba(100, 100, 100, 0.75)"
        resultado = 2;
    }
    else if (manoJugador == 1 && manoPc == 2) {
        abrirModal(modalLoseBack, modalLose);
        modalLoseBack.style.backgroundColor = "rgba(240, 40, 55, 0.75)";
        resultado = 0

    }
    else if (manoJugador == 1 && manoPc == 3) {
        abrirModal(modalWinBack, modalWin);
        modalWinBack.style.backgroundColor = "rgba(30, 220, 125, 0.75)";
        resultado = 1;
    }
    else if (manoJugador == 2 && manoPc == 3) {
        abrirModal(modalLoseBack, modalLose);
        modalLoseBack.style.backgroundColor = "rgba(240, 40, 55, 0.75)";
        resultado = 0;
    }
    else if (manoJugador == 2 && manoPc == 1) {
        abrirModal(modalWinBack, modalWin);
        modalWinBack.style.backgroundColor = "rgba(30, 220, 125, 0.75)";
        resultado = 1;
    }
    else if (manoJugador == 3 && manoPc == 1) {
        abrirModal(modalLoseBack, modalLose);
        modalLoseBack.style.backgroundColor = "rgba(240, 40, 55, 0.75)";
        resultado = 0;
    }
    else if (manoJugador == 3 && manoPc == 2) {
        abrirModal(modalWinBack, modalWin);
        modalWinBack.style.backgroundColor = "rgba(30, 220, 125, 0.75)";
        resultado = 1;
    }
}

// ------------------- Modales -------------------

function abrirModal(param1, param2) {
    param1.style.visibility = "visible";
    param2.style.opacity = "1";
    param2.style.transform = "scale(1)";
}

function cerrarModal(param1, param2) {
    param1.style.visibility = "hidden";
    param2.style.opacity = "0";
    param2.style.transform = "scale(0)";
    manoPc = Math.random() * 3 + 1
    manoPc = parseInt(manoPc);
    text.innerHTML = "Piedra, Papel o Tijera"
}

// ------------------- Marcador -------------------

var ganar = 0;
var perder = 0;
var marcadorObj
function marcador(){
    marcadorObj = document.getElementById("marcador");
    if (resultado == 1){
        ganar += 1
        marcadorObj.innerHTML = ganar + " - " + perder;
    }
    else if (resultado == 0){
        perder += 1
        marcadorObj.innerHTML = ganar + " - " + perder;
    }
    else{
        marcadorObj.innerHTML = ganar + " - " + perder;
    }
}

function reestablecer(){
    ganar = 0;
    perder = 0;
    marcadorObj.innerHTML = ganar + " - " + perder;
}

// ------------------- Enter Reinicia -------------------

function pulsarTecla(e){
    var tecla = e.keyCode;

    if (tecla == 13){
        e.preventDefault();
    };

    if (tecla == 13 && resultado == 1){
        cerrarModal(modalWinBack, modalWin);
    }
    else if (tecla == 13 && resultado == 0){
        cerrarModal(modalLoseBack, modalLose);
    }
    else if (tecla == 13 && resultado == 2){
        cerrarModal(modalTieBack, modalTie);
    }
}

window.onkeypress = pulsarTecla;