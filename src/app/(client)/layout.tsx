import { AppShell } from "@/components/layout/app-shell";
import { clientMenu } from "@/lib/menu";
import { LogOut } from "lucide-react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      brand="kodebit cloudapps"
      brandSub="CLIENT AREA"
      menu={clientMenu}
      footer={
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-sm font-semibold text-slate-800">Fauzan Nur Hafidz</p>
          <p className="truncate text-xs text-slate-400">koho.zettero@gmail.com</p>
          <button className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-red-600">
            <LogOut className="h-3.5 w-3.5" /> Keluar
          </button>
        </div>
      }
    >
      <div className="mx-auto max-w-6xl px-6 py-8">{children}</div>
    </AppShell>
  );
}
