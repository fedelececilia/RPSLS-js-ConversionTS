"use strict";
//import { getRandomChoice } from "./getRandomChoice";
// A SACAR DE ESTE ARCHIVO
function getRandomChoice() {
    let choiceArray = ["Papel", "Piedra", "Tijera", "Spock", "Lagarto"];
    let computerChoice = Math.random();
    computerChoice = Math.floor((computerChoice * 5));
    return choiceArray[computerChoice];
}
// MODELO
class Opcion {
    constructor(nombre, ganaA) {
        this.nombre = nombre;
        this.ganaA = ganaA;
    }
    verSiGana(userChoice) {
        if (this.ganaA.includes(userChoice)) {
            return true;
        }
        return false;
    }
}
function game_modelo(computerChoice, userChoice, arrayOpt) {
    if (computerChoice == userChoice) {
        console.log("Devuelve empate");
        return "draw";
    }
    else {
        let result = false;
        arrayOpt.map(elem => { if (elem.nombre == computerChoice) {
            result = elem.verSiGana(userChoice);
        } });
        console.log("Gana: " + result);
        if (result)
            return "botWins";
        return "userWins";
    }
}
// CONTROLADOR
let text = document.getElementsByTagName("P");
let mensajeResultado = text[0];
let VIDASTOTALES = 3;
let userLives = 0;
let botLives = 0;
let userWins;
let botWins;
let draw;
function inicializarOpciones() {
    const piedra = new Opcion("Piedra", ["Tijera", "Lagarto"]);
    const papel = new Opcion("Papel", ['Piedra', 'Spock']);
    const tijera = new Opcion("Tijera", ['Papel', 'Lagarto']);
    const lagarto = new Opcion("Lagarto", ['Papel', 'Spock']);
    const spock = new Opcion("Spock", ['Piedra', 'Tijera']);
    let arrayOpt = [piedra, papel, tijera, lagarto, spock];
    return arrayOpt;
}
function game(choice) {
    console.log("empieza el juego");
    let result;
    let userChoice = choice.id;
    let computerChoice = getRandomChoice();
    let arrayOpt = inicializarOpciones();
    let resultado = game_modelo(computerChoice, userChoice, arrayOpt);
    if (resultado == "userWins") {
        mensajeResultado.style.color = "green";
        choice.style.background = "green";
        mensajeResultado.innerHTML = 'Bot: ' + computerChoice + '<span> TU GANAS !!</span>';
    }
    else if (resultado == "botWins") {
        mensajeResultado.style.color = "red";
        choice.style.background = "red";
        mensajeResultado.innerHTML = 'Bot: ' + computerChoice + '<span> TU PIERDES !!</span>';
    }
    else if (resultado == "draw") {
        mensajeResultado.style.color = "white";
        choice.style.background = "white";
        mensajeResultado.innerHTML = 'Bot: ' + computerChoice + '<span> EMPATE</span>';
        ;
    }
    setTimeout(function () { choice.style.background = ""; }, 1000);
    score(resultado);
}
;
function score(resultado) {
    let life = document.getElementsByClassName("icon-heart");
    if (resultado == "userWins") {
        life[(botLives++) + VIDASTOTALES].style.color = "black";
    }
    else if (resultado == "botWins") {
        life[(userLives++)].style.color = "black";
    }
    if (botLives == VIDASTOTALES || userLives == VIDASTOTALES) {
        if (userLives == VIDASTOTALES) {
            mensajeResultado.innerHTML += "<span>No eres rival digno, yo gano!</span>";
        }
        else {
            mensajeResultado.innerHTML += "<span>Suerte de principiante!</span>";
        }
        for (var i = life.length - 1; i >= 0; i--) {
            life[i].style.color = "rgb(255,0,0)";
            botLives = 0;
            userLives = 0;
        }
    }
}
;
