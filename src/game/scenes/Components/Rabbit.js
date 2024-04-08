import Phaser from 'phaser';

export default class Conejo extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    // Añadir a la escena
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Configuraciones físicas básicas
    this.setCollideWorldBounds(true);
    this.setBounce(0.8);
    this.setInteractive();

    // Configuración de la interactividad
    this.on('pointerdown', () => {
      this.clickHandler();
    });

    // Movimiento inicial o cualquier otro setup necesario
    this.initMovement();
  }

  initMovement() {
    // Aquí puedes definir cómo se mueve inicialmente el conejo,
    // por ejemplo, un impulso inicial o una dirección aleatoria.
    const jumpPower = 700;
    this.setVelocityY(-jumpPower);

    const direction = Math.random() < 0.5 ? -1 : 1;
    const horizontalVelocity = 400;
    this.setVelocityX(horizontalVelocity * direction);
  }

  clickHandler() {
    // Define lo que sucede cuando el conejo es clickeado
    this.destroy();
  }
}
