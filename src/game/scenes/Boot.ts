export default class Boot extends Phaser.Scene {
  constructor(){ super({ key: "Boot" }); }
  private logo: Phaser.GameObjects.Image;

  preload(){
    this.load.image("phaser-logo", "/images/phaser-logo.png");
  }

  create(){
    this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, "Boot",
      { font: "50px", color: "#000000" })
      .setOrigin(0.5)
      .setInteractive().on("pointerdown", () => {
        this.scene.stop(this);
        this.scene.start("Preloader");
      });
  }

}