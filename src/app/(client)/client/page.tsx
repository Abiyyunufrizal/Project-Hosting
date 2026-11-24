import { Badge, Btn, Card, CardHeader, PageHeader } from "@/components/ui";
import { Globe, CreditCard, HardDrive, Clock } from "lucide-react";

const stats = [
  { label: "Layanan Aktif", value: "1", icon: Globe, note: "Shared Hosting" },
  { label: "Tagihan Belum Dibayar", value: "0", icon: CreditCard, note: "Semua lunas" },
  { label: "Disk Terpakai", value: "0.4 KB / 5 GB", icon: HardDrive, note: "mygram.my.id" },
  { label: "Layanan Expired", value: "0", icon: Clock, note: "-" },
];

export default function Page() {
  return (
    <>
      <PageHeader title="Dashboard" desc="Ringkasan layanan & tagihan kamu." right={<Btn href="/checkout">+ Pesan Layanan</Btn>} />
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
        <CardHeader title="Layanan Aktif" desc="Layanan hosting yang sedang berjalan." />
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm">
          <div>
            <p className="font-semibold text-slate-800">Large · mygram.my.id</p>
            <p className="text-xs text-slate-400">kd_369522 · kadaluarsa 24 Des 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge status="Aktif" />
            <Btn variant="outline" href="/panel">Masuk Panel</Btn>
          </div>
        </div>
      </Card>
    </>
  );
}
