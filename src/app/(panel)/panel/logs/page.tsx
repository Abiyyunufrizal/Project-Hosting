import { Badge, Card, CardHeader, PageHeader, PanelTopbar } from "@/components/ui";

const lines = [
  '[24/Nov/2026:14:32:11 +0700] "GET / HTTP/1.1" 200 1042 - 103.12.34.5',
  '[24/Nov/2026:14:32:09 +0700] "GET /assets/style.css HTTP/1.1" 304 - 103.12.34.5',
  '[24/Nov/2026:14:31:58 +0700] "POST /wp-login.php HTTP/1.1" 302 - 45.67.89.10',
  '[24/Nov/2026:14:30:02 +0700] "GET /favicon.ico HTTP/1.1" 200 3120 - 103.12.34.5',
  '[24/Nov/2026:14:29:47 +0700] [INFO] vhost [mygram] reload OK (OpenLiteSpeed)',
];

export default function Page() {
  return (
    <>
      <PanelTopbar crumb="Access & Error Logs" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <PageHeader
          title="Access & Error Logs"
          desc="Log akses & error mygram.my.id — nanti live streaming via WebSocket dari backend Go."
        />
        <Card>
          <CardHeader title="access.log" right={<Badge status="LIVE" />} />
          <pre className="overflow-x-auto rounded-b-xl bg-slate-900 p-5 font-mono text-xs leading-6 text-slate-100">{lines.join("\n")}</pre>
        </Card>
      </div>
    </>
  );
}
