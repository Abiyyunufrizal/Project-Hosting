import { Stepper } from "@/components/shared/stepper";
import { Btn, Card } from "@/components/ui";
import { CheckCircle2, Copy, Eye } from "lucide-react";

const rows = [
  ["Paket Hosting", "Large (1 Bulan)"],
  ["Domain", "mygram.my.id"],
  ["Metode Pembayaran", "MANDIRI VA H2H"],
  ["Total Dibayar", "Rp 55.000"],
];

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Stepper steps={["Pilih Domain", "Pembayaran", "Selesai"]} current={3} />
      <Card className="mt-8 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Pembayaran Berhasil & Hosting Aktif!</h1>
        <p className="mt-1 text-sm text-slate-500">
          Pesanan ORD-20261124-3D7880 telah lunas. Akun Shared Hosting Anda otomatis dibuat dan siap digunakan.
        </p>

        <dl className="mx-auto mt-6 max-w-md divide-y divide-slate-100 text-left">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between px-1 py-2.5 text-sm">
              <dt className="text-slate-500">{k}</dt>
              <dd className="font-medium text-slate-800">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-6 max-w-md rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-left">
          <p className="text-sm font-bold text-emerald-800">Akun Panel Hosting Anda (Otomatis Dibuat)</p>
          <div className="mt-3 space-y-2.5 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-emerald-700">Username Hosting</span>
              <span className="flex items-center gap-2 font-mono font-semibold text-emerald-900">
                kd_369522 <button className="text-xs text-emerald-600 hover:underline">Salin</button>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-emerald-700">Password Panel</span>
              <span className="flex items-center gap-2 font-mono font-semibold text-emerald-900">
                •••••••••• <Eye className="h-3.5 w-3.5" /> <Copy className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
          <p className="mt-4 text-xs text-emerald-700">
            Arahkan nameserver domain <b>mygram.my.id</b> ke:
          </p>
          <p className="mt-1 font-mono text-xs text-emerald-900">noor.ns.cloudflare.com · stanley.ns.cloudflare.com</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn variant="outline" href="/client">Dashboard Client Area</Btn>
          <Btn href="/client">Masuk ke Client Area</Btn>
        </div>
      </Card>
    </div>
  );
}
