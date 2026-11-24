import { Btn, Card, PageHeader, PanelTopbar } from "@/components/ui";
import { Database, ExternalLink } from "lucide-react";

export default function Page() {
  return (
    <>
      <PanelTopbar crumb="phpMyAdmin" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <PageHeader
          title="phpMyAdmin"
          desc="Login otomatis terisolasi untuk akun @kd_369522 — tidak bisa melihat database user lain."
        />
        <Card className="flex flex-col items-center gap-4 p-10 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
            <Database className="h-7 w-7 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">phpMyAdmin untuk mygram.my.id</h3>
            <p className="text-sm text-slate-500">Akan dibuka di tab baru dengan SSO dari panel.</p>
          </div>
          <Btn>Buka phpMyAdmin <ExternalLink className="h-4 w-4" /></Btn>
        </Card>
      </div>
    </>
  );
}
