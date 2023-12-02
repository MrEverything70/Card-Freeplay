import {CST} from "../CST";
import {LoadScene} from "./LoadScene";

export class MenuScene extends Phaser.Scene{
    constructor(){
        super({ 
            key: CST.SCENES.MENU 
        })
    }

    init(data) {
        console.log(data);
        console.log("got data");
    }

    create() {
        var bg = this.add.image(0,0, "bg");
        bg.setOrigin(0);

        var message = "hi";
        var deckButton = this.add.image(110, 600, "db");
        deckButton.name = "DNT"; //we use the DNT name tag to let the game know which buttons not to touch
        deckButton.setInteractive().on("pointerdown", () => this.createDeck() );
        deckButton.on("pointerup", () => this.saySomething("released") );

        this.input.on('pointerdown', this.startDrag, this);
    }

    saySomething(message) { console.log(message); } //test method

    createDeck() {
        var cards = [];
        for(let i=0; i<54; i++) {
            cards[i] = this.add.sprite(100,200, "cardback");
            cards[i].displayWidth = 200;
            cards[i].scaleY = cards[i].scaleX;
            cards[i].setInteractive();
        }
    }

    startDrag(pointer, targets){
        this.input.off('pointerdown', this.startDrag, this);
        this.dragObj = targets[0];  
        this.input.on('pointermove', this.doDrag, this);
        this.input.on('pointerup', this.stopDrag, this);
    }

    doDrag(pointer) {
        if(typeof this.dragObj !== "undefined" && this.dragObj.name !== "DNT") {
            this.dragObj.x = pointer.x;
            this.dragObj.y = pointer.y;
        } 
    }

    stopDrag() {
        this.input.on('pointerdown', this.startDrag, this);
        this.input.off('pointermove', this.doDrag, this);
        this.input.off('pointerup', this.stopDrag, this);
    }

    update() {

    }
}