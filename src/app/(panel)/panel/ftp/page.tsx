import { Badge, Btn, Card, CardHeader, PageHeader, PanelTopbar } from "@/components/ui";
import { Plus } from "lucide-react";

const info = [
  ["FTP Host", "ftp.mygram.my.id"],
  ["Port", "21 (FTPES / TLS)"],
  ["Username", "kd_369522"],
  ["Direktori", "/users/kd_369522"],
];

export default function Page() {
  return (
    <>
      <PanelTopbar crumb="Akses FTP" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <PageHeader
          title="Akses FTP"
          desc="Kredensial FTP untuk upload file (server PureFTPd)."
          right={<Btn><Plus className="h-4 w-4" /> Buat Akun FTP</Btn>}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader title="Info Koneksi" />
            <dl className="divide-y divide-slate-100">
              {info.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-5 py-3 text-sm">
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="font-medium text-slate-800">{v}</dd>
                </div>
              ))}
            </dl>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader title="Akun FTP" desc="Virtual user PureFTPd dibuat otomatis saat provisioning." />
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-5 py-2.5 font-semibold">Username</th>
                  <th className="px-5 py-2.5 font-semibold">Direktori</th>
                  <th className="px-5 py-2.5 font-semibold">Kuota</th>
                  <th className="px-5 py-2.5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-3 font-mono text-slate-700">kd_369522</td>
                  <td className="px-5 py-3 font-mono text-xs text-slate-500">/users/kd_369522</td>
                  <td className="px-5 py-3 text-slate-600">5 GB</td>
                  <td className="px-5 py-3"><Badge status="Aktif" /></td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
}
