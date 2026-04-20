import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Pasien from '../pages/Users';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Pasien" element={<Pasien />} />
      </Routes>
    </BrowserRouter>
  );
}