export class Chip {
    constructor(scene) {
        var chip;
        this.render = (x,y, color) => {
            switch(color) {
                case 1:
                    chip = scene.add.image(x, y, "pb");
                    break;
                case 2:
                    chip = scene.add.image(x, y, "pbl");
                    break;
                case 3:
                    chip = scene.add.image(x, y, "pg");
                    break;
                case 4:
                    chip = scene.add.image(x, y, "pgr");
                    break;
                case 5:
                    chip = scene.add.image(x, y, "plb");
                    break;
                case 6:
                    chip = scene.add.image(x, y, "po");
                    break;
                case 7:
                    chip = scene.add.image(x, y, "pp");
                    break;
                case 8:
                    chip = scene.add.image(x, y, "pr");
                    break;
                case 9:
                    chip = scene.add.image(x, y, "py");
                    break;
                default:
                    chip = scene.add.image(x, y, "pb");
                    break;
            }

            chip.displayWidth = 110;
            chip.scaleY = chip.scaleX;
            chip.setInteractive();
            scene.input.setDraggable(chip);
        }
    }
}