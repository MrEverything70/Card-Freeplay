import {CST} from "../CST";
import {MenuScene} from "./MenuScene";

export class LoadScene extends Phaser.Scene{
    constructor(){
        super({ 
            key: CST.SCENES.LOAD 
        })
    }

    preload() {
        this.load.image("cardback", "./sprites/cardback.jpg");
        this.load.image("bg", "./sprites/cfbackground.jpg");
        this.load.image("db", "./sprites/AddDeck.png")
    }

    create() {
        this.scene.start(CST.SCENES.MENU, "hey from Load");
    }
}