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
        this.load.image("tab", "./sprites/Tab.png");
        this.load.image("edit", "./sprites/Edit.png");
        this.load.image("back", "./sprites/Back.png");
        this.load.image("hb", "./sprites/AddHolder.png");
        this.load.image("holder", "./sprites/Holder.png");

        this.load.image("ha", "./sprites/cardFronts/HA.png");
        this.load.image("sq", "./sprites/cardFronts/SQ.png");
    }

    create() {
        this.add.text(1000, 600, "Loading...");
        this.scene.start(CST.SCENES.MENU);
    }
}