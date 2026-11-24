// Tipe data API — disusun mengikuti skema DB yang kita desain.
// Backend Go nanti harus mengembalikan bentuk yang sama.

export type Role = "admin" | "client";

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  status: "active" | "suspended";
  createdAt: string;
}

export interface Product {
  id: number;
  type: "shared_hosting" | "vps_rdp";
  name: string; // "Bronze", "Silver", "Large", "VPS Medium"...
  specs: { vcore?: number; ramMb?: number; diskMb?: number; bwGb?: number };
  priceMonthly: number;
  isActive: boolean;
}

export interface Order {
  id: number;
  orderNo: string; // "ORD-20261124-3D7880"
  userId: number;
  productId: number;
  domain: string;
  periodMonths: number;
  status:
    | "pending"
    | "paid"
    | "provisioning"
    | "active"
    | "expired"
    | "cancelled";
  expiresAt?: string;
  createdAt: string;
}

export interface Service {
  id: number;
  orderId: number;
  userId: number;
  type: Product["type"];
  panelUsername: string; // "kd_369522"
  domain: string;
  docroot: string; // "/users/kd_369522/public_html"
  status: "active" | "suspended" | "expired";
  expiresAt: string;
}

export interface ProvisioningLog {
  id: number;
  serviceId: number;
  step: string;
  status: "ok" | "failed" | "running";
  message: string;
  createdAt: string;
}

export interface AuditLog {
  id: number;
  actorId: number;
  action: string;
  target: string;
  ip: string;
  createdAt: string;
}
