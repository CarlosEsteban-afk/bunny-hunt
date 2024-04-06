import { EventBus } from '../EventBus'
import { Scene } from 'phaser'

export class Game extends Scene {
  constructor() {
    super('Game')
  }
  preload() {
    this.load.image('star', 'star.png')
  }
  create() {

    const gameWidth = this.sys.game.config.width;
    const gameHeight = this.sys.game.config.height+1;

    const image = this.add.image(gameWidth / 2, gameHeight / 2, 'grass');

    const imageWidth = image.width;
    const imageHeight = image.height;

    const scaleX = gameWidth / imageWidth;
    const scaleY = gameHeight / imageHeight;

    image.setScale(scaleX, scaleY);


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
    const rabbit = this.physics.add.sprite(startX, startY, 'star').setInteractive()

    rabbit.setCollideWorldBounds(true)  

    const jumpPower = 700  
    rabbit.setVelocityY(-jumpPower) 

    const direction = Math.random() < 0.5 ? -1 : 1
    const horizontalVelocity = 400

    rabbit.setVelocityX(horizontalVelocity * direction)

    rabbit.setBounce(0.8, 0.8) 

    rabbit.on('pointerdown', () => {
      rabbit.destroy()
    })
  }

  changeScene() {
    this.scene.start('GameOver')
  }
}

