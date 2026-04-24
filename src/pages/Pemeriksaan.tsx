import Layout from "../components/layout/Layout";
import { Pencil, Trash2, ChevronLeft } from "lucide-react";

type Pemeriksaan = {
  id: number;
  tanggal: string;
  pasien: string;
  dokter: string;
  jenis: string;
  hasil: string;
};

export default function PemeriksaanPage() {
  const data: Pemeriksaan[] = [
    {
      id: 1,
      tanggal: "2026-04-20",
      pasien: "Budi Santoso",
      dokter: "Dr. Andi",
      jenis: "Darah",
      hasil: "Normal",
    },
    {
      id: 2,
      tanggal: "2026-04-20",
      pasien: "Siti Aminah",
      dokter: "Dr. Rina",
      jenis: "Urine",
      hasil: "Perlu cek lanjut",
    },
  ];

  return (
    <Layout>
        <div className="flex justify-between items-center mb-2">
                <button 
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 text-gray-600 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-lg transition">
                    <ChevronLeft className="w-5 h-5" />
                    Back
                </button>
                <a
                href="/pemeriksaan/tambah"
                className="font-bold border border-gray-400 px-4 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
            >
            + Tambah Pemeriksaan
          </a>
        </div>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Data Pemeriksaan</h1>
            <p className="text-gray-500 text-sm">
              Daftar pemeriksaan pasien
            </p>
          </div>

          
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    <input type="checkbox" className="w-4 h-4" disabled/>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Tanggal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Pasien</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Dokter</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Jenis</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Hasil</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.tanggal}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">{item.pasien}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.dokter}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                      {item.jenis}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.hasil}</td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <a
                        href="/pemeriksaan/edit"
                        className="p-2 text-yellow-500 hover:bg-yellow-50 rounded"
                        title="Edit"
                      >
                        <Pencil className="w-5 h-5" />
                      </a>

                      <button
                        className="p-2 text-red-500 hover:bg-red-50 rounded"
                        title="Hapus"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  );
}