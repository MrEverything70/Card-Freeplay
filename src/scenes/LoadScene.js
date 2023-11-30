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
    }

    create() {
        this.scene.start(CST.SCENES.MENU, "hey from Load");

        
    }
}