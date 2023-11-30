/** @type {import("../typings/phaser")} */

import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
let game = new Phaser.Game({
    width: 1600,
    height: 900,
    scene:[
        LoadScene, MenuScene
    ]
});