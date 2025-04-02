import { GameData } from "../../GameData";

export default class Preloader extends Phaser.Scene {
  constructor(){ super({ key: "Preloader" }); }
  private _loadingText: Phaser.GameObjects.Text;
  private _image: Phaser.GameObjects.Image;

  update(delta: number){
    this._image.angle += 1;
  }

  init(){
    this._image = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, 'phaser-logo').setAlpha(1).setScale(0.1);
    this.tweens.add({
      targets: [this._image],
      alpha: 1,
      duration: 500,
    });

    this._loadingText = this.add
      .text(this.game.canvas.width / 2, GameData.preloader.loadingTextY, "")
      .setAlpha(1)
      .setDepth(1001)
      .setOrigin(0.5, 1)
      .setColor(GameData.preloader.loadingTextColor)
      .setFontSize(40)
      .setFontFamily(GameData.preloader.loadingTextFont);
  }

  preload(){
    this.cameras.main.setBackgroundColor(GameData.globals.bgColor);
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    this.loadAssets();
  }

  loadAssets(){
    this.load.on("complete", () => {
      this._loadingText.setText(GameData.preloader.loadingTextComplete);

      this.input.keyboard!.on('keydown-ESC', () => {
        this.scene.stop(this);
        this.scene.start("Boot");
      });

      this.input.keyboard!.on("keydown", () => {
        this.tweens.add({
          targets: [this._image, this._loadingText],
          alpha: 0,
          duration: 500,
          onComplete: () => {
            this.scene.stop(this);
            this.scene.start("GamePlay");
          },
        });
      });
    });

    this.allAssets();
  }

  allAssets(){
    // IMAGES
    if(GameData.images != null) GameData.images.forEach((element: ImageAsset) => {
      this.load.image(element.name, element.path);
    });

    // TILEMAPS
    if(GameData.tilemaps != null) GameData.tilemaps.forEach((element: TilemapAsset) => {
        this.load.tilemapTiledJSON(element.key, element.path);
    });

    // ATLAS
    if(GameData.atlas != null) GameData.atlas.forEach((element: AtlasAsset) => {
      this.load.atlas(element.key, element.path, element.jsonpath);
    });

    // SPRITESHEETS
    if(GameData.spritesheets != null) GameData.spritesheets.forEach((element: SpritesheetsAsset) => {
      this.load.spritesheet(element.name, element.path, { frameWidth: element.width, frameHeight: element.height, endFrame: element.frames });
    });

    // VIDEO
    if(GameData.videos != null) GameData.videos.forEach((element: VideoAsset) => {
        this.load.video(element.name, element.path, true);
      });

    // SOUNDS
    if(GameData.sounds != null) GameData.sounds.forEach((element: SoundAsset) => {
      this.load.audio(element.name, element.paths);
    });

    // SCRIPT
    if (GameData.scripts != null) GameData.scripts.forEach((element: ScriptAsset) => {
      this.load.script(element.key, element.path);
    });

    // BITMAP FONTS
    if (GameData.bitmapfonts != null) GameData.bitmapfonts.forEach((element: FontAsset) => {
      this.load.bitmapFont(element.key, element.path, element.xmlpath);
    });

    // LOCAL FONTS
    if(GameData.fonts != null){
      GameData.fonts.forEach((element: FontAsset) => { this.load.font(element.key, element.path) });
    }

    // WEB FONTS
    if (GameData.webfonts != null) {
      GameData.webfonts.forEach((font) => {
        const googleFontUrl = `https://fonts.googleapis.com/css2?family=${font.key.replace(/ /g, '+')}:wght@100;200;300;400;500;600;700;800;900&display=swap`;
        const fontStyle = document.createElement('link');
        fontStyle.rel = 'stylesheet';
        fontStyle.href = googleFontUrl;
        document.head.appendChild(fontStyle);
      });
    }
  }

}