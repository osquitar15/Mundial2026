export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-20 text-center">
      <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
        Colecciona. <span className="text-primary">Gana.</span> Domina.
      </h2>
      <p className="text-lg text-textMuted max-w-2xl mb-8">
        Tu plataforma definitiva para gestionar el álbum del mundial. Abre sobres, intercambia y completa tu colección con una experiencia premium.
      </p>
      <button className="px-8 py-4 bg-primary hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all shadow-neon transform hover:scale-105 active:scale-95">
        Abrir mi primer sobre
      </button>
    </div>
  );
};