export let GameData: gameData = {
  globals: {
    gameWidth: 1280,
    gameHeight: 800,
    bgColor: "#ffffff",
    debug: false
  },

  preloader: {
    loadingTextFont: "Roboto",
    loadingTextComplete: "Enter a key to start...",
    loadingTextY: 700,
  },

  images: [
    { name: 'phaser-logo', path: '/images/phaser-logo.png' }
  ],
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