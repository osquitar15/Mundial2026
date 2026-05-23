// src/hooks/useInventory.js
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'mundial_2026_inventory';

export const useInventory = () => {
  // Inicializamos el estado leyendo de localStorage (si existe)
  const [inventory, setInventory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error("Error leyendo localStorage", error);
      return {};
    }
  });

  // Cada vez que 'inventory' cambia, lo guardamos automáticamente en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory));
  }, [inventory]);

  // Función para agregar una lámina
  const addSticker = (stickerId) => {
    setInventory(prev => ({
      ...prev,
      [stickerId]: (prev[stickerId] || 0) + 1
    }));
  };

  // Función para remover una lámina (útil si te equivocas o la intercambias)
  const removeSticker = (stickerId) => {
    setInventory(prev => {
      const currentCount = prev[stickerId] || 0;
      if (currentCount === 0) return prev; // No hace nada si ya es 0

      const newInventory = { ...prev };
      if (currentCount === 1) {
        delete newInventory[stickerId]; // Si solo hay 1, la borramos del objeto para mantenerlo limpio
      } else {
        newInventory[stickerId] = currentCount - 1; // Si hay repetidas, restamos 1
      }
      return newInventory;
    });
  };

  // Función para vaciar todo el álbum (reset)
  const resetInventory = () => {
    if (window.confirm("¿Estás seguro de borrar TODO tu progreso?")) {
      setInventory({});
    }
  };

  // Funciones derivadas (Helpers)
  const getStickerCount = (stickerId) => inventory[stickerId] || 0;
  const isCollected = (stickerId) => getStickerCount(stickerId) > 0;
  const isRepeated = (stickerId) => getStickerCount(stickerId) > 1;

  return {
    inventory,
    addSticker,
    removeSticker,
    resetInventory,
    getStickerCount,
    isCollected,
    isRepeated
  };
};