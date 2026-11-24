import { Badge, Card, CardHeader, PageHeader } from "@/components/ui";
import { CheckCircle2 } from "lucide-react";

const steps = [
  ["step-1", "mkdir /users/kd_369522 + permission", "ok"],
  ["step-2", "CREATE DATABASE kd_369522_main (MariaDB)", "ok"],
  ["step-3", "pure-pw useradd kd_369522 (PureFTPd)", "ok"],
  ["step-4", "render vhost OpenLiteSpeed + restart", "ok"],
  ["step-5", "PowerDNS API: buat zone mygram.my.id", "ok"],
  ["step-6", "Cloudflare API: A record → IP publik NAT", "ok"],
  ["step-7", "acme.sh DNS-01: issue wildcard SSL", "ok"],
];

const audit = [
  ["admin@kodebit", "approve ORD-20261124-3D7880", "24 Nov 2026 14:28"],
  ["kd_369522", "login CodeByte Panel (SSO)", "24 Nov 2026 14:31"],
  ["admin@kodebit", "suspend user #23 (rina@mail.com)", "24 Nov 2026 13:02"],
];

export default function Page() {
  return (
    <>
      <PageHeader
        title="Log Provisioning & Audit"
        desc="Log teknis provisioning (live via WebSocket nanti) & audit trail keamanan."
        right={<Badge status="LIVE" />}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Provisioning Log — ORD-20261124-3D7880" desc="Alur worker Go saat aktivasi hosting." />
          <ul className="divide-y divide-slate-100">
            {steps.map(([step, msg]) => (
              <li key={step} className="flex items-center gap-3 px-5 py-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-500">{step}</span>
                <span className="font-mono text-xs text-slate-600">{msg}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardHeader title="Audit Log" desc="Siapa melakukan apa — append-only." />
          <ul className="divide-y divide-slate-100">
            {audit.map(([actor, action, time]) => (
              <li key={action} className="px-5 py-3 text-sm">
                <p className="text-slate-700"><span className="font-semibold">{actor}</span> — {action}</p>
                <p className="text-xs text-slate-400">{time}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
