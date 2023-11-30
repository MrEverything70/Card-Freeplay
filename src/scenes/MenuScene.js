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
        this.add.image(0,0, "cardback").setOrigin(0);
    }
}