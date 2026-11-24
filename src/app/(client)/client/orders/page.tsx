import { Badge, Card, CardHeader, PageHeader } from "@/components/ui";

const rows = [
  { no: "ORD-20261124-3D7880", produk: "Shared Hosting — Large", domain: "mygram.my.id", total: "Rp 55.000", status: "Lunas", tgl: "24 Nov 2026" },
  { no: "ORD-20261124-8B21AF", produk: "VPS RDP Windows — Medium", domain: "—", total: "Rp 150.000", status: "Pending", tgl: "24 Nov 2026" },
];

export default function Page() {
  return (
    <>
      <PageHeader title="Pesanan Saya" desc="Riwayat pesanan & status pembayaran." />
      <Card>
        <CardHeader title="Semua Pesanan" desc="Total 2 pesanan" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-5 py-2.5 font-semibold">No. Order</th>
                <th className="px-5 py-2.5 font-semibold">Produk</th>
                <th className="px-5 py-2.5 font-semibold">Domain</th>
                <th className="px-5 py-2.5 font-semibold">Total</th>
                <th className="px-5 py-2.5 font-semibold">Status</th>
                <th className="px-5 py-2.5 font-semibold">Tanggal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.no}>
                  <td className="px-5 py-3.5 font-mono text-xs text-slate-600">{r.no}</td>
                  <td className="px-5 py-3.5 text-slate-700">{r.produk}</td>
                  <td className="px-5 py-3.5 text-slate-500">{r.domain}</td>
                  <td className="px-5 py-3.5 font-medium text-slate-700">{r.total}</td>
                  <td className="px-5 py-3.5"><Badge status={r.status} /></td>
                  <td className="px-5 py-3.5 text-slate-500">{r.tgl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
