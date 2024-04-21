import { EventBus } from '../EventBus'
import { Scene } from 'phaser'
import Rabbit from './Components/Rabbit'

export class Game extends Scene {
  constructor() {
    super('Game')
  }
  preload() {

   this.scaleBackground();

  }
  create() {

    this.time.addEvent({
      delay: 2000,
      callback: this.createRabbit,
      callbackScope: this,
      loop: true
    })
    EventBus.emit('current-scene-ready', this)
  }
  createRabbit() {
    const startX = Phaser.Math.Between(100, this.sys.game.config.width - 100)
    const startY = this.sys.game.config.height - 200

    this.physics.world.setBounds(0, 0, this.sys.game.config.width, this.sys.game.config.height)

   const rabbit = new Rabbit(this, startX, startY, 'star'); 
  }

  changeScene() {
    this.scene.start('GameOver')
  }
  scaleBackground() {
    const gameWidth = this.sys.game.config.width;
    const gameHeight = this.sys.game.config.height+1;

    const image = this.add.image(gameWidth / 2, gameHeight / 2, 'grass');

    const imageWidth = image.width;
    const imageHeight = image.height;

    const scaleX = gameWidth / imageWidth;
    const scaleY = gameHeight / imageHeight;

    image.setScale(scaleX, scaleY);
  }
}

