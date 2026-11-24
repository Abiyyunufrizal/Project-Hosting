"use client";

import { useState } from "react";
import { Stepper } from "@/components/shared/stepper";
import { Btn, Card, CardHeader } from "@/components/ui";
import { formatRupiah } from "@/lib/utils";

const plans = [
  { id: "bronze", name: "Bronze", disk: "1 GB", ram: "512 MB", price: 25000 },
  { id: "silver", name: "Silver", disk: "2 GB", ram: "1 GB", price: 40000 },
  { id: "large", name: "Large", disk: "5 GB · 2 vCore", ram: "2 GB RAM", price: 55000 },
];

export default function Page() {
  const [plan, setPlan] = useState("large");
  const [method, setMethod] = useState("MANDIRI VA H2H");
  const selected = plans.find((p) => p.id === plan)!;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Stepper steps={["Pilih Domain", "Pembayaran", "Selesai"]} current={1} />
      <Card className="mt-8">
        <CardHeader title="Checkout Hosting" desc="Pesanan ORD-20261124-3D7880" />
        <div className="space-y-5 p-5">
          <div>
            <label className="text-sm font-medium text-slate-600">Domain</label>
            <input
              defaultValue="mygram.my.id"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <p className="mt-1 text-xs text-slate-400">Cek ketersediaan domain Anda (integrasi registrar menyusul).</p>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-600">Paket Hosting</p>
            <div className="mt-2 space-y-2">
              {plans.map((p) => (
                <label
                  key={p.id}
                  className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 text-sm ${
                    plan === p.id ? "border-blue-500 bg-blue-50" : "border-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <input type="radio" checked={plan === p.id} onChange={() => setPlan(p.id)} className="accent-blue-600" />
                    <span>
                      <span className="font-medium text-slate-800">{p.name}</span>{" "}
                      <span className="text-slate-400">· {p.disk} · {p.ram}</span>
                    </span>
                  </span>
                  <span className="font-semibold text-slate-700">{formatRupiah(p.price)}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-600">Metode Pembayaran (Duitku)</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["MANDIRI VA H2H", "BCA VA", "QRIS"].map((m) => (
                <button
                  key={m}
                  onClick={() => setMethod(m)}
                  className={`rounded-lg border px-3 py-2 text-xs font-medium ${
                    method === m ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <div>
              <p className="text-sm text-slate-500">Total Dibayar</p>
              <p className="text-xl font-bold text-slate-900">{formatRupiah(selected.price)}</p>
            </div>
            <Btn href="/checkout/success">Bayar Sekarang</Btn>
          </div>
        </div>
      </Card>
      <p className="mt-4 text-center text-xs text-slate-400">
        Demo UI — pembayaran & pembuatan akun otomatis akan terhubung ke webhook backend Go (Duitku → provisioning worker).
      </p>
    </div>
  );
}
