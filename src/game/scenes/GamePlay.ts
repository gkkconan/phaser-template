export default class GamePlay extends Phaser.Scene {
  constructor() { super({ key: "GamePlay" }); }

  create(){
    this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, 'knight').setScale(0.5);
  }

}