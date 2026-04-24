import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Pasien from '../pages/Pasien';
import PemeriksaanPage from '../pages/Pemeriksaan';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Pasien" element={<Pasien />} />
        <Route path="/Pemeriksaan" element={<PemeriksaanPage />} />
      </Routes>
    </BrowserRouter>
  );
}