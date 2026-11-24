import { Badge, Card, CardHeader, PageHeader } from "@/components/ui";

const rows = [
  { no: "INV-202611-0001", order: "ORD-20261124-3D7880", total: "Rp 55.000", metode: "MANDIRI VA H2H", status: "Lunas", tgl: "24 Nov 2026" },
];

export default function Page() {
  return (
    <>
      <PageHeader title="Tagihan" desc="Faktur untuk semua layanan kamu." />
      <Card>
        <CardHeader title="Daftar Tagihan" desc="Total 1 tagihan" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-5 py-2.5 font-semibold">No. Invoice</th>
                <th className="px-5 py-2.5 font-semibold">Order</th>
                <th className="px-5 py-2.5 font-semibold">Total</th>
                <th className="px-5 py-2.5 font-semibold">Metode</th>
                <th className="px-5 py-2.5 font-semibold">Status</th>
                <th className="px-5 py-2.5 font-semibold">Tanggal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.no}>
                  <td className="px-5 py-3.5 font-mono text-xs text-slate-600">{r.no}</td>
                  <td className="px-5 py-3.5 font-mono text-xs text-slate-600">{r.order}</td>
                  <td className="px-5 py-3.5 font-medium text-slate-700">{r.total}</td>
                  <td className="px-5 py-3.5 text-slate-500">{r.metode}</td>
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
