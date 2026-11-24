import { Btn, Card } from "@/components/ui";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-sm p-8">
        <div className="mb-6 text-center">
          <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">kb</span>
          <h1 className="mt-3 text-xl font-bold text-slate-900">Daftar Akun</h1>
          <p className="mt-1 text-sm text-slate-500">Satu akun untuk semua layanan: hosting & VPS.</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-600">Nama Lengkap</label>
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600">Password</label>
            <input type="password" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </div>
          <Btn href="/login" className="w-full justify-center">Daftar</Btn>
        </form>
        <p className="mt-4 text-center text-xs text-slate-400">
          Sudah punya akun? <Link href="/login" className="font-medium text-blue-600">Masuk</Link>
        </p>
      </Card>
    </div>
  );
}
