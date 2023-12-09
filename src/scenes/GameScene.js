import {CST} from "../CST";
import {Card} from "../Card";
import {Holder} from "../Holder";
import {Chip} from "../Chip"; 

export class GameScene extends Phaser.Scene{
    constructor(){
        super({ 
            key: CST.SCENES.GAME
        })
        this.cards = new Array(Card);
        this.holders = new Holder;
        this.chips = new Chip;
    }

    init(data) {
        console.log(data);
    }
    
    create() {
        this.input.mouse.disableContextMenu(); //disables right click menu

        var bg = this.add.image(0,0, "bg");
        bg.setOrigin(0);

        var logo = this.add.image(1700, 950, "logo");
        logo.displayWidth = 370;
        logo.scaleY = logo.scaleX;

        var logoBool = 0;

        var cont = this.add.container(0,0);
        cont.setVisible(true);

        var editButton = this.add.image(150, 600, "edit");
        editButton.name;
        editButton.setInteractive().on("pointerdown", () => this.sendTab(editButton, cont, logo, logoBool) );

        var message = "hi";

        this.input.on('pointerdown', this.startDrag, this);

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

        this.input.on("gameobjectdown", (pointer, gameObject) => {
            this.flipCard(pointer, gameObject, cont);
        });
    }

    flipCard(pointer, gameObject, cont) {
        if(pointer.rightButtonDown() && gameObject.name == "card" && gameObject !== "undefined") {
            var num = gameObject.num;
            var flipState = gameObject.flip;
            gameObject.destroy();
            this.cards[num] = new Card(this, num);
            if(flipState == 0) {
                this.cards[num].render(pointer.x, pointer.y, 1, cont);
            } else {
                this.cards[num].render(pointer.x, pointer.y, 0, cont);
            }
        }
    }

    saySomething(message) { console.log(message); } //test method

    sendTab(editButton, cont, logo, logoBool) {
        var tab = this.add.image(250, 540, "tab");
        tab.name;

        var destroyButton = this.add.image(160, 700, "clb");
        destroyButton.name;
        destroyButton.setInteractive().on("pointerdown", () => {
            this.clearBoard(cont);
            this.removeTab(editButton, tab, backButton, deckButton, holderButton, chipButton, destroyButton, logoButton);
        });

        var logoButton = this.add.image(160, 600, "lb");
        logoButton.name;
        logoButton.setInteractive().on("pointerdown", () => {
            if(logoBool == 0) {
                logo.setPosition(2700, 950);
                logoBool = 1;
            } else {
                logo.setPosition(1700, 950);
                logoBool = 0;
            }
            
        });
        
        var deckButton = this.add.image(160, 400, "db");
        deckButton.name; 
        deckButton.setInteractive().on("pointerdown", () => this.createDeck(cont) );
        deckButton.on("pointerup", () => this.saySomething("") );
        
        var holderButton = this.add.image(160, 300, "hb");
        holderButton.name;
        holderButton.setInteractive().on("pointerdown", () => {
            this.createHolderTab(cont);
            this.removeTab(editButton, tab, backButton, deckButton, holderButton, chipButton, destroyButton, logoButton);
        } );
        holderButton.on("pointerup", () => this.saySomething("") );

        var chipButton = this.add.image(160, 200, "cb");
        chipButton.name;
        chipButton.setInteractive().on("pointerdown", () => {
            this.sendChipTab(cont);
            this.removeTab(editButton, tab, backButton, deckButton, holderButton, chipButton, destroyButton, logoButton);
        } );
        chipButton.on("pointerup", () => this.saySomething("") );

        var backButton = this.add.image(150, 900, "back");
        backButton.name;
        backButton.setInteractive().on("pointerdown", () => this.removeTab(editButton, tab, backButton, deckButton, holderButton, chipButton, destroyButton, logoButton) );

        editButton.setPosition(-100, 600);
    }

    removeTab(editButton, tab, backButton, deckButton, holderButton, chipButton, destroyButton, logoButton) {
        editButton.setPosition(150, 600);

        tab.destroy();
        backButton.destroy();
        deckButton.destroy();
        holderButton.destroy();
        chipButton.destroy();
        destroyButton.destroy();
        logoButton.destroy();
    }

    clearBoard(cont) {
        while(cont.list.length != 0) {
            let i = cont.list.length - 1;
            cont.list[i].destroy();
            i--;
        }
    }

    createDeck(cont) {
        for(let i=0; i<54; i++) {
            this.cards[i] = new Card(this, i);
            this.cards[i].num = i; //creates array
        }

        this.shuffle(this.cards);

        for(let i=0; i<54; i++) { 
            this.cards[i].render(1600, 700, 0, cont); //renders all cards
        }
            
    }

    shuffle(array) {
        for(let i = array.length - 1; i>0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }

        return array;
    }

    createHolderTab(cont) {
        var cbg = this.add.image(1000, 500, "sb");
        cbg.name;

        var hs = this.add.image(1000, 500, "hs");
        hs.name;

        const textX = this.add.text(800, 550, "Enter X", { fixedWidth: 150, fixedHeight: 36 }).setColor("black");
        const textY = this.add.text(1120, 550, "Enter Y", { fixedWidth: 150, fixedHeight: 36 }).setColor("black");
        textX.displayWidth=210;
        textX.scaleY = textX.scaleX;
        textY.displayWidth=210;
        textY.scaleY = textY.scaleX;

        textX.setInteractive().on("pointerdown", () => { this.rexUI.edit(textX) });
        textY.setInteractive().on("pointerdown", () => { this.rexUI.edit(textY) });

        var ah = this.add.image(1500, 700, "hb");
        ah.name;
        ah.setInteractive().on("pointerdown", () => {
            this.createHolder(textX, textY, cont);
            ah.destroy();
            textX.destroy();
            textY.destroy();
            cbg.destroy();
            hs.destroy();
        });
        ah.on("pointerup", () => this.saySomething(""));
    }

    createHolder(x, y, cont) {
        var numx = x.text;
        var numy = y.text;

        this.holder = new Holder(this);
        this.holder.render(numx, numy, cont);
        this.holder.name = "DD";
    }

    sendChipTab(cont) {
        var cbg = this.add.image(1000, 500, "sb");
        cbg.name;

        var pbb = this.add.image(500, 300, "pb");
        pbb.name;
        pbb.setInteractive().on("pointerdown", () => {
            this.createChip(cbg, pbb, 1, cont);
            this.removeChipTap(cbg, pbb, pbl, pg, pgr, plb, po, pp, pr, py);
        });

        var pbl = this.add.image(1500, 300, "pbl");
        pbl.name;
        pbl.setInteractive().on("pointerdown", () => {
            this.createChip(cbg, pbl, 2, cont);
            this.removeChipTap(cbg, pbb, pbl, pg, pgr, plb, po, pp, pr, py);
        });

        var pg = this.add.image(750, 300, "pg");
        pg.name;
        pg.setInteractive().on("pointerdown", () => {
            this.createChip(cbg, pg, 3, cont);
            this.removeChipTap(cbg, pbb, pbl, pg, pgr, plb, po, pp, pr, py);
        });

        var pgr = this.add.image(1000, 300, "pgr");
        pgr.name;
        pgr.setInteractive().on("pointerdown", () => {
            this.createChip(cbg, pgr, 4, cont);
            this.removeChipTap(cbg, pbb, pbl, pg, pgr, plb, po, pp, pr, py);
        });

        var plb = this.add.image(1250, 300, "plb");
        plb.name;
        plb.setInteractive().on("pointerdown", () => {
            this.createChip(cbg, plb, 5, cont);
            this.removeChipTap(cbg, pbb, pbl, pg, pgr, plb, po, pp, pr, py);
        });

        var po = this.add.image(625, 550, "po");
        po.name;
        po.setInteractive().on("pointerdown", () => {
            this.createChip(cbg, po, 6, cont);
            this.removeChipTap(cbg, pbb, pbl, pg, pgr, plb, po, pp, pr, py);
        });

        var pp = this.add.image(875, 550, "pp");
        pp.name;
        pp.setInteractive().on("pointerdown", () => {
            this.createChip(cbg, pp, 7, cont);
            this.removeChipTap(cbg, pbb, pbl, pg, pgr, plb, po, pp, pr, py);
        });

        var pr = this.add.image(1125, 550, "pr");
        pr.name;
        pr.setInteractive().on("pointerdown", () => {
            this.createChip(cbg, pr, 8, cont);
            this.removeChipTap(cbg, pbb, pbl, pg, pgr, plb, po, pp, pr, py);
        });

        var py = this.add.image(1375, 550, "py");
        py.name;
        py.setInteractive().on("pointerdown", () => {
            this.createChip(cbg, py, 9, cont);
            this.removeChipTap(cbg, pbb, pbl, pg, pgr, plb, po, pp, pr, py);
        });
    }

    createChip(cbg, pp, val, cont) {
        cbg.setPosition(-2000, 0);
        pp.setPosition(-500, 0);
        this.chips = new Chip(this);
        this.chips.render(700, 500, val, cont);
        this.chips.name = "DD";
    }

    removeChipTap(cbg, pbb, pbl, pg, pgr, plb, po, pp, pr, py) {
        cbg.destroy();
        pbb.destroy();
        pbl.destroy();
        pg.destroy();
        pgr.destroy();
        plb.destroy();
        po.destroy();
        pp.destroy();
        pr.destroy();
        py.destroy();
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