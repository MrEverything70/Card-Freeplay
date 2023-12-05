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
        this.load.image("cb", "./sprites/AddChip.png");
        this.load.image("sb", "./sprites/SelectBG.png");

        this.load.image("c2", "./sprites/cardFronts/C2.png");
        this.load.image("c3", "./sprites/cardFronts/C3.png");
        this.load.image("c4", "./sprites/cardFronts/C4.png");
        this.load.image("c5", "./sprites/cardFronts/C5.png");
        this.load.image("c6", "./sprites/cardFronts/C6.png");
        this.load.image("c7", "./sprites/cardFronts/C7.png");
        this.load.image("c8", "./sprites/cardFronts/C8.png");
        this.load.image("c9", "./sprites/cardFronts/C9.png");
        this.load.image("c10", "./sprites/cardFronts/C10.png");
        this.load.image("cj", "./sprites/cardFronts/CJ.png");
        this.load.image("cq", "./sprites/cardFronts/CQ.png");
        this.load.image("ck", "./sprites/cardFronts/CK.png");
        this.load.image("ca", "./sprites/cardFronts/CA.png");
        this.load.image("h2", "./sprites/cardFronts/H2.png");
        this.load.image("h3", "./sprites/cardFronts/H3.png");
        this.load.image("h4", "./sprites/cardFronts/H4.png");
        this.load.image("h5", "./sprites/cardFronts/H5.png");
        this.load.image("h6", "./sprites/cardFronts/H6.png");
        this.load.image("h7", "./sprites/cardFronts/H7.png");
        this.load.image("h8", "./sprites/cardFronts/H8.png");
        this.load.image("h9", "./sprites/cardFronts/H9.png");
        this.load.image("h10", "./sprites/cardFronts/H10.png");
        this.load.image("hj", "./sprites/cardFronts/HJ.png");
        this.load.image("hq", "./sprites/cardFronts/HQ.png");
        this.load.image("hk", "./sprites/cardFronts/HK.png");
        this.load.image("ha", "./sprites/cardFronts/HA.png");
        this.load.image("s2", "./sprites/cardFronts/S2.png");
        this.load.image("s3", "./sprites/cardFronts/S3.png");
        this.load.image("s4", "./sprites/cardFronts/S4.png");
        this.load.image("s5", "./sprites/cardFronts/S5.png");
        this.load.image("s6", "./sprites/cardFronts/S6.png");
        this.load.image("s7", "./sprites/cardFronts/S7.png");
        this.load.image("s8", "./sprites/cardFronts/S8.png");
        this.load.image("s9", "./sprites/cardFronts/S9.png");
        this.load.image("s10", "./sprites/cardFronts/S10.png");
        this.load.image("sj", "./sprites/cardFronts/SJ.png");
        this.load.image("sq", "./sprites/cardFronts/SQ.png");
        this.load.image("sk", "./sprites/cardFronts/SK.png");
        this.load.image("sa", "./sprites/cardFronts/SA.png");
        this.load.image("d2", "./sprites/cardFronts/D2.png");
        this.load.image("d3", "./sprites/cardFronts/D3.png");
        this.load.image("d4", "./sprites/cardFronts/D4.png");
        this.load.image("d5", "./sprites/cardFronts/D5.png");
        this.load.image("d6", "./sprites/cardFronts/D6.png");
        this.load.image("d7", "./sprites/cardFronts/D7.png");
        this.load.image("d8", "./sprites/cardFronts/D8.png");
        this.load.image("d9", "./sprites/cardFronts/D9.png");
        this.load.image("d10", "./sprites/cardFronts/D10.png");
        this.load.image("dj", "./sprites/cardFronts/DJ.png");
        this.load.image("dq", "./sprites/cardFronts/DQ.png");
        this.load.image("dk", "./sprites/cardFronts/DK.png");
        this.load.image("da", "./sprites/cardFronts/DA.png");
        this.load.image("j", "./sprites/cardFronts/j.png");

        this.load.image("pb", "./sprites/pokerChips/pb.png");
        this.load.image("pbl", "./sprites/pokerChips/pbl.png");
        this.load.image("pg", "./sprites/pokerChips/pg.png");
        this.load.image("pgr", "./sprites/pokerChips/pgr.png");
        this.load.image("plb", "./sprites/pokerChips/plb.png");
        this.load.image("po", "./sprites/pokerChips/po.png");
        this.load.image("pp", "./sprites/pokerChips/pp.png");
        this.load.image("pr", "./sprites/pokerChips/pr.png");
        this.load.image("py", "./sprites/pokerChips/py.png");
    }

    create() {
        this.add.text(1000, 600, "Loading...");
        this.scene.start(CST.SCENES.MENU);
    }
}