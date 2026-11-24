import {
  LayoutDashboard, Folder, KeyRound, Database, Globe, Settings, FileText,
  Users, Package, ShoppingCart, CreditCard, Terminal, Plus, Hexagon, Zap,
  ShieldCheck, ExternalLink, Server,
} from "lucide-react";
import type { MenuItem } from "@/components/layout/app-shell";

const ic = "h-4 w-4";

export const clientMenu: MenuItem[] = [
  { href: "/client", label: "Dashboard", icon: <LayoutDashboard className={ic} /> },
  { group: "LAYANAN", href: "/client/hosting", label: "Shared Hosting", icon: <Globe className={ic} /> },
  { group: "LAYANAN", href: "/client/vps", label: "VPS RDP Windows", icon: <Server className={ic} /> },
  { href: "/checkout", label: "+ Pesan Layanan Baru", icon: <Plus className={ic} /> },
  { group: "TRANSAKSI", href: "/client/orders", label: "Pesanan Saya", icon: <ShoppingCart className={ic} /> },
  { group: "TRANSAKSI", href: "/client/invoices", label: "Tagihan", icon: <CreditCard className={ic} /> },
];

export const panelMenu: MenuItem[] = [
  { group: "UTAMA", href: "/panel", label: "Dashboard", icon: <LayoutDashboard className={ic} /> },
  { group: "FILE & TRANSFER", href: "/panel/files", label: "File Manager", icon: <Folder className={ic} /> },
  { group: "FILE & TRANSFER", href: "/panel/ftp", label: "Akses FTP", icon: <KeyRound className={ic} /> },
  { group: "DATABASE", href: "/panel/databases", label: "Database MySQL", icon: <Database className={ic} /> },
  { group: "DATABASE", href: "/panel/phpmyadmin", label: "phpMyAdmin", icon: <ExternalLink className={ic} /> },
  { group: "DOMAIN & RUNTIME", href: "/panel/domains", label: "Domain & SSL", icon: <ShieldCheck className={ic} /> },
  { group: "DOMAIN & RUNTIME", href: "/panel/php", label: "Konfigurasi PHP", icon: <Settings className={ic} /> },
  { group: "DOMAIN & RUNTIME", href: "/panel/nodejs", label: "Node.js", icon: <Hexagon className={ic} /> },
  { group: "DOMAIN & RUNTIME", href: "/panel/golang", label: "Golang", icon: <Zap className={ic} /> },
  { group: "DOMAIN & RUNTIME", href: "/panel/logs", label: "Access & Error Logs", icon: <FileText className={ic} /> },
];

export const adminMenu: MenuItem[] = [
  { group: "ADMIN", href: "/admin", label: "Dashboard", icon: <LayoutDashboard className={ic} /> },
  { group: "ADMIN", href: "/admin/users", label: "Kelola Client", icon: <Users className={ic} /> },
  { group: "ADMIN", href: "/admin/orders", label: "Pesanan", icon: <ShoppingCart className={ic} /> },
  { group: "ADMIN", href: "/admin/products", label: "Produk & Paket", icon: <Package className={ic} /> },
  { group: "ADMIN", href: "/admin/logs", label: "Log Provisioning", icon: <Terminal className={ic} /> },
];
