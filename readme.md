# Phaser 3 + Vite + TS

<div align="center">

[![phaser](https://img.shields.io/badge/engine-phaser%203-blueviolet)](https://phaser.io)
[![vite](https://img.shields.io/badge/bundler-vite-yellow)](https://vitejs.dev)
[![typescript](https://img.shields.io/badge/lang-typescript-3178c6)](https://www.typescriptlang.org/)
[![license](https://img.shields.io/badge/license-GPL--3.0-green)](LICENSE)

</div>

A clean, minimal starter template for building 2D games with [Phaser 3](https://phaser.io), powered by [Vite](https://vitejs.dev) and [TypeScript](https://www.typescriptlang.org/).  
Designed for fast prototyping, clear structure, and easy scalability - perfect for game jams, hobby projects, or learning game development. 🎮



## 🛠️ Features
- Lightning-fast dev server (Vite)
- Phaser 3 (v3.88+)
- Written in TS
- Modular folder structure
- Built-in asset preloading
- Clean, readable, and minimal codebase


## 🚀 Getting Started
- `$ git clone https://github.com/gkkconan/phaser-template.git`
- `$ cd phaser-template`
- `$ pnpm install` or `$ pnpm i`
- `$ pnpm run dev`

Then open http://localhost:5173 in your browser.


## 📂 Project Structure
```plaintext
src/
├── GameData.ts             # Shared game constants/data
├── assets/                 # Game assets
│   ├── images/             # ImageAsset
│   ├── tilemaps/           # TilemapAsset
│   ├── atlas/              # AtlasAsset
│   ├── spritesheets/       # SpritesheetsAsset
│   ├── sounds/             # SoundAsset
│   ├── videos/             # VideoAsset
│   ├── scripts/            # ScriptAsset
│   ├── fonts/              # FontAsset
│   ├── webfonts/           # FontAsset
│   └── bitmapfonts/        # FontAsset bitmap
├── game/
│   └── scenes/             # Game scenes
│       ├── Menu.ts         # Load fonts or config
│       ├── GamePlay.ts     # Main gameplay logic
│       └── Preloader.ts    # Loads all assets
├── index.html              # HTML entry point
├── index.ts                # Game entry (initializes Phaser)
└── style.css               # Main styles (optional)
```
Sample fonts and images are already included in `assets/` for testing and layout.
> ⚠️ For performance and project size, it is recommended to download all fonts and place them inside `assets/fonts/`.  
> ⚠️ The file `GameData.ts` contains key variables and constants used throughout the template. You can add more according to your needs. To keep type safety, update the corresponding interface in `typings/gameData.t.ts` when extending.  
> 📝 Note: Not all folders listed above are present in the repository by default, as some are initially empty. However, the structure reflects the ideal organization for assets and game logic. You can create these directories as needed during development.


## 💡 Why This Template?
This project focuses on simplicity and clarity:
- No complex config or plugins
- Flat learning curve for Phaser + TS
- Easily extendable scene-based structure
- Ideal for prototypes, jams, and small projects


## 🤝 Contributing
Feel free to fork this project, open issues, or suggest improvements.  
Pull requests are welcome - especially if they keep the codebase clean and simple.


## 📜 License
GPL-3.0 © [gkkconan](https://github.com/gkkconan/)