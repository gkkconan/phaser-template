export default class Preloader extends Phaser.Scene {
  constructor(){ super({ key: "Preloader" }); }
  private _text: Phaser.GameObjects.Text;

  init(){ }
  preload(){
    this.cameras.main.setBackgroundColor("ff0000");
  }

  create(){
    this._text = this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, "Preloader",
      { font: "50px", color: "#000000" }).setOrigin(0.5);
    console.log("Preloader scene created");
  }
}