import { useState } from 'react';
import { useInventory } from '../hooks/useInventory';
import { PackModal } from '../components/ui/PackModal';

export const Home = () => {
  const { addSticker } = useInventory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClaimPack = (stickersArray) => {
    // Añadimos cada lámina al inventario global
    stickersArray.forEach(stickerId => {
      addSticker(stickerId);
    });
    
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full mt-20 text-center">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
          Colecciona. <span className="text-primary">Gana.</span> Domina.
        </h2>
        <p className="text-lg text-textMuted max-w-2xl mb-8">
          Tu plataforma definitiva para gestionar tu álbum físico del mundial. Registra tus sobres, encuentra tus faltantes y completa tu colección.
        </p>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-primary hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all shadow-neon transform hover:scale-105 active:scale-95"
        >
          Registrar Sobre Físico
        </button>
      </div>

      <PackModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onClaim={handleClaimPack}
      />
    </>
  );
};