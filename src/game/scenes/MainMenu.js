import { EventBus } from '../EventBus'
import { Scene } from 'phaser'

export class MainMenu extends Scene {
  constructor() {
    super('MainMenu')
  }

  create() {
    this.setBackground()
    this.setPlayButton()
    EventBus.emit('current-scene-ready', this)
  }

  setBackground() {
    
    const gameWidth = this.sys.game.config.width
    const gameHeight = this.sys.game.config.height + 1
    const image = this.add.image(750, 450, 'background')
    const imageWidth = image.width
    const imageHeight = image.height
    const scaleX = gameWidth / imageWidth
    const scaleY = gameHeight / imageHeight
    image.setScale(scaleX, scaleY)
    
    this.bunnyLogo = this.add.image(-200, 250, 'bunny-logo').setDepth(100).setScale(0.5)
    this.huntLogo = this.add.image(2000, 430, 'hunt-logo').setDepth(100).setScale(0.5)

    this.tweens.add({
      targets: this.bunnyLogo,
      x: 750,
      duration: 500,
      ease: 'Power2',
      onComplete: () => {
        this.tweens.add({
          targets: this.huntLogo,
          x: 750,
          duration: 500,
          ease: 'Power2'
        })
      }
    })
  }
  setPlayButton() {
    const playButton = this.add
      .text(750, 700, 'Play', {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center'
      })
      .setDepth(100)
      .setOrigin(0.5)

    playButton.setInteractive()

    playButton.on('pointerover', () => {
      playButton.setStyle({ fill: '#ff0' })
    })

    playButton.on('pointerout', () => {
      playButton.setStyle({ fill: '#ffffff' })
    })

    playButton.on('pointerdown', () => {
      this.scene.start('Game')
    })
  }
}

