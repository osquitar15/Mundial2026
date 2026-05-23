import { Outlet, Link } from 'react-router-dom'; // <-- IMPORTAR Link

export const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <header className="glass-panel mx-4 mt-4 p-4 flex justify-between items-center z-10">
        <Link to="/">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Mundial 2026 Tracker
          </h1>
        </Link>
        <nav className="flex gap-4">
          <Link to="/album" className="text-sm font-bold text-white hover:text-primary transition-colors">
            Mi Álbum
          </Link>
        </nav>
      </header>
      
      {/* ... resto del archivo exactamente igual ... */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 z-10">
        <Outlet />
      </main>

      <div className="fixed inset-0 z-0 pointer-events-none bg-hero-glow opacity-20 blur-3xl"></div>
    </div>
  );
};