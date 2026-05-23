import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Aquí irá el Navbar en el futuro */}
      <header className="glass-panel mx-4 mt-4 p-4 flex justify-between items-center z-10">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Mundial 2026 Tracker
        </h1>
        <nav className="text-sm font-medium text-textMuted">
          V 1.0
        </nav>
      </header>

      {/* El contenido de cada página se inyecta aquí */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 z-10">
        <Outlet />
      </main>

      {/* Efectos de luz de fondo */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-hero-glow opacity-20 blur-3xl"></div>
    </div>
  );
};