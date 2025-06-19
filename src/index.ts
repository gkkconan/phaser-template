import "phaser";
import { GameData } from "./GameData";

// scenes
import Preloader from "./game/scenes/Preloader";
import Boot from "./game/scenes/Boot";
import Menu from "./game/scenes/Menu";
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
      Preloader,
      Boot,
      Menu,
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