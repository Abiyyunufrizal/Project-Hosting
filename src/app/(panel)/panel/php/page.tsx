import { Btn, Card, CardHeader, PageHeader, PanelTopbar } from "@/components/ui";

const settings = [
  ["upload_max_filesize", "32M"],
  ["memory_limit", "256M"],
  ["max_execution_time", "60"],
  ["opcache.enable", "On"],
];

export default function Page() {
  return (
    <>
      <PanelTopbar crumb="Konfigurasi PHP" />
      <div className="mx-auto max-w-3xl px-6 py-8">
        <PageHeader title="Konfigurasi PHP" desc="Versi PHP & limit untuk akun @kd_369522." />
        <Card>
          <CardHeader title="Pengaturan" desc="Perubahan akan me-restart vhost OpenLiteSpeed." />
          <div className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">Versi PHP</span>
              <select defaultValue="8.3" className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
                <option>8.1</option>
                <option>8.2</option>
                <option>8.3</option>
              </select>
            </div>
            <dl className="divide-y divide-slate-100 rounded-lg border border-slate-200">
              {settings.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-4 py-2.5 text-sm">
                  <dt className="font-mono text-slate-600">{k}</dt>
                  <dd className="font-medium text-slate-800">{v}</dd>
                </div>
              ))}
            </dl>
            <Btn>Simpan Konfigurasi</Btn>
          </div>
        </Card>
      </div>
    </>
  );
}
