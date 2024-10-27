import { Coordinate } from '../models/Board.js';
export class TurnView {
    #turn;
    #turnDiv;
    #infoDiv;

    constructor(turn) {
        this.#turn = turn;
        this.#turnDiv = document.getElementById("turnDiv");
        this.#turnDiv.innerHTML = "";
        this.#infoDiv = document.getElementById("infoDiv");
        this.#infoDiv.innerHTML = "";
    }

    setNumberOfHumanPlayers(numberOfHumanPlayers) {
        this.#turn.reset(numberOfHumanPlayers);
    }

    #createCircle() {
        const circle = document.createElement('div');
        circle.style.width = '25px';
        circle.style.height = '25px';
        circle.style.borderRadius = '50%';
        circle.style.top = '50%';
        circle.style.left = '50%';
        circle.style.position = 'relative';
        circle.style.backgroundColor = this.getActivePlayer().getColor().toString();
        return circle;
      }

    renderTurn() {
        this.#turnDiv.innerHTML = "";
        const circle = this.#createCircle();
        this.#turnDiv.appendChild(circle);
        //this.#turnDiv.innerHTML += `Turn Player ${this.getActivePlayer().getColor().getString()}`;
        this.#turnDiv.innerHTML += ` ${this.getActivePlayer().getTurnMessage()}`;
        this.#turnDiv.classList.add('animated');
    }



    getActivePlayer() {
        return this.#turn.getActivePlayer();
    }

    renderInvalidColumn(column) { 
        this.#infoDiv.style.display="block";
        this.#infoDiv.innerHTML = ` Invalid column!!! ${column+1} 's completed`;
    }

    play(column) {
        this.column = column;
        this.getActivePlayer().accept(this);
    }

    renderResults() {
        this.#turnDiv.classList.remove('animated');
        if ((this.#turn.getBoard()).isWinner()) {
            this.#turnDiv.innerHTML = `${this.getActivePlayer().getColor().toString()}s WIN!!! : -)`;
        } else {
            this.#turnDiv.innerHTML = `TIED!!!`;
        }
    }

    visitHumanPlayer(humanPlayer) {
        this.#infoDiv.innerHTML="";
        if(humanPlayer.isComplete(this.column)){
            this.renderInvalidColumn(this.column);
        }
        else {
            this.#turn.play(this.column);
            delete this.column;
        }
    }
    visitRandomPlayer(randomPlayer) {
        const selectedColumn=randomPlayer.getColumn();
        this.#infoDiv.innerHTML = "";
        this.#infoDiv.style.display="block";
        const circle = this.#createCircle();
        this.#infoDiv.appendChild(circle);
        this.#infoDiv.style.display="block";
        this.#infoDiv.innerHTML +=`Choosed radom column: ${selectedColumn+1}`;
        this.#turn.play(selectedColumn);
    }


}