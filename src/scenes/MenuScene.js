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
    }
    
    create() {
        var bg = this.add.image(0,0, "bg");
        bg.setOrigin(0);

        var tab = this.add.image(-500, 0, "tab");
        tab.name;

        var backButton = this.add.image(-500, 0, "back");
        backButton.name;
        backButton.setInteractive().on("pointerdown", () => this.removeTab(editButton, tab, backButton, deckButton, holderButton) );

        var editButton = this.add.image(150, 600, "edit");
        editButton.name;
        editButton.setInteractive().on("pointerdown", () => this.sendTab(editButton, tab, backButton, deckButton, holderButton) );

        var message = "hi";

        var cards = [];
        var holder;
        
        var deckButton = this.add.image(-500, 0, "db");
        deckButton.name; 
        deckButton.setInteractive().on("pointerdown", () => this.createDeck(cards) );
        deckButton.on("pointerup", () => this.saySomething("released") );
        
        var holderButton = this.add.image(-500, 0, "hb");
        holderButton.name;
        holderButton.setInteractive().on("pointerdown", () => this.createHolder(holder) );
        holderButton.on("pointerup", () => this.saySomething("released") );

        this.input.on('pointerdown', this.startDrag, this);
    }

    saySomething(message) { console.log(message); } //test method

    sendTab(editButton, tab, backButton, deckButton, holderButton) {
        editButton.setPosition(-100, 600);
        tab.setPosition(250, 540);
        backButton.setPosition(150, 800);
        deckButton.setPosition(160, 400);
        holderButton.setPosition(160, 300);
    }

    removeTab(editButton, tab, backButton, deckButton, holderButton) {
        editButton.setPosition(150, 600);
        tab.setPosition(-500, 0);
        backButton.setPosition(-500, 0);
        deckButton.setPosition(-500, 0);
        holderButton.setPosition(-500, 0);
    }

    createDeck(cards) {
        for(let i=0; i<54; i++) {
            cards[i] = this.add.sprite(1000,400, "cardback");
            cards[i].displayWidth = 200;
            cards[i].scaleY = cards[i].scaleX;
            cards[i].setInteractive();
            cards[i].name = "DD";

            this.input.on("pointerdown", this.flipCard, this);
        }
    }

    flipCard(pointer, targets) {
        if(pointer.rightButtonDown()) {
            console.log("Flip the card!");
        }
    }

    createHolder(holder) {
        holder = this.add.image(1300, 400, "holder");
        holder.displayWidth = 210;
        holder.scaleY = holder.scaleX;
        holder.setInteractive();
        holder.name = "DD";
    }

    startDrag(pointer, targets){
        if(pointer.leftButtonDown()) {
            this.input.off('pointerdown', this.startDrag, this);
            this.dragObj = targets[0];  
            this.input.on('pointermove', this.doDrag, this);
            this.input.on('pointerup', this.stopDrag, this);
        }
    }

    doDrag(pointer) {
        if(typeof this.dragObj !== "undefined" && this.dragObj.name == "DD") {
            this.dragObj.x = pointer.x;
            this.dragObj.y = pointer.y;
        } 
    }

    stopDrag() {
        this.input.on('pointerdown', this.startDrag, this);
        this.input.off('pointermove', this.doDrag, this);
        this.input.off('pointerup', this.stopDrag, this);
    }
}