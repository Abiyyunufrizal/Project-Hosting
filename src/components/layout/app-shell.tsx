"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type MenuItem = { href: string; label: string; icon?: React.ReactNode; group?: string };

export function AppShell({
  brand,
  brandSub,
  menu,
  children,
  footer,
  dark,
}: {
  brand: string;
  brandSub?: string;
  menu: MenuItem[];
  children: React.ReactNode;
  footer?: React.ReactNode;
  dark?: boolean;
}) {
  const pathname = usePathname();

  // kelompokkan menu berdasarkan group
  const groups: { name: string; items: MenuItem[] }[] = [];
  for (const item of menu) {
    const name = item.group ?? "";
    const g = groups.find((x) => x.name === name);
    if (g) g.items.push(item);
    else groups.push({ name, items: [item] });
  }

  return (
    <div className="flex min-h-screen">
      <aside
        className={cn(
          "flex w-60 shrink-0 flex-col",
          dark ? "bg-slate-900 text-slate-200" : "border-r border-slate-200 bg-white text-slate-700"
        )}
      >
        <div className="px-5 py-5">
          <p className={cn("text-lg font-bold", dark ? "text-white" : "text-slate-900")}>{brand}</p>
          {brandSub && (
            <p className={cn("text-[10px] font-semibold uppercase tracking-wider", dark ? "text-slate-400" : "text-slate-400")}>
              {brandSub}
            </p>
          )}
        </div>
        <nav className="flex-1 space-y-4 overflow-y-auto px-3 pb-4">
          {groups.map((g) => (
            <div key={g.name}>
              {g.name && (
                <p className={cn("mb-1 px-2 text-[10px] font-bold uppercase tracking-wider", dark ? "text-slate-500" : "text-slate-400")}>
                  {g.name}
                </p>
              )}
              <div className="space-y-0.5">
                {g.items.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/" && item.href !== "/client" && item.href !== "/panel" && item.href !== "/admin" &&
                      pathname.startsWith(item.href + "/")) ||
                    pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium",
                        active
                          ? dark ? "bg-slate-800 text-white" : "bg-blue-50 text-blue-700"
                          : dark ? "text-slate-300 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        {footer && (
          <div className={cn("border-t px-4 py-3", dark ? "border-slate-800" : "border-slate-100")}>{footer}</div>
        )}
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
