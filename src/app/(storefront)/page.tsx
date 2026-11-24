import { Btn, Card } from "@/components/ui";
import { Server, CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  { name: "Bronze", price: "Rp 25.000", specs: ["1 GB Disk NVMe", "512 MB RAM", "1 Website", "SSL Gratis"] },
  { name: "Silver", price: "Rp 40.000", specs: ["2 GB Disk NVMe", "1 GB RAM", "3 Website", "SSL Gratis"] },
  {
    name: "Large",
    price: "Rp 55.000",
    best: true,
    specs: ["5 GB Disk NVMe", "2 GB RAM · 2 vCore", "Unlimited Website*", "Node.js & Golang Runtime"],
  },
];

export default function Page() {
  return (
    <>
      <section className="border-b border-slate-100 bg-gradient-to-b from-blue-50/60 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            Shared Hosting & VPS RDP Indonesia
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Hosting cepat dengan panel modern buatan sendiri
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Aktivasi otomatis setelah pembayaran, CodeByte Panel lengkap dengan File Manager, Database, Node.js & Golang runtime.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Btn href="/checkout">Order Sekarang <ArrowRight className="h-4 w-4" /></Btn>
            <Btn variant="outline" href="#shared-hosting">Lihat Paket</Btn>
          </div>
        </div>
      </section>

      <section id="shared-hosting" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-slate-900">Paket Shared Hosting</h2>
        <p className="mt-1 text-center text-sm text-slate-500">Semua paket termasuk SSL gratis, backup mingguan & CodeByte Panel.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className={`p-6 ${p.best ? "ring-2 ring-blue-500" : ""}`}>
              {p.best && <span className="mb-2 inline-flex rounded-md bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">Paling Laris</span>}
              <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-2xl font-extrabold text-blue-600">
                {p.price}<span className="text-sm font-medium text-slate-400"> /bulan</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> {s}</li>
                ))}
              </ul>
              <Btn href="/checkout" className="mt-6 w-full justify-center">Pilih {p.name}</Btn>
            </Card>
          ))}
        </div>
      </section>

      <section id="vps" className="mx-auto max-w-6xl px-4 pb-20">
        <Card className="flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
            <Server className="h-7 w-7 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900">VPS RDP Windows</h3>
            <p className="text-sm text-slate-500">Windows Server untuk automation, trading & development. Mulai Rp 150.000 / bulan.</p>
          </div>
          <Btn href="/checkout">Pesan VPS</Btn>
        </Card>
      </section>
    </>
  );
}
