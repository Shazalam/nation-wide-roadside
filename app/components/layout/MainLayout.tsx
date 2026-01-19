// components/layout/MainLayout.tsx
import { ReactNode } from "react";
import { Navbar } from "../common/Navbar";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-mutedBg">
      <Navbar />
      <main className="flex-1 bg-white">{children}</main>
      {/* Footer component later */}
    </div>
  );
}
