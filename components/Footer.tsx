import Link from "next/link";

const columns = [
  {
    title: "Collection",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Kıpçak Origins", href: "/products" },
      { label: "Göktürk Legacy", href: "/products" },
      { label: "Hun Dynasty", href: "/products" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping", href: "/about" },
      { label: "Returns", href: "/about" },
      { label: "Contact", href: "/about" },
      { label: "Size Guide", href: "/about" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "/about" },
      { label: "Pinterest", href: "/about" },
      { label: "Journal", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-iron/60 bg-dark">
      <div className="mx-auto max-w-editorial px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl tracking-widest text-linen">BÖRİ</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-linen/50">
              Ancient symbols. Modern legacy.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="eyebrow">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-linen/60 transition-colors hover:text-bronze"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-iron/60 pt-6 text-xs text-linen/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Böri. All rights reserved.</p>
          <p>Rooted in the steppe. Worn by the future.</p>
        </div>
      </div>
    </footer>
  );
}
