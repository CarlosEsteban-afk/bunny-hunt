import Phaser from 'phaser';
import { EventBus } from '../../EventBus';
export default class Rabbit extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    this.setBounce(0.8);
    this.setInteractive();

    this.initMovement();
  }

  initMovement() {

    const jumpPower = 700;
    this.setVelocityY(-jumpPower);

    const direction = Math.random() < 0.5 ? -1 : 1;
    const horizontalVelocity = 400;
    this.setVelocityX(horizontalVelocity * direction);
  }

}
