import Link from "next/link";

const columns = [
  {
    title: "Koleksiyon",
    links: [
      { label: "Tüm Ürünler", href: "/products" },
      { label: "Kıpçak Kökleri", href: "/products" },
      { label: "Göktürk Mirası", href: "/products" },
      { label: "Hun Çağı", href: "/products" },
    ],
  },
  {
    title: "Destek",
    links: [
      { label: "Kargo", href: "/about" },
      { label: "İade", href: "/about" },
      { label: "İletişim", href: "/about" },
      { label: "Beden Rehberi", href: "/about" },
    ],
  },
  {
    title: "Sosyal",
    links: [
      { label: "Instagram", href: "/about" },
      { label: "Pinterest", href: "/about" },
      { label: "Günce", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-iron/60 bg-dark">
      <div className="mx-auto max-w-editorial px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl tracking-[0.3em] text-linen">
              iZ&nbsp;Studio
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-linen/50">
              Kadim iz, modern duruş.
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
          <p>© {new Date().getFullYear()} iZ Studio. Tüm hakları saklıdır.</p>
          <p>Bozkırdan doğdu, geleceğe taşındı.</p>
        </div>
      </div>
    </footer>
  );
}
