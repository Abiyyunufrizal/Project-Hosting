import { Btn, Card, CardHeader, EmptyState, PageHeader } from "@/components/ui";
import { Monitor, Plus } from "lucide-react";

export default function Page() {
  return (
    <>
      <PageHeader
        title="VPS RDP Windows"
        desc="Kelola VPS Windows kamu: status, restart, dan kredensial RDP."
        right={<Btn href="/checkout"><Plus className="h-4 w-4" /> Pesan VPS</Btn>}
      />
      <Card>
        <CardHeader title="Daftar VPS" desc="Total 0 item ditemukan" />
        <EmptyState
          icon={Monitor}
          title="Belum ada layanan VPS RDP"
          desc="VPS Windows yang kamu pesan akan muncul di sini lengkap dengan IP & kredensial RDP."
        />
      </Card>
    </>
  );
}
