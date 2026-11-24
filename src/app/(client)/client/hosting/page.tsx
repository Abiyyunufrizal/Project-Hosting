import { Badge, Btn, Card, CardHeader, PageHeader } from "@/components/ui";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

const rows = [
  { paket: "Large", domain: "mygram.my.id", user: "kd_369522", pesan: "24 Nov 2026", kadaluarsa: "24 Des 2026", status: "Aktif" },
];

export default function Page() {
  return (
    <>
      <PageHeader
        title="Shared Hosting"
        desc="Kelola paket shared hosting aktif, lanjutkan pesanan yang menunggu pembayaran, dan masuk ke CodeByte Panel."
        right={<Btn href="/checkout"><Plus className="h-4 w-4" /> Pesan Hosting</Btn>}
      />
      <Card>
        <CardHeader
          title="Daftar Layanan Shared Hosting"
          desc="Total 1 item ditemukan"
          right={
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Cari paket, domain, order..."
                className="w-56 rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-400"
              />
            </div>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-5 py-2.5 font-semibold">Paket & Domain</th>
                <th className="px-5 py-2.5 font-semibold">Username / No. Order</th>
                <th className="px-5 py-2.5 font-semibold">Tanggal Pesan</th>
                <th className="px-5 py-2.5 font-semibold">Kadaluarsa</th>
                <th className="px-5 py-2.5 font-semibold">Status</th>
                <th className="px-5 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.user}>
                  <td className="px-5 py-3.5">
                    <p className="font-semibold text-slate-800">{r.paket}</p>
                    <Link href="/panel" className="text-xs text-blue-600 hover:underline">{r.domain} ↗</Link>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-600">{r.user}</span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-600">{r.pesan}</td>
                  <td className="px-5 py-3.5 text-slate-600">{r.kadaluarsa}</td>
                  <td className="px-5 py-3.5"><Badge status={r.status} /></td>
                  <td className="px-5 py-3.5">
                    <div className="flex justify-end gap-2">
                      <Btn variant="outline" href="/client/hosting">Detail</Btn>
                      <Btn href="/panel">Masuk</Btn>
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
