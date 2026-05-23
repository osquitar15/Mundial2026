import { ALBUM_DATA } from '../data/albumData';
import { useInventory } from '../hooks/useInventory';
import { StickerCard } from '../components/album/StickerCard';
import { StatsBoard } from '../components/album/StatsBoard';

export const Home = () => {
  const { getStickerCount, addSticker, removeSticker } = useInventory();

  return (
    <div className="pb-20 flex flex-col gap-12">
      {/* Cabecera del Álbum */}
      <div className="text-center mt-8 mb-4">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 mb-4">
          Tu Colección
        </h2>
        <p className="text-textMuted">Haz click izquierdo para agregar, click derecho para quitar.</p>
      </div>

      {/* RENDERIZA EL DASHBOARD DE ESTADÍSTICAS AQUÍ */}
      <StatsBoard />

      {/* Mapeo de Equipos (Mantenlo igual que antes) */}
      {ALBUM_DATA.map((team) => (
        // ... (El código de tus secciones de equipos queda intacto)
        <section key={team.id} className="glass-panel p-6">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-bold">{team.name}</h3>
            <span className="text-sm font-medium bg-slate-800 text-textMuted px-3 py-1 rounded-full border border-white/5">
              {team.id}
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
            {Array.from({ length: team.stickersCount }).map((_, index) => {
              const stickerId = `${team.id}-${index + 1}`;
              return (
                <StickerCard
                  key={stickerId}
                  id={stickerId}
                  colorClass={team.color}
                  count={getStickerCount(stickerId)}
                  onAdd={addSticker}
                  onRemove={removeSticker}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};