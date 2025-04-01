export default class Boot extends Phaser.Scene {
  constructor(){ super({ key: "Boot" }); }

  init(){ }
  preload(){
    this.cameras.main.setBackgroundColor("ff0000");
  }

  create(){
    this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, "Boot",
      { font: "50px", color: "#000000" }).setOrigin(0.5);
    console.log("Boot scene created");
  }
}