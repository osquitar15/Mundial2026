// src/utils/packGenerator.js
import { generateAllStickerIds } from '../data/albumData';

export const openPack = () => {
  const allStickers = generateAllStickerIds();
  const packSize = 5;
  const newPack = [];

  for (let i = 0; i < packSize; i++) {
    // Math.random() nos da un número entre 0 y 1. Lo multiplicamos por el total de láminas.
    const randomIndex = Math.floor(Math.random() * allStickers.length);
    newPack.push(allStickers[randomIndex]);
  }

  return newPack;
};