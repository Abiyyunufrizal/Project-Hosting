import { Badge, Btn, Card, CardHeader, PageHeader } from "@/components/ui";
import { Users, ShoppingCart, CreditCard, Activity } from "lucide-react";

const stats = [
  { label: "Client Aktif", value: "42", icon: Users, note: "+3 minggu ini" },
  { label: "Pesanan Hari Ini", value: "3", icon: ShoppingCart, note: "2 lunas otomatis" },
  { label: "Pendapatan Bulan Ini", value: "Rp 4.235.000", icon: CreditCard, note: "+12% vs bulan lalu" },
  { label: "Provisioning Sukses", value: "98.2%", icon: Activity, note: "30 hari terakhir" },
];

const recent = [
  { no: "ORD-20261124-3D7880", client: "Fauzan Nur Hafidz", produk: "Hosting Large", status: "Aktif" },
  { no: "ORD-20261124-8B21AF", client: "budi@mail.com", produk: "VPS RDP Medium", status: "Pending" },
  { no: "ORD-20261123-55C0E1", client: "siti@mail.com", produk: "Hosting Silver", status: "Aktif" },
];

export default function Page() {
  return (
    <>
      <PageHeader title="Dashboard Admin" desc="Ringkasan bisnis & operasional hosting." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-4">
            <s.icon className="h-5 w-5 text-blue-600" />
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{s.label}</p>
            <p className="text-lg font-bold text-slate-800">{s.value}</p>
            <p className="text-xs text-slate-400">{s.note}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-6">
        <CardHeader title="Pesanan Terbaru" right={<Btn variant="outline" href="/admin/orders">Lihat Semua</Btn>} />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-5 py-2.5 font-semibold">No. Order</th>
                <th className="px-5 py-2.5 font-semibold">Client</th>
                <th className="px-5 py-2.5 font-semibold">Produk</th>
                <th className="px-5 py-2.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recent.map((r) => (
                <tr key={r.no}>
                  <td className="px-5 py-3 font-mono text-xs text-slate-600">{r.no}</td>
                  <td className="px-5 py-3 text-slate-700">{r.client}</td>
                  <td className="px-5 py-3 text-slate-500">{r.produk}</td>
                  <td className="px-5 py-3"><Badge status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
