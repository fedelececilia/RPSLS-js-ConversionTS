//import { getRandomChoice } from "./getRandomChoice";

// A SACAR DE ESTE ARCHIVO
function getRandomChoice(): string {
  let choiceArray = ["Papel", "Piedra", "Tijera", "Spock", "Lagarto"];
  let computerChoice = Math.random();
  computerChoice = Math.floor((computerChoice * 5));
  return choiceArray[computerChoice];
}


// MODELO

class Opcion {
  nombre : string;
  ganaA: string[];

  constructor(nombre: string, ganaA: string[]) {
    this.nombre = nombre;
    this.ganaA = ganaA;
  }  

  verSiGana(userChoice: string) : boolean {
    if (this.ganaA.includes(userChoice)) {
      return true;
    }
    return false;
  }
}

function game_modelo(computerChoice : string, userChoice : string, arrayOpt: Opcion[]) : string {
  if (computerChoice == userChoice) {
    console.log("Devuelve empate");
    return "draw";
  } else {
    let result = false;

    arrayOpt.map(elem => { if (elem.nombre == computerChoice) { result = elem.verSiGana(userChoice) } });
    console.log("Gana: " + result);
    if (result) return "botWins";
    return "userWins";
  }
}






// CONTROLADOR
let text : HTMLCollectionOf<Element> = document.getElementsByTagName("P");
let mensajeResultado : HTMLElement = text[0] as HTMLElement

let VIDASTOTALES: number = 3;
let userLives = 0;
let botLives = 0;
let userWins: string;
let botWins: string;
let draw: string;


function inicializarOpciones() : Opcion[] {
  const piedra = new Opcion("Piedra", ["Tijera", "Lagarto"]);
  const papel = new Opcion("Papel", ['Piedra', 'Spock']);
  const tijera = new Opcion("Tijera", ['Papel', 'Lagarto']);
  const lagarto = new Opcion("Lagarto", ['Papel', 'Spock']);
  const spock = new Opcion("Spock", ['Piedra', 'Tijera']);

  let arrayOpt: Opcion[] = [piedra, papel, tijera, lagarto, spock];

  return arrayOpt;
}



function game(choice: { id: string; style: { background: string; }; }) {
  console.log("empieza el juego");
  let result: string;
  let userChoice = choice.id;
  let computerChoice: string = getRandomChoice();
  let arrayOpt = inicializarOpciones();

  let resultado : string = game_modelo(computerChoice, userChoice, arrayOpt);
 

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
    mensajeResultado.innerHTML = 'Bot: ' + computerChoice + '<span> EMPATE</span>';;
  }
  setTimeout(function () { choice.style.background = ""; }, 1000);

  score(resultado);
};


function score(resultado: string) {
  let life : HTMLCollectionOf<Element> = document.getElementsByClassName("icon-heart");
  if (resultado == "userWins") {
    (<HTMLElement>life[(botLives++) + VIDASTOTALES]).style.color = "black";
  }
  else if (resultado == "botWins") {
    (<HTMLElement>life[(userLives++)]).style.color = "black";
  }
  if (botLives == VIDASTOTALES || userLives == VIDASTOTALES) {
    if (userLives == VIDASTOTALES) {
      mensajeResultado.innerHTML += "<span>No eres rival digno, yo gano!</span>";
    }
    else {
      mensajeResultado.innerHTML += "<span>Suerte de principiante!</span>";
    }
    for (var i = life.length - 1; i >= 0; i--) {
      (<HTMLElement>life[i]).style.color = "rgb(255,0,0)";
      botLives = 0
      userLives = 0
    }
  }
};

