"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Collection", href: "/products" },
  { label: "Lookbook", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-iron/60 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-editorial items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="font-serif text-2xl tracking-widest text-linen"
          aria-label="Böri — home"
        >
          BÖRİ
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[0.7rem] uppercase tracking-widest text-linen/70 transition-colors hover:text-bronze"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="text-[0.7rem] uppercase tracking-widest text-linen/70 transition-colors hover:text-bronze"
          >
            Cart (0)
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-5 md:hidden">
          <Link
            href="/products"
            className="text-[0.7rem] uppercase tracking-widest text-linen/70"
          >
            Cart (0)
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-6 w-7 flex-col justify-center gap-1.5"
          >
            <span
              className={cn(
                "h-px w-full bg-linen transition-transform",
                open && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-linen transition-transform",
                open && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-iron/60 bg-void px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm uppercase tracking-widest text-linen/80 hover:text-bronze"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
