export class Holder {
    constructor(scene) {
        this.render = (x,y) => {
            var holder = scene.add.image(x, y, "holder");
            holder.displayWidth = 210;
            holder.scaleY = holder.scaleX;
            holder.setInteractive();

            let dropZone = scene.add.zone(x, y, 770, 1070).setRectangleDropZone(770,1070);
            dropZone.setData({
                "cards": 0,
                "name": "h"
            });
            return dropZone;
        }
    }
}