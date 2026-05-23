import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateAllStickerIds } from '../../data/albumData';

export const PackModal = ({ isOpen, onClose, onClaim }) => {
  // Estado para los 5 inputs del sobre
  const [stickers, setStickers] = useState(["", "", "", "", ""]);
  const [error, setError] = useState("");

  // Obtenemos todos los IDs válidos para validar lo que escribe el usuario
  const allValidIds = generateAllStickerIds();

  // Manejador cuando el usuario escribe en un input
  const handleInputChange = (index, value) => {
    const newStickers = [...stickers];
    // Convertimos a mayúsculas automáticamente para mejor UX (mex-1 -> MEX-1)
    newStickers[index] = value.toUpperCase().trim();
    setStickers(newStickers);
    setError(""); // Limpiamos errores si el usuario empieza a corregir
  };

  // Manejador del botón guardar
  const handleSave = () => {
    // Filtramos los inputs vacíos
    const filledStickers = stickers.filter(s => s !== "");

    if (filledStickers.length === 0) {
      setError("Por favor, ingresa al menos un código.");
      return;
    }

    // Validamos que todos los códigos ingresados existan en el álbum
    const invalidStickers = filledStickers.filter(s => !allValidIds.includes(s));
    
    if (invalidStickers.length > 0) {
      setError(`Códigos inválidos: ${invalidStickers.join(", ")}. Ej: MEX-1`);
      return;
    }

    // Si todo está bien, lo enviamos al Home para que lo guarde
    onClaim(filledStickers);
    
    // Limpiamos el modal para la próxima vez
    setStickers(["", "", "", "", ""]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()} 
            className="glass-panel w-full max-w-2xl p-8 relative flex flex-col items-center border border-primary/30"
          >
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 mb-2 text-center">
              Registrar Sobre Físico
            </h2>
            <p className="text-textMuted mb-8 text-center">
              Ingresa los códigos de las 5 láminas que te salieron (Ej: MEX-1)
            </p>

            {/* Inputs para las 5 láminas */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 w-full">
              {stickers.map((code, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-xs text-slate-400 mb-1 font-bold">LÁMINA {index + 1}</span>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder="AAA-1"
                    className="w-24 h-32 bg-surface border-2 border-slate-600 rounded-lg text-center text-xl font-bold text-white focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-glass placeholder:text-slate-600"
                    maxLength={6}
                  />
                </div>
              ))}
            </div>

            {/* Mensaje de error si se equivocan de código */}
            {error && (
              <p className="text-red-400 font-medium mb-4 text-center">{error}</p>
            )}

            <div className="flex gap-4 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-all w-full sm:w-auto"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="px-8 py-3 bg-primary hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all shadow-neon hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Guardar Láminas
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};