import {CST} from "../CST";
import {LoadScene} from "./LoadScene";
import {Card} from "../Card";
import {Holder} from "../Holder";

export class MenuScene extends Phaser.Scene{
    constructor(){
        super({ 
            key: CST.SCENES.MENU 
        })
        this.cards = new Array(Card);
        this.holders = new Holder;
    }

    init(data) {
        console.log(data);
    }
    
    create() {
        this.input.mouse.disableContextMenu();

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
        
        var deckButton = this.add.image(-500, 0, "db");
        deckButton.name; 
        deckButton.setInteractive().on("pointerdown", () => this.createDeck() );
        deckButton.on("pointerup", () => this.saySomething("released") );
        
        var holderButton = this.add.image(-500, 0, "hb");
        holderButton.name;
        holderButton.setInteractive().on("pointerdown", () => this.createHolder() );
        holderButton.on("pointerup", () => this.saySomething("released") );

        //this.input.on('pointerdown', this.startDrag, this);

        this.input.on("dragstart", function (pointer, gameObject) {
            this.children.bringToTop(gameObject);
            
        }, this);
        
        this.input.on("drag", (pointer, gameObject) => {
            gameObject.x = pointer.x;
            gameObject.y = pointer.y;
        });

        this.input.on("drop", (pointer, gameObject, dropZone) => {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
        });
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

    createDeck() {
        for(let i=0; i<54; i++) {
            this.cards[i] = new Card(this, i);
            this.cards[i].render(1000, 500);
        }
    }

    flipCard(pointer, targets) {
        if(pointer.rightButtonDown()) {
            console.log("Flip the card!");
        }
    }

    createHolder() {
        this.holder = new Holder(this);
        this.holder.render(1500, 500);
        this.holder.name = "DD";
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