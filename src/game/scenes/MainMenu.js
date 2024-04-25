import { scaleImage } from '../../utils/scaleImage'
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
    scaleImage(this, 'background')
    this.bunnyLogo = this.add.image(-200, 250, 'bunny-logo').setDepth(100).setScale(0.5)
    this.huntLogo = this.add.image(2000, 430, 'hunt-logo').setDepth(100).setScale(0.5)
    this.tweens.add({
      targets: this.bunnyLogo,
      x: 750,
      duration: 500,
      ease: 'Power2',
      onComplete: () => {
        this.sound.play('bullet-sound');
        this.tweens.add({
          targets: this.huntLogo,
          x: 750,
          duration: 500,
          ease: 'Power2',
          onComplete: () => {
            this.sound.play('bullet-sound')
          }
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

