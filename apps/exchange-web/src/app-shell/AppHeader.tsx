import Link from "next/link";
import { APP_NAME } from "@mini-exchange/config";
import { UserMenu } from "@mini-exchange/domain-account";
import { mainNavItems } from "./navigation";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0b0e11]/95 text-slate-100 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-6">
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-sm font-black text-black">
                MX
              </span>
              <span className="hidden text-sm font-semibold text-slate-100 sm:inline">
                {APP_NAME}
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-yellow-300"
                  title={item.description}
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-yellow-300"
              >
                More
              </button>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/wallet"
              className="hidden rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white md:inline-flex"
            >
              Deposit
            </Link>

            <Link
              href="/spot/trade/BTCUSDT"
              className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
            >
              Trade Now
            </Link>

            <div className="hidden md:block">
              <UserMenu />
            </div>
          </div>
        </div>

        <nav className="flex gap-1 overflow-x-auto border-t border-slate-800/70 py-2 lg:hidden">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-yellow-300"
              title={item.description}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
