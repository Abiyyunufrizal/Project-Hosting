import { Btn, Card, CardHeader, EmptyState, PageHeader, PanelTopbar } from "@/components/ui";
import { Zap } from "lucide-react";

export default function Page() {
  return (
    <>
      <PanelTopbar crumb="Golang Runtime" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <PageHeader
          title="Golang Runtime"
          desc="Kelola aplikasi Go: build, port & log."
          right={<Btn>Deploy Aplikasi Go</Btn>}
        />
        <Card>
          <CardHeader title="Aplikasi Golang" desc="Build & run dikelola oleh backend Go panel." />
          <EmptyState
            icon={Zap}
            title="Belum ada aplikasi Go"
            desc="Upload source, pilih versi Go, tentukan port — panel yang menangani build & prosesnya."
          />
        </Card>
      </div>
    </>
  );
}
