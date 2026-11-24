import { Badge, Btn, Card, PageHeader } from "@/components/ui";
import { Globe, Monitor, Plus } from "lucide-react";
import { formatRupiah } from "@/lib/utils";

const products = [
  { icon: Globe, type: "Shared Hosting", name: "Bronze", price: 25000, specs: "1 GB Disk · 512 MB RAM · 1 Website", active: true },
  { icon: Globe, type: "Shared Hosting", name: "Silver", price: 40000, specs: "2 GB Disk · 1 GB RAM · 3 Website", active: true },
  { icon: Globe, type: "Shared Hosting", name: "Large", price: 55000, specs: "5 GB Disk · 2 GB RAM · 2 vCore · Runtime Node/Go", active: true },
  { icon: Monitor, type: "VPS RDP Windows", name: "Medium", price: 150000, specs: "2 vCore · 4 GB RAM · 80 GB NVMe", active: false },
];

export default function Page() {
  return (
    <>
      <PageHeader
        title="Produk & Paket"
        desc="Atur paket hosting & VPS yang dijual di storefront."
        right={<Btn><Plus className="h-4 w-4" /> Produk Baru</Btn>}
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((p) => (
          <Card key={p.name} className="p-5">
            <div className="flex items-center justify-between">
              <p.icon className="h-5 w-5 text-blue-600" />
              <Badge status={p.active ? "Aktif" : "Nonaktif"} />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">{p.type}</p>
            <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
            <p className="mt-1 text-xl font-extrabold text-blue-600">
              {formatRupiah(p.price)}<span className="text-xs font-medium text-slate-400"> /bln</span>
            </p>
            <p className="mt-2 text-xs text-slate-500">{p.specs}</p>
            <Btn variant="outline" className="mt-4 w-full justify-center">Edit Paket</Btn>
          </Card>
        ))}
      </div>
    </>
  );
}
