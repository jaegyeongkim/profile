"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 right-6 z-50 flex items-center gap-1 bg-white border border-[var(--border)] rounded-full px-1.5 py-1.5 shadow-sm">
      <Link
        className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-150 ${
          pathname === "/"
            ? "bg-[var(--foreground)] text-white"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        href="/"
      >
        이력서
      </Link>
      <Link
        className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-150 ${
          pathname === "/portfolio"
            ? "bg-[var(--foreground)] text-white"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        href="/portfolio"
      >
        포트폴리오
      </Link>
    </nav>
  );
};

export default Nav;
