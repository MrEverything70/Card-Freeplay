export class Holder {
    constructor(scene) {
        this.render = (x,y, cont) => {
            var holder = scene.add.image(x, y, "holder");
            holder.displayWidth = 170;
            holder.scaleY = holder.scaleX;
            holder.setInteractive();
            cont.add(holder);

            let dropZone = scene.add.zone(x, y).setRectangleDropZone(100,200);
            dropZone.setData({
                "cards": 0,
                "name": "h"
            });
            return dropZone;
        }
    }
}