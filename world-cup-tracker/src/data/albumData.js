// src/data/albumData.js

export const ALBUM_DATA = [
  {
    id: "MEX",
    name: "México",
    color: "from-green-600 to-green-800",
    stickersCount: 20, // Suponiendo 20 láminas por equipo
  },
  {
    id: "USA",
    name: "Estados Unidos",
    color: "from-blue-600 to-blue-800",
    stickersCount: 20,
  },
  {
    id: "CAN",
    name: "Canadá",
    color: "from-red-600 to-red-800",
    stickersCount: 20,
  },
  {
    id: "ARG",
    name: "Argentina",
    color: "from-sky-400 to-blue-500",
    stickersCount: 20,
  },
  {
    id: "COL",
    name: "Colombia",
    color: "from-yellow-400 to-yellow-600",
    stickersCount: 20,
  }
];

// Función utilitaria para generar todos los IDs posibles (Ej: "MEX-1", "MEX-2"...)
export const generateAllStickerIds = () => {
  const ids = [];
  ALBUM_DATA.forEach(team => {
    for (let i = 1; i <= team.stickersCount; i++) {
      ids.push(`${team.id}-${i}`);
    }
  });
  return ids;
};