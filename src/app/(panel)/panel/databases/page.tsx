import { Btn, Card, CardHeader, EmptyState, PageHeader, PanelTopbar } from "@/components/ui";
import { Database, Plus } from "lucide-react";

export default function Page() {
  return (
    <>
      <PanelTopbar crumb="Database MySQL" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <PageHeader
          title="Database MySQL"
          desc="Buat database, user MySQL & atur privileges (MariaDB berjalan di Docker)."
          right={<Btn><Plus className="h-4 w-4" /> Buat Database</Btn>}
        />
        <Card>
          <CardHeader title="Daftar Database" desc="Prefix otomatis mengikuti akun: kd_369522_..." />
          <EmptyState
            icon={Database}
            title="Belum ada database"
            desc="Database yang kamu buat akan muncul di sini, siap dipakai WordPress atau aplikasi lain."
          />
        </Card>
      </div>
    </>
  );
}
