import { gameData } from '../typings/gameData';

export let GameData: gameData = {
  globals: {
    gameWidth: 1280,
    gameHeight: 800,
    bgColor: "#ffffff",
    debug: false
  },

  preloader: {
    bgColor: "#ffffff",
    loadingText: "Loading...",
    loadingTextFont: "Roboto",
    loadingTextComplete: "Enter a key to start...",
    loadingTextY: 700,
  },

  images: [],
  tilemaps: [],
  atlas: [],
  spritesheets: [],
  sounds: [],
  videos: [],
  scripts: [],
  fonts: [],
  bitmapfonts: [],
  webfonts: [{ key: 'Roboto' }],
};