export function UsageCard({
  label,
  value,
  sub,
  percent,
}: {
  label: string;
  value: string;
  sub?: string;
  percent: number;
}) {
  const r = 15.9155;
  const c = 2 * Math.PI * r;
  const dash = Math.min(100, Math.max(0, percent)) * (c / 100);
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90 shrink-0">
        <circle cx="18" cy="18" r={r} fill="none" strokeWidth="3.2" className="stroke-slate-200" />
        <circle
          cx="18" cy="18" r={r} fill="none" strokeWidth="3.2" strokeLinecap="round"
          className="stroke-emerald-500"
          strokeDasharray={`${dash} ${c - dash}`}
        />
      </svg>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
        <p className="truncate text-lg font-bold text-slate-800">{value}</p>
        {sub && <p className="truncate text-xs text-slate-400">{sub}</p>}
      </div>
    </div>
  );
}
