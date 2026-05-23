// src/utils/statsExport.js
import { ALBUM_DATA, generateAllStickerIds } from '../data/albumData';

// Función para calcular todas las estadísticas del álbum
export const calculateStats = (inventory) => {
  const allIds = generateAllStickerIds();
  const totalStickers = allIds.length;
  
  let uniqueCollected = 0;
  let totalRepeated = 0;

  // Analizamos el inventario
  Object.values(inventory).forEach(count => {
    if (count > 0) uniqueCollected++;
    if (count > 1) totalRepeated += (count - 1);
  });

  const missing = totalStickers - uniqueCollected;
  const percentage = totalStickers === 0 ? 0 : ((uniqueCollected / totalStickers) * 100).toFixed(1);

  return { totalStickers, uniqueCollected, totalRepeated, missing, percentage };
};

// Función para descargar un archivo .txt
export const downloadTxtFile = (inventory, type) => {
  const allIds = generateAllStickerIds();
  let content = "";
  let filename = "";

  if (type === 'missing') {
    const missingIds = allIds.filter(id => !inventory[id] || inventory[id] === 0);
    content = `MIS FALTANTES - MUNDIAL 2026\nTotal: ${missingIds.length}\n\n${missingIds.join(', ')}`;
    filename = "faltantes_mundial.txt";
  } else if (type === 'repeated') {
    const repeatedIds = Object.keys(inventory).filter(id => inventory[id] > 1);
    const repeatedWithCounts = repeatedIds.map(id => `${id} (x${inventory[id] - 1})`);
    content = `MIS REPETIDAS - MUNDIAL 2026\nTotal: ${repeatedIds.length}\n\n${repeatedWithCounts.join(', ')}`;
    filename = "repetidas_mundial.txt";
  }

  // API del navegador para crear y descargar un archivo localmente sin backend
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};