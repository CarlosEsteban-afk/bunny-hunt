// utils.js
export function scaleImage(scene, imageName) {
    const gameWidth = scene.sys.game.config.width;
    const gameHeight = scene.sys.game.config.height + 1;
    const image = scene.add.image(gameWidth / 2, gameHeight / 2, imageName);
    image.setScale(gameWidth / image.width, gameHeight / image.height);
    return image;
}