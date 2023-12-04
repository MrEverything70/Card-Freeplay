export class Card {
    constructor(scene, num) {
        this.render = (x, y) => {
            var card = scene.add.sprite(x, y, "cardback");
            card.displayWidth = 200;
            card.scaleY = card.scaleX;
            card.name = "card";

            card.setInteractive();
            scene.input.setDraggable(card);

            scene.input.on("pointerdown", function (pointer, targets) {
                if(pointer.rightButtonDown() && targets[0].name == "card" && targets[0] !== "undefined") {
                    console.log("1");
                    switch(num) {
                        case 52:
                            card.setTexture("sq");
                            break;
                        case 53:
                            card.setTexture("ha");
                            break;
                    }
                }
            }, scene)
        }
    }
}