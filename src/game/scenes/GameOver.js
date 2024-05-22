import { EventBus } from '../EventBus'
import { Scene } from 'phaser'
import { scaleImage } from '../../utils/scaleImage'
export class GameOver extends Scene {
  constructor() {
    super('GameOver')
  }

  create() {
    
    this.setBackground()
    this.setScore()
    this.setPlayAgain()
    EventBus.emit('current-scene-ready', this)
  }

  setBackground() {
    scaleImage(this, 'background')
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
  setPlayAgain() {
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
  }
  setScore() {
    const score = this.registry.get('score')
    const nombre = this.registry.get('nombre')

    console.log(this.registry.get('nombre'));
    this.add
      .text(750, 550, `Score: ${score}`, {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center'
      })
      .setOrigin(0.5)
      .setDepth(100)

    this.add
      .text(750, 350, `Name: ${nombre}`, {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center'
      })
      .setOrigin(0.5)
      .setDepth(100)
  }
}

