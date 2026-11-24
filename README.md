# 🎨 KodeBit Frontend — Starter (Next.js 15 + TypeScript + Tailwind v4)

Persiapan folder frontend untuk sistem hosting **KodeBit CloudApps**:
Storefront (toko) → Client Area (billing) → CodeByte Panel (panel teknis per akun) + Admin.

> ✅ 100% jalan native di **Windows** — tidak butuh WSL. Cukup Node.js + npm.

## 🖥️ Persiapan di Windows

1. Install Node.js LTS (PowerShell):
   ```powershell
   winget install OpenJS.NodeJS.LTS
   ```
   (atau download manual di https://nodejs.org)
2. Install VS Code (opsional):
   ```powershell
   winget install Microsoft.VisualStudioCode
   ```
3. Cek instalasi: `node -v` → harus v18.18+ (disarankan v20/v22 LTS).
4. Buka PowerShell di folder `frontend` ini, lalu:
   ```powershell
   npm install
   npm run dev
   ```
5. Buka http://localhost:3000

## 🗂️ Struktur Folder

```
frontend/
├── package.json              # dependensi & script (dev/build/start)
├── next.config.ts            # konfigurasi Next.js
├── tsconfig.json             # TypeScript (alias @/ → src/)
├── postcss.config.mjs        # Tailwind CSS v4
├── .env.example              # contoh environment (copy ke .env.local)
└── src/
    ├── app/
    │   ├── layout.tsx        # root layout (html, metadata)
    │   ├── globals.css       # Tailwind
    │   ├── (storefront)/     # 🛒 TOKO — publik, tanpa login
    │   │   ├── page.tsx              # beranda + harga paket
    │   │   └── checkout/
    │   │       ├── page.tsx          # stepper: domain → bayar (Duitku)
    │   │       └── success/page.tsx  # "Hosting Aktif!" + kredensial otomatis
    │   ├── (auth)/           # 🔐 LOGIN (client & admin, 1 pintu)
    │   │   ├── login/page.tsx
    │   │   └── register/page.tsx
    │   ├── (client)/         # 👤 CLIENT AREA (role: client)
    │   │   ├── layout.tsx            # sidebar client area
    │   │   └── client/
    │   │       ├── page.tsx          # dashboard client
    │   │       ├── hosting/page.tsx  # daftar layanan hosting
    │   │       ├── vps/page.tsx      # daftar VPS RDP
    │   │       ├── orders/page.tsx   # pesanan
    │   │       └── invoices/page.tsx # tagihan
    │   ├── (panel)/          # ⚙️ CODEBYTE PANEL (SSO per akun hosting)
    │   │   ├── layout.tsx            # sidebar gelap
    │   │   └── panel/
    │   │       ├── page.tsx          # ringkasan akun & server
    │   │       ├── files/  ftp/  databases/  phpmyadmin/
    │   │       └── domains/  php/  nodejs/  golang/  logs/
    │   └── (admin)/          # 👑 ADMIN (role: admin)
    │       ├── layout.tsx
    │       └── admin/
    │           ├── page.tsx          # statistik bisnis
    │           ├── users/            # kelola client (suspend/approve)
    │           ├── orders/           # approve & provision manual
    │           ├── products/         # kelola paket & harga
    │           └── logs/             # provisioning log + audit log
    ├── components/
    │   ├── ui.tsx            # Card, Badge, Btn, EmptyState, PanelTopbar
    │   ├── layout/app-shell.tsx   # sidebar shell (dipakai 3 area)
    │   └── shared/           # UsageCard (ring CPU/RAM), Stepper checkout
    ├── lib/
    │   ├── api.ts            # apiFetch() ke backend Go — base URL dari env
    │   ├── menu.tsx          # menu sidebar tiap area
    │   └── utils.ts          # cn(), formatRupiah(), formatTanggal()
    └── types/index.ts        # tipe User, Product, Order, Service, Log
```

## 🗺️ Peta Halaman yang Sudah Ada

| URL | Area | Sesuai Screenshot |
|---|---|---|
| `/` | Storefront | Beranda + harga paket |
| `/checkout` | Storefront | Stepper: domain → pembayaran Duitku |
| `/checkout/success` | Storefront | "Pembayaran Berhasil & Hosting Aktif!" + kredensial `kd_XXXXXX` |
| `/login`, `/register` | Auth | Login client & admin |
| `/client` | Client Area | Dashboard client |
| `/client/hosting` | Client Area | Tabel layanan shared hosting |
| `/client/vps` | Client Area | Tabel VPS RDP |
| `/client/orders`, `/client/invoices` | Client Area | Pesanan & tagihan |
| `/panel` | CodeByte Panel | Ringkasan akun & server (usage cards + alat cepat) |
| `/panel/files` ... `/panel/logs` | CodeByte Panel | File manager, FTP, DB, phpMyAdmin, domain/SSL, PHP, Node.js, Golang, logs |
| `/admin` ... `/admin/logs` | Admin | Kelola client, order, produk, provisioning log |

Semua data sekarang **demo/hardcoded** — tinggal diganti dengan fetch API backend Go.

## 🔌 Sambungan ke Backend Go (nanti)

1. Copy env: `cp .env.example .env.local` (Windows: `copy .env.example .env.local`)
2. Backend Go jalan di `http://localhost:8080` → set `NEXT_PUBLIC_API_URL=http://localhost:8080/api`
3. Semua request lewat `src/lib/api.ts` → `apiFetch("/orders")` dsb.

## 📌 Langkah Berikutnya

1. **shadcn/ui**: `npx shadcn@latest init` lalu tambah komponen (`npx shadcn@latest add button table dialog`)
   — komponen sederhana di `src/components/ui.tsx` tinggal diganti.
2. **Backend Go (Fiber)**: endpoint awal yang dibutuhkan frontend ini:
   `POST /api/auth/login`, `GET /api/me`, `GET /api/orders`, `GET /api/services`,
   `POST /api/orders/:id/approve`, `POST /api/webhooks/duitku`.
3. **Auth guard**: middleware Next.js middleware.ts — cek JWT, redirect client → /client, admin → /admin.
4. **SSO ke panel**: Client Area minta token sekali pakai ke backend → redirect `/panel?sst=...` → panel tukar jadi session.
5. **Realtime**: WebSocket untuk log provisioning live, monitoring usage, terminal web.

## 🧭 Konvensi

- Route group `(storefront)` `(client)` `(panel)` `(admin)` `(auth)` — URL final tanpa kurung.
- Menu sidebar: edit `src/lib/menu.tsx`.
- Warna status: `Badge` di `ui.tsx` (aktif/lunas/pending/expired).
- Tipe data API: `src/types/index.ts` — backend Go harus match bentuk ini.
