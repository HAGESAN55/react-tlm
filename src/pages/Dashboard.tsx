import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";
import { Users, Activity, CalendarDays, CalendarCheck } from "lucide-react";

function Dashboard() {
  return (
    

    <Layout>
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 mt-2">Welcome, User!</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <a href="/Pasien" className="hover:scale-101 transition-transform">
          <Card 
          title="Total Pasien"
          value="1,245"
          icon={<Users className="w-6 h-6 text-blue-500" />}
          />
        </a>
        <a href="/" className="hover:scale-101 transition-transform">
          <Card 
          title="Revenue" 
          value="$12,340" 
          icon={<Activity className="w-6 h-6 text-green-500" />} />
        </a>
        <a href="/Pemeriksaan" className="hover:scale-101 transition-transform">
          <Card 
          title="Pemeriksaan" 
          value="320" 
          icon={<CalendarDays className="w-6 h-6 text-purple-500" />} />
        </a>
        <Card 
          title="Laporan Tuntas" 
          value="500"
          icon={<CalendarCheck className="w-6 h-6 text-green-500" />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-3 rounded-xl shadow-sm border">
          <p className="text-xl font-semibold mb-1">Jadwal Akan Datang</p>
          <h3 className="text-sm text-gray-400 mb-5">Jadwal Aktifitas untuk hari yang akan datang.</h3>
          <Card 
          title="Laporan Tuntas" 
          value="500"
          icon={<CalendarCheck className="w-6 h-7 text-green-500" />}
        />
        </div>
        <div className="bg-white p-3 rounded-xl shadow-sm border">
          <p className="text-xl font-semibold mb-1">Aktivitas Terbaru</p>
          <h3 className="text-sm text-gray-400 mb-5">Aktivitas terbaru yang terjadi di sistem.</h3>
          <Card 
          title="Laporan Tuntas" 
          value="500"
          icon={<CalendarCheck className="w-6 h-7 text-green-500" />}
        />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;