export let GameData: gameData = {
  globals: {
    gameWidth: 1280,
    gameHeight: 800,
    bgColor: "#ffffff",
    debug: false,
    defaultFont: { key: "Pixelify Sans", path: "/fonts/PixelifySans.ttf" }
  },

  preloader: {
    loadingTextFont: "Pixelify Sans",
    loadingTextColor: "#000000",
    loadingTextComplete: "Enter a key to start...",
    loadingTextY: 700,
  },

  images: [
    { name: 'phaser-logo', path: '/images/phaser-logo.png' },
    { name: 'knight', path: '/images/knight.svg' }
  ],
  tilemaps: [],
  atlas: [],
  spritesheets: [],
  sounds: [],
  videos: [],
  scripts: [],
  fonts: [{ key: 'Boldonse', path: '/fonts/Boldonse.ttf' }],
  webfonts: [{ key: 'Roboto' }, { key: 'Pixelify Sans' }, { key: 'Bungee Tint' }],
  bitmapfonts: [],
};