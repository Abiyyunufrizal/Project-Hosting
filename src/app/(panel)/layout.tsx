import { AppShell } from "@/components/layout/app-shell";
import { panelMenu } from "@/lib/menu";
import { LogOut } from "lucide-react";

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      dark
      brand="CodeByte Panel"
      brandSub="by kodebit cloudapps"
      menu={panelMenu}
      footer={
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/20">
          <LogOut className="h-4 w-4" /> Keluar Panel
        </button>
      }
    >
      <div className="min-h-screen bg-slate-100">{children}</div>
    </AppShell>
  );
}
