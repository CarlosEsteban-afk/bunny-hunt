import { EventBus } from '../EventBus'
import { Scene } from 'phaser'
import Animal from './Components/Animal'

export class Game extends Scene {
  constructor() {
    super('Game')
    this.rabbitsShot = 0
    this.shootsAvaiable = 5
  }
  preload() {
    this.physics.world.setBounds(0, 0, this.sys.game.config.width, this.sys.game.config.height)
    this.scaleBackground()
    this.setCounters()
  }
  create() {
    this.playGame()
    EventBus.emit('current-scene-ready', this)
  }
  createRabbit() {
    const startX = Phaser.Math.Between(100, this.sys.game.config.width - 100)
    const startY = this.sys.game.config.height - 200
    const rabbit = new Animal(this, startX, startY, 'star')
    rabbit.on('pointerdown', () => {
      rabbit.destroy()
      this.incrementRabbitsShot()
    })
  }
  createCat() {
    const startX = Phaser.Math.Between(100, this.sys.game.config.width - 100)
    const startY = this.sys.game.config.height - 200
    const cat = new Animal(this, startX, startY, 'tree')
    cat.on('pointerdown', () => {
      cat.destroy()
      this.decreaseShootsAvaiable()
    })
  }
  shutdown() {
    this.shootsAvaiable = 5
    this.rabbitsShot = 0
    this.scene.start('GameOver')
  }

  incrementRabbitsShot() {
    this.rabbitsShot++
    this.scoreText.setText('Score: ' + this.rabbitsShot)
    console.log(this.rabbitsShot)
  }

  decreaseShootsAvaiable() {
    this.shootsAvaiable--
    this.shootsAvaiableText.setText('Shots avaiable: ' + this.shootsAvaiable)
    if (this.shootsAvaiable == 0) {
      this.shutdown()
    }
  }

  scaleBackground() {
    const gameWidth = this.sys.game.config.width
    const gameHeight = this.sys.game.config.height + 1
    const image = this.add.image(gameWidth / 2, gameHeight / 2, 'grass')
    const imageWidth = image.width
    const imageHeight = image.height
    const scaleX = gameWidth / imageWidth
    const scaleY = gameHeight / imageHeight

    image.setScale(scaleX, scaleY)
  }

  setCounters() {
    this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' })
    this.shootsAvaiableText = this.add.text(16, 48, 'Shots avaiable: 5', {
      fontSize: '32px',
      fill: '#000'
    })
  }

  playGame() {
    this.input.on('pointerdown', () => {
      this.decreaseShootsAvaiable()
    })
    this.time.addEvent({
      delay: 2000,
      callback: this.createRabbit,
      callbackScope: this,
      loop: true
    })
    this.time.addEvent({
      delay: 5000,
      callback: this.createCat,
      callbackScope: this,
      loop: true
    })
  }
}

