/** @type {import("../typings/phaser")} */

import UIPlugin from "phaser3-rex-plugins/templates/ui/ui-plugin"

import {LoadScene} from "./scenes/LoadScene";
import {GameScene} from "./scenes/GameScene";

const config = {
	width: 1920,
    height: 1080,
	parent: 'phaser-container',
	dom: {
        createContainer: true
    },
	plugins: {
		scene: [
			{
				key: 'rexUI',
				plugin: UIPlugin,
				mapping: 'rexUI'
			}
		]
    },

	scene: [
		LoadScene, GameScene
	]
}

export default new Phaser.Game(config)