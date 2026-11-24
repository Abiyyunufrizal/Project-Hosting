import { Btn, Card, CardHeader, PageHeader, PanelTopbar } from "@/components/ui";
import { FileText, Folder, FolderPlus, Upload } from "lucide-react";

const items = [
  { name: "public_html", dir: true, size: "—", mod: "24 Nov 2026 14:30" },
  { name: "logs", dir: true, size: "—", mod: "24 Nov 2026 10:02" },
  { name: "index.php", dir: false, size: "1.2 KB", mod: "24 Nov 2026 14:31" },
  { name: "wp-config.php", dir: false, size: "3.4 KB", mod: "20 Nov 2026 09:12" },
];

export default function Page() {
  return (
    <>
      <PanelTopbar crumb="File Manager" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <PageHeader
          title="File Manager"
          desc="/users/kd_369522 — kelola file via API backend Go (list, edit, upload, unzip)."
          right={
            <>
              <Btn variant="outline"><FolderPlus className="h-4 w-4" /> Folder Baru</Btn>
              <Btn><Upload className="h-4 w-4" /> Upload</Btn>
            </>
          }
        />
        <Card>
          <CardHeader title="/" desc="2 folder · 2 file" />
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-5 py-2.5 font-semibold">Nama</th>
                <th className="px-5 py-2.5 font-semibold">Ukuran</th>
                <th className="px-5 py-2.5 font-semibold">Terakhir Diubah</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((f) => (
                <tr key={f.name} className="hover:bg-slate-50">
                  <td className="px-5 py-3">
                    <span className="flex items-center gap-2.5">
                      {f.dir ? <Folder className="h-4 w-4 text-blue-500" /> : <FileText className="h-4 w-4 text-slate-400" />}
                      <span className={f.dir ? "font-medium text-slate-800" : "font-mono text-slate-700"}>{f.name}</span>
                    </span>
                  </td>
                  <td className="px-5 py-3 text-slate-500">{f.size}</td>
                  <td className="px-5 py-3 text-slate-500">{f.mod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
