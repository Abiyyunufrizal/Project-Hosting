import { UsageCard } from "@/components/shared/usage-card";
import { Badge, Btn, Card, CardHeader, PageHeader, PanelTopbar } from "@/components/ui";
import {
  Folder, Database, ExternalLink, KeyRound, ShieldCheck, Settings,
  Terminal, Hexagon, Zap, RefreshCw,
} from "lucide-react";
import Link from "next/link";

const tools = [
  { icon: Folder, title: "File Manager", desc: "Kelola direktori /users/kd_369522", href: "/panel/files" },
  { icon: Database, title: "Database MySQL", desc: "Buat database, user MySQL & privileges", href: "/panel/databases" },
  { icon: ExternalLink, title: "phpMyAdmin", desc: "Login otomatis terisolasi @kd_369522", href: "/panel/phpmyadmin" },
  { icon: KeyRound, title: "Login via FTP", desc: "Host, port, dan akun transfer FTP", href: "/panel/ftp" },
  { icon: ShieldCheck, title: "Domain & SSL", desc: "Status HTTPS & info nameserver", href: "/panel/domains" },
  { icon: Settings, title: "Konfigurasi PHP", desc: "Versi PHP, limit memori & ekstensi", href: "/panel/php" },
  { icon: Terminal, title: "Terminal", desc: "Buka shell di /users/kd_369522", href: "/panel/logs" },
  { icon: Hexagon, title: "Node.js Runtime", desc: "Kelola aplikasi, port, log & npm", href: "/panel/nodejs" },
  { icon: Zap, title: "Golang Runtime", desc: "Kelola aplikasi, build, port & log Go", href: "/panel/golang" },
];

const info = [
  ["Username Akun", "kd_369522"],
  ["Domain Utama", "mygram.my.id"],
  ["Paket Hosting", "Large (2 vCore / 2 GB RAM / 5 GB Disk)"],
  ["Direktori Web Root", "/users/kd_369522/public_html"],
  ["Direktori Logs", "/users/kd_369522/logs"],
  ["Web Server", "OpenLiteSpeed (container Docker)"],
  ["OS Server", "Ubuntu Server 24.04 (host Docker)"],
];

export default function Page() {
  return (
    <>
      <PanelTopbar crumb="Dashboard" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <PageHeader
          title="Ringkasan Akun & Server"
          desc="Pantau penggunaan CPU, RAM, Disk, dan Bandwidth secara realtime untuk akun Anda."
          right={
            <>
              <Btn variant="outline"><RefreshCw className="h-4 w-4" /> Segarkan Data</Btn>
              <Btn href="/panel/files">Buka File Manager</Btn>
            </>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <UsageCard label="CPU Usage" value="0.0% / 100%" sub="2 vCore Shared Limit" percent={0} />
          <UsageCard label="Memory (RAM)" value="0 MB / 2 GB" sub="2048 MB Alokasi Paket" percent={0} />
          <UsageCard label="Penggunaan Disk" value="0.4 KB / 5 GB" sub="NVMe SSD Storage" percent={1} />
          <UsageCard label="Bandwidth" value="0 B / 100 GB" sub="Trafik bulanan, reset tgl 1" percent={0} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <CardHeader
              title="Informasi Server & Hosting"
              desc="Detail teknis lingkungan hosting untuk akun @kd_369522."
              right={<Badge status="Aktif" />}
            />
            <dl className="divide-y divide-slate-100">
              {info.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 px-5 py-3 text-sm">
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="text-right font-medium text-slate-800">{v}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader title="Alat Pengelolaan Cepat" desc="Akses langsung fitur utama CodeByte Panel." />
            <div className="grid grid-cols-2 gap-3 p-4">
              {tools.map((t) => (
                <Link
                  key={t.title}
                  href={t.href}
                  className="rounded-lg border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50/50"
                >
                  <t.icon className="h-5 w-5 text-blue-600" />
                  <p className="mt-2 text-sm font-semibold text-slate-800">{t.title}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{t.desc}</p>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
