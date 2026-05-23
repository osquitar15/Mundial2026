import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Album } from './pages/Album'; // <-- NUEVO

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="album" element={<Album />} /> {/* <-- NUEVO */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;