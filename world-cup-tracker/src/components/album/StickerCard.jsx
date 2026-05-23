import { motion } from 'framer-motion';
import clsx from 'clsx';

export const StickerCard = ({ id, colorClass, count, onAdd, onRemove }) => {
  const isCollected = count > 0;
  const isRepeated = count > 1;

  return (
    <motion.div
      // Animaciones premium de Framer Motion
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      // Interacciones
      onClick={() => onAdd(id)}
      onContextMenu={(e) => {
        e.preventDefault(); // Evita el menú nativo del navegador
        onRemove(id);
      }}
      className={clsx(
        "relative aspect-[3/4] rounded-lg cursor-pointer transition-all duration-300 overflow-hidden flex flex-col items-center justify-center border-2 select-none",
        isCollected 
          ? `bg-gradient-to-br ${colorClass} shadow-glass border-white/20` 
          : "bg-surface border-dashed border-slate-600 opacity-50 grayscale hover:grayscale-0 hover:opacity-80"
      )}
    >
      {/* Brillo superior tipo carta foil */}
      {isCollected && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 pointer-events-none"></div>
      )}

      {/* Código de la lámina */}
      <span className={clsx(
        "font-bold text-lg z-10",
        isCollected ? "text-white drop-shadow-md" : "text-slate-400"
      )}>
        {id}
      </span>

      {/* Badge de repetidas */}
      {isRepeated && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 bg-accent text-slate-900 font-bold text-xs px-2 py-1 rounded-full shadow-lg"
        >
          x{count}
        </motion.div>
      )}
    </motion.div>
  );
};