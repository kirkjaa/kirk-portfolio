import { Header } from "@/components/layout/Header";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="pt-6 pb-20">{children}</main>
    </div>
  );
}
