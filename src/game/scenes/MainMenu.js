import { EventBus } from '../EventBus'
import { Scene } from 'phaser'

export class MainMenu extends Scene {
  logoTween

  constructor() {
    super('MainMenu')
  }

  create() {
    this.setBackground()
    EventBus.emit('current-scene-ready', this)
  }

  setBackground() {
    this.add.image(750, 450, 'background')

    this.logo = this.add.image(750, 350, 'logo').setDepth(100)

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

    playButton.on('pointerdown', () => {
      this.scene.start('Game')
    })
  }
}

