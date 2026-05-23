import { useInventory } from '../../hooks/useInventory';
import { calculateStats, downloadTxtFile } from '../../utils/statsExport';
import { motion } from 'framer-motion';
import { FaDownload, FaPercentage, FaLayerGroup, FaClone, FaRegStar } from 'react-icons/fa';

export const StatsBoard = () => {
  const { inventory } = useInventory();
  const stats = calculateStats(inventory);

  const StatCard = ({ icon, title, value, colorClass }) => (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`glass-panel p-4 flex items-center gap-4 border-l-4 ${colorClass}`}
    >
      <div className={`p-3 rounded-full bg-slate-800/50 text-xl ${colorClass.replace('border-', 'text-')}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-textMuted font-bold">{title}</p>
        <p className="text-2xl font-black text-white">{value}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col gap-6 mb-12">
      {/* Tarjetas de Estadísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard 
          icon={<FaPercentage />} 
          title="Completado" 
          value={`${stats.percentage}%`} 
          colorClass="border-primary"
        />
        <StatCard 
          icon={<FaRegStar />} 
          title="Obtenidas" 
          value={`${stats.uniqueCollected} / ${stats.totalStickers}`} 
          colorClass="border-blue-400"
        />
        <StatCard 
          icon={<FaLayerGroup />} 
          title="Faltantes" 
          value={stats.missing} 
          colorClass="border-red-400"
        />
        <StatCard 
          icon={<FaClone />} 
          title="Repetidas" 
          value={stats.totalRepeated} 
          colorClass="border-accent"
        />
      </div>

      {/* Botones de Exportación */}
      <div className="flex flex-wrap gap-4 justify-end">
        <button 
          onClick={() => downloadTxtFile(inventory, 'missing')}
          className="flex items-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 border border-red-400/30 text-red-400 font-bold rounded-lg transition-colors"
        >
          <FaDownload /> Faltantes (.txt)
        </button>
        <button 
          onClick={() => downloadTxtFile(inventory, 'repeated')}
          className="flex items-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 border border-accent/30 text-accent font-bold rounded-lg transition-colors"
        >
          <FaDownload /> Repetidas (.txt)
        </button>
      </div>
    </div>
  );
};