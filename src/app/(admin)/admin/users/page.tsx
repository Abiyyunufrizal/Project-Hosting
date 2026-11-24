import { Badge, Btn, Card, CardHeader, PageHeader } from "@/components/ui";
import { Search } from "lucide-react";

const rows = [
  { nama: "Fauzan Nur Hafidz", email: "koho.zettero@gmail.com", layanan: 1, tgl: "20 Nov 2026", status: "Aktif" },
  { nama: "Budi Santoso", email: "budi@mail.com", layanan: 2, tgl: "22 Nov 2026", status: "Aktif" },
  { nama: "Rina Wijaya", email: "rina@mail.com", layanan: 0, tgl: "24 Nov 2026", status: "Suspended" },
];

export default function Page() {
  return (
    <>
      <PageHeader title="Kelola Client" desc="Daftar semua client terdaftar. Suspend akan freeze layanan & FTP otomatis." />
      <Card>
        <CardHeader
          title="Semua Client"
          desc="Total 3 client"
          right={
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Cari nama / email..."
                className="w-56 rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-400"
              />
            </div>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-5 py-2.5 font-semibold">Nama</th>
                <th className="px-5 py-2.5 font-semibold">Email</th>
                <th className="px-5 py-2.5 font-semibold">Layanan</th>
                <th className="px-5 py-2.5 font-semibold">Terdaftar</th>
                <th className="px-5 py-2.5 font-semibold">Status</th>
                <th className="px-5 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.email}>
                  <td className="px-5 py-3.5 font-medium text-slate-800">{r.nama}</td>
                  <td className="px-5 py-3.5 text-slate-500">{r.email}</td>
                  <td className="px-5 py-3.5 text-slate-600">{r.layanan}</td>
                  <td className="px-5 py-3.5 text-slate-500">{r.tgl}</td>
                  <td className="px-5 py-3.5"><Badge status={r.status} /></td>
                  <td className="px-5 py-3.5">
                    <div className="flex justify-end items-center gap-3">
                      <Btn variant="outline" href="/admin/users">Detail</Btn>
                      <button className="text-sm font-medium text-red-500 hover:text-red-600">Suspend</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
