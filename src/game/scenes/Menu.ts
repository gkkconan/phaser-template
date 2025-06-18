export default class Menu extends Phaser.Scene {
  constructor(){ super({ key: "Menu" }); }

  create(){
    this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, "Start Game",
      { font: "50px Pixelify Sans", color: "#000000" })
      .setOrigin(0.5)
      .setInteractive().on("pointerdown", () => {
        this.scene.stop(this);
        this.scene.start("GamePlay");
      });
  }

}