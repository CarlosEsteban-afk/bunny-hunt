import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        this.load.setPath('assets');
        this.load.image('background', 'images/bg.png');
        this.load.image('grass', 'images/grass.png');
        this.load.image('tree', 'images/tree.png');
        this.load.image('bunny-logo', 'images/bunny-title.png');
        this.load.image('hunt-logo', 'images/hunt-title.png');
        this.load.audio('bullet-sound', 'sounds/bullet-sound.mp3')
        this.load.image('logo', 'images/logo.png');
        this.load.image('star', 'images/star.png');
        this.load.image('bullet', 'images/bullet.png');
        
    }

    

    create ()
    {
        this.scene.start('Preloader');
        
    }
}
