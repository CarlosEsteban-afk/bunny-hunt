import { EventBus } from '../EventBus'
import { Scene } from 'phaser'

export class GameOver extends Scene {
  constructor() {
    super('GameOver')
  }

  create() {
    this.setBackground()
    const playAgain = this.add
      .text(750, 700, 'Play Again', {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center'
      })
      .setOrigin(0.5)
      .setDepth(100)

    playAgain.setInteractive()

    playAgain.on('pointerover', () => {
      playAgain.setStyle({ fill: '#ff0' })
    })

    playAgain.on('pointerout', () => {
      playAgain.setStyle({ fill: '#ffffff' })
    })
    playAgain.on('pointerdown', () => {
      this.scene.start('MainMenu')
    })

    EventBus.emit('current-scene-ready', this)
  }

  setBackground() {
    this.cameras.main.setBackgroundColor(0xff0000)

    this.add.image(750, 450, 'background').setAlpha(0.5)

    this.add
      .text(750, 450, 'Game Over', {
        fontFamily: 'Arial Black',
        fontSize: 64,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center'
      })
      .setOrigin(0.5)
      .setDepth(100)
  }
}

