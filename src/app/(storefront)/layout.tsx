import Link from "next/link";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">kb</span>
            <span className="font-bold text-slate-900">
              kodebit <span className="font-normal text-slate-500">cloudapps</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link href="/" className="hover:text-blue-600">Beranda</Link>
            <Link href="/#shared-hosting" className="hover:text-blue-600">Shared Hosting</Link>
            <Link href="/#vps" className="hover:text-blue-600">VPS RDP</Link>
          </nav>
          <Link href="/client" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Client Area
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-400">
        © 2026 KodeBit CloudApps — Shared Hosting & VPS RDP
      </footer>
    </div>
  );
}
