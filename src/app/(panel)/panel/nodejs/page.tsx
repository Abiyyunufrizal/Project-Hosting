import { Btn, Card, CardHeader, EmptyState, PageHeader, PanelTopbar } from "@/components/ui";
import { Hexagon } from "lucide-react";

export default function Page() {
  return (
    <>
      <PanelTopbar crumb="Node.js Runtime" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <PageHeader
          title="Node.js Runtime"
          desc="Kelola aplikasi Node.js: versi, port, npm install & log."
          right={<Btn>Deploy Aplikasi</Btn>}
        />
        <Card>
          <CardHeader title="Aplikasi Node.js" desc="Aplikasi berjalan terisolasi per akun @kd_369522." />
          <EmptyState
            icon={Hexagon}
            title="Belum ada aplikasi Node.js"
            desc="Deploy app pertamamu: pilih versi Node, tentukan port, dan backend Go yang menjalankan prosesnya."
          />
        </Card>
      </div>
    </>
  );
}
