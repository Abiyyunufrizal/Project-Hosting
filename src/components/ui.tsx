import Link from "next/link";
import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-xl border border-slate-200 bg-white shadow-sm", className)}>{children}</div>;
}

export function CardHeader({ title, desc, right }: { title: string; desc?: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4">
      <div>
        <h3 className="font-semibold text-slate-800">{title}</h3>
        {desc && <p className="mt-0.5 text-sm text-slate-500">{desc}</p>}
      </div>
      {right}
    </div>
  );
}

export function PageHeader({ title, desc, right }: { title: string; desc?: string; right?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
        {desc && <p className="mt-1 max-w-2xl text-sm text-slate-500">{desc}</p>}
      </div>
      {right}
    </div>
  );
}

const badgeVariants: Record<string, string> = {
  aktif: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  lunas: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  live: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
  provisioning: "bg-blue-50 text-blue-700 ring-blue-600/20",
  expired: "bg-red-50 text-red-700 ring-red-600/20",
};

export function Badge({ status }: { status: string }) {
  const cls = badgeVariants[status.toLowerCase()] ?? "bg-slate-100 text-slate-600 ring-slate-500/20";
  return (
    <span className={cn("inline-flex rounded-md px-2 py-0.5 text-xs font-medium ring-1", cls)}>
      {status}
    </span>
  );
}

export function Btn({
  children,
  variant = "primary",
  href,
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  className?: string;
}) {
  const cls = cn(
    "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition",
    variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
    variant === "outline" && "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
    variant === "ghost" && "text-slate-600 hover:bg-slate-100",
    className
  );
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls}>{children}</button>;
}

export function EmptyState({
  icon: Icon,
  title,
  desc,
  action,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
      <Icon className="h-10 w-10 text-slate-300" />
      <p className="mt-3 font-semibold text-slate-700">{title}</p>
      {desc && <p className="mt-1 max-w-sm text-sm text-slate-400">{desc}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function PanelTopbar({ crumb, domain = "mygram.my.id" }: { crumb: string; domain?: string }) {
  return (
    <div className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
      <p className="text-sm text-slate-500">
        <span className="font-semibold text-slate-700">CodeByte Panel</span> / {crumb}
      </p>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {domain}
      </span>
    </div>
  );
}
