"use client";

import { usePathname } from "next/navigation";
import Link from "./safe-link";

const navigation = [
  { href: "/produkt", label: "Produkt" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/referenz", label: "Projektweg" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function SiteNavigation({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label={label}>
      {navigation.map((item) => {
        const current = pathname === item.href;

        return (
          <Link href={item.href} key={item.href} aria-current={current ? "page" : undefined}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
