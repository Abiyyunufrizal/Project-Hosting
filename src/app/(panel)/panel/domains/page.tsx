import { Badge, Btn, Card, CardHeader, PageHeader, PanelTopbar } from "@/components/ui";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <>
      <PanelTopbar crumb="Domain & SSL" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <PageHeader
          title="Domain & SSL"
          desc="Kelola domain, nameserver & sertifikat SSL (Let's Encrypt via DNS-01)."
          right={<Btn><Plus className="h-4 w-4" /> Tambah Domain</Btn>}
        />
        <Card>
          <CardHeader title="Domain Terpasang" desc="DNS publik: Cloudflare · DNS internal: PowerDNS" />
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-5 py-2.5 font-semibold">Domain</th>
                <th className="px-5 py-2.5 font-semibold">SSL</th>
                <th className="px-5 py-2.5 font-semibold">Kadaluarsa SSL</th>
                <th className="px-5 py-2.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-5 py-3.5 font-medium text-slate-800">mygram.my.id</td>
                <td className="px-5 py-3.5 text-slate-600">Let's Encrypt — Wildcard (DNS-01)</td>
                <td className="px-5 py-3.5 text-slate-600">24 Feb 2027</td>
                <td className="px-5 py-3.5"><Badge status="Aktif" /></td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
