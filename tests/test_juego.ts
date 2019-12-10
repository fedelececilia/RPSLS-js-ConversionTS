import { assert } from 'chai';
import 'mocha';
// Hay que importar getRandomChoice y el modelo (clase Opcion y función game_modelo)

describe('getRandomChoice', function() {
    describe('GRC', function() {
      it('debe devolver un string', function() {
        assert(typeof(getRandomChoice()) == "string");
      });
    });

    describe('GRC', function() {
        it('no puede devolver algo que no está en la lista', function() {
          assert(getRandomChoice() != "Rana");
        });
    });
});


describe('Option', function() {
    describe('verSiGana', function() {
      it('gana correctamente', function() {
        let tijera = new Opcion("Tijera", ['Papel', 'Lagarto']);
        let userChoice = "Papel";
        assert(verSiGana(userChoice) == true);
      });
    });

    describe('verSiGana', function() {
        it('pierde correctamente', function() {
            let tijera = new Opcion("Tijera", ['Papel', 'Lagarto']);
            let userChoice = "Piedra";
            assert(verSiGana(userChoice) == false);
        });
    });
});

describe('game_modelo', function() {
    describe('game_modelo', function() {
      it('gana correctamente la computadora', function() {
        let piedra = new Opcion("Piedra", ["Tijera", "Lagarto"]);
        let papel = new Opcion("Papel", ['Piedra', 'Spock']);
        let tijera = new Opcion("Tijera", ['Papel', 'Lagarto']);
        let lagarto = new Opcion("Lagarto", ['Papel', 'Spock']);
        let spock = new Opcion("Spock", ['Piedra', 'Tijera']);
        let arrayOpt: Opcion[] = [piedra, papel, tijera, lagarto, spock];

        let userChoice = "Papel";
        let computerChoice = "Lagarto";
        assert(game_modelo(computerChoice, userChoice, arrayOpt) == "botWins");
      });
    });

    describe('game_modelo', function() {
        it('gana correctamente el usuario', function() {
          let piedra = new Opcion("Piedra", ["Tijera", "Lagarto"]);
          let papel = new Opcion("Papel", ['Piedra', 'Spock']);
          let tijera = new Opcion("Tijera", ['Papel', 'Lagarto']);
          let lagarto = new Opcion("Lagarto", ['Papel', 'Spock']);
          let spock = new Opcion("Spock", ['Piedra', 'Tijera']);
          let arrayOpt: Opcion[] = [piedra, papel, tijera, lagarto, spock];
  
          let userChoice = "Spock";
          let computerChoice = "Tijera";
          assert(game_modelo(computerChoice, userChoice, arrayOpt) == "userWins");
        });
    });

    describe('game_modelo', function() {
        it('empata correctamente', function() {
            let piedra = new Opcion("Piedra", ["Tijera", "Lagarto"]);
            let papel = new Opcion("Papel", ['Piedra', 'Spock']);
            let tijera = new Opcion("Tijera", ['Papel', 'Lagarto']);
            let lagarto = new Opcion("Lagarto", ['Papel', 'Spock']);
            let spock = new Opcion("Spock", ['Piedra', 'Tijera']);
            let arrayOpt: Opcion[] = [piedra, papel, tijera, lagarto, spock];
  
            let userChoice = "Piedra";
            let computerChoice = "Piedra";
            assert(verSiGana(computerChoice, userChoice, arrayOpt) == false);
        });
    });
});