export interface gameData {
  globals: {
    gameWidth: number,
    gameHeight: number,
    bgColor: string,
    debug: boolean
  },

  preloader: {
    bgColor: string,
    loadingText: string,
    loadingTextFont: string,
    loadingTextComplete: string,
    loadingTextY: number,
  },

  images?: Array<ImageAsset>,
  tilemaps?: Array<TilemapAsset>,
  atlas?: Array<AtlasAsset>,
  spritesheets?: Array<SpritesheetsAsset>,
  sounds?: Array<SoundAsset>,
  videos?: Array<VideoAsset>,
  scripts?: Array<ScriptAsset>,
  fonts?: Array<FontAsset>,
  webfonts?: Array<FontAsset>,
  bitmapfonts?: Array<FontAsset>,
}

interface ImageAsset { name: string; path: string; }
interface TilemapAsset { key: string; path: string; }
interface AtlasAsset { name: string; path: string; jsonpath: string; }
interface SpritesheetsAsset {
  name: string;
  path: string;
  width: number;
  height: number;
  frames: number;
  spacing?: number;
}
interface SoundAsset { name: string; path: Array<string>; }
interface VideoAsset { name: string; path: string; }
interface ScriptAsset{ key: string; path: string; }
interface FontAsset {
  key: string;
  imgpath?: string;
  path?: string;
  xmlpath?: string;
}