import { ChevronLeft, Pencil, Trash2 } from 'lucide-react';
import Layout from "../components/layout/Layout";

    type Pasien = {
        id: number;
        tgl: string;
        noreg: string;
        nama: string;
        kategori: string;
        gender: string;
        doktor: string;
    };

export default function Pasien() {
    const data: Pasien[] = [
        {
            id: 1,
            tgl: "2026-04-19",
            noreg: "REG001",
            nama: "John Doe",
            kategori: "Umum",
            gender: "Laki-laki",
            doktor: "Dr. Smith"
        },
        {
            id: 2,
            noreg: "REG002",
            tgl: "2026-04-20",
            nama: "Siti Aminah",
            kategori: "BPJS",
            gender: "Perempuan",
            doktor: "Dr. Rina",
        },
    ];


    return (
        <Layout>
            <div className="mb-8">
                <button 
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 text-gray-600 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-lg transition">
                    <ChevronLeft className="w-5 h-5" />
                    Back
                </button>
                <h1 className="text-2xl font-bold">Data Pasien</h1>
                <p className="text-gray-500  mt-1">
                    Daftar Pasien yang telah terdaftar.
                </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 font-bold">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">No</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Tanggal</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">No Reg</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Nama</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Kategori</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Gender</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Doktor</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((pasien) => (
                            <tr key={pasien.id} className="hover:bg-gray-100 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pasien.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pasien.tgl}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pasien.noreg}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><a href="/Pasien" className="hover:text-blue-500">{pasien.nama}</a></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pasien.kategori}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pasien.gender}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pasien.doktor}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <a href="/Pasien" className="text-yellow-500 hover:text-yellow-700">
                                            <Pencil className="w-5 h-5" />
                                        </a>
                                        <button className="text-red-500 hover:text-red-700 ml-4">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}