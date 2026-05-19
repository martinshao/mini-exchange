import { AppHeader } from "@/src/app-shell/AppHeader";

export default function ExchangeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0b0e11] text-slate-100">
      <AppHeader />

      <main>{children}</main>
    </div>
  );
}
