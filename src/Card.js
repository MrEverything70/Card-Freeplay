export class Card {
    constructor(scene, num) {
        var card;
        this.render = (x, y, isFlip, cont) => {
            if(card != undefined) { console.log("Hey"); card.destroy();  }

            if(isFlip == 1) {
                switch(num) {
                    case 0:
                        card = scene.add.sprite(x, y, "j");
                        break;
                    case 1:
                        card = scene.add.sprite(x, y, "j");
                        break;
                    case 2:
                        card = scene.add.sprite(x, y, "da");
                        break;
                    case 3:
                        card = scene.add.sprite(x, y, "dk");
                        break;
                    case 4:
                        card = scene.add.sprite(x, y, "dq");
                        break;
                    case 5:
                        card = scene.add.sprite(x, y, "dj");
                        break;
                    case 6:
                        card = scene.add.sprite(x, y, "d10");
                        break;
                    case 7:
                        card = scene.add.sprite(x, y, "d9");
                        break;
                    case 8:
                        card = scene.add.sprite(x, y, "d8");
                        break;
                    case 9:
                        card = scene.add.sprite(x, y, "d7");
                        break;
                    case 10:
                        card = scene.add.sprite(x, y, "d6");
                        break;
                    case 11:
                        card = scene.add.sprite(x, y, "d5");
                        break;
                    case 12:
                        card = scene.add.sprite(x, y, "d4");
                        break;
                    case 13:
                        card = scene.add.sprite(x, y, "d3");
                        break;
                    case 14:
                        card = scene.add.sprite(x, y, "d2");
                        break;
                    case 15:
                        card = scene.add.sprite(x, y, "sa");
                        break;
                    case 16:
                        card = scene.add.sprite(x, y, "sk");
                        break;
                    case 17:
                        card = scene.add.sprite(x, y, "sq");
                        break;
                    case 18:
                        card = scene.add.sprite(x, y, "sj");
                        break;
                    case 19:
                        card = scene.add.sprite(x, y, "s10");
                        break;
                    case 20:
                        card = scene.add.sprite(x, y, "s9");
                        console.log("Made s9");
                        break;
                    case 21:
                        card = scene.add.sprite(x, y, "s8");
                        break;
                    case 22:
                        card = scene.add.sprite(x, y, "s7");
                        break;
                    case 23:
                        card = scene.add.sprite(x, y, "s6");
                        break;
                    case 24:
                        card = scene.add.sprite(x, y, "s5");
                        break;
                    case 25:
                        card = scene.add.sprite(x, y, "s4");
                        break;
                    case 26:
                        card = scene.add.sprite(x, y, "s3");
                        break;
                    case 27:
                        card = scene.add.sprite(x, y, "s2");
                        break;
                    case 28:
                        card = scene.add.sprite(x, y, "ha");
                        break;
                    case 29:
                        card = scene.add.sprite(x, y, "hk");
                        break;
                    case 30:
                        card = scene.add.sprite(x, y, "hq");
                        break;
                    case 31:
                        card = scene.add.sprite(x, y, "hj");
                        break;
                    case 32:
                        card = scene.add.sprite(x, y, "h10");
                        break;
                    case 33:
                        card = scene.add.sprite(x, y, "h9");
                        break;
                    case 34:
                        card = scene.add.sprite(x, y, "h8");
                        break;
                    case 35:
                        card = scene.add.sprite(x, y, "h7");
                        break;
                    case 36:
                        card = scene.add.sprite(x, y, "h6");
                        break;
                    case 37:
                        card = scene.add.sprite(x, y, "h5");
                        break;
                    case 38:
                        card = scene.add.sprite(x, y, "h4");
                        break;
                    case 39:
                        card = scene.add.sprite(x, y, "h3");
                        break;
                    case 40:
                        card = scene.add.sprite(x, y, "h2");
                        break;
                    case 41:
                        card = scene.add.sprite(x, y, "ca");
                        break;
                    case 42:
                        card = scene.add.sprite(x, y, "ck");
                        break;
                    case 43:
                        card = scene.add.sprite(x, y, "cq");
                        break;
                    case 44:
                        card = scene.add.sprite(x, y, "cj");
                        break;
                    case 45:
                        card = scene.add.sprite(x, y, "c10");
                        console.log("made c10");
                        break;
                    case 46:
                        card = scene.add.sprite(x, y, "c9");
                        console.log("made c9!");
                        break;
                    case 47:
                        card = scene.add.sprite(x, y, "c8");
                        break;
                    case 48:
                        card = scene.add.sprite(x, y, "c7");
                        break;
                    case 49:
                        card = scene.add.sprite(x, y, "c6");
                        break;
                    case 50:
                        card = scene.add.sprite(x, y, "c5");
                        break;
                    case 51:
                        card = scene.add.sprite(x, y, "c4");
                        break;
                    case 52:
                        card = scene.add.sprite(x, y, "c3");
                        break;
                    case 53:
                        card = scene.add.sprite(x, y, "c2");
                        break;
                    default:
                        card = scene.add.sprite(x, y, "cardback");
                        break;
                }
            } else {
                card = scene.add.sprite(x, y, "cardback");
            }

            card.displayWidth = 170;
            card.scaleY = card.scaleX;
            card.name = "card";
            card.num = num;
            card.flip = isFlip;
            cont.add(card);

            card.setInteractive();
            scene.input.setDraggable(card);
        } 
    }
}