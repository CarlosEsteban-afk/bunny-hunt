import { EventBus } from '../EventBus'
import { Scene } from 'phaser'

export class MainMenu extends Scene {
  logoTween

  constructor() {
    super('MainMenu')
  }

  create() {
    this.setBackground()
    this.setPlayButton()
    EventBus.emit('current-scene-ready', this)
  }

  setBackground() {
    this.add.image(750, 450, 'background')

    this.logo = this.add.image(-200, 350, 'logo').setDepth(100)

    this.tweens.add({
      targets: this.logo,
      x: 750,
      ease: 'Power1',
      duration: 500
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

