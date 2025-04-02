import { GameData } from "../../GameData";

export default class Boot extends Phaser.Scene {
  constructor(){ super({ key: "Boot" }); }

  preload(){
    this.load.image("phaser-logo", "/images/phaser-logo.png");
    this.load.font(GameData.globals.defaultFont.key, GameData.globals.defaultFont.path)
  }

  create(){
    this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, "Boot - Menu",
      { font: "50px Pixelify Sans", color: "#000000" })
      .setOrigin(0.5)
      .setInteractive().on("pointerdown", () => {
        this.scene.stop(this);
        this.scene.start("Preloader");
      });
  }

}