import "phaser";
import { GameData } from "./GameData";

// scenes
import Boot from "./game/scenes/Boot";
import Preloader from "./game/scenes/Preloader";
import GamePlay from "./game/scenes/GamePlay";

window.addEventListener("load", () => {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    backgroundColor: GameData.globals.bgColor,
    parent: "app",
    scale: {
      mode: Phaser.Scale.FIT,
      // width: GameData.globals.gameWidth,
      // height: GameData.globals.gameHeight,
      width: window.innerWidth,
      height: window.innerHeight,
    },
    scene: [
      Boot,
      Preloader,
      GamePlay
    ],
    physics: {
      default: "arcade",
      arcade: { debug: false, }
    },
    input: {
      activePointers: 2,
      keyboard: true,
    },
    render: {
      pixelArt: false,
      antialias: true,
    },
    loader: {
        baseURL: '/assets/',
      },
  };

  const game = new Phaser.Game(config); // game initializing according to configs
});