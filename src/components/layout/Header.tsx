"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  {
    label: "Profil",
    subLinks: [
      { href: "/profil", label: "Tentang Desa" },
      { href: "/profil/visi-misi", label: "Visi & Misi" },
    ]
  },
  {
    label: "Pemerintahan",
    subLinks: [
      { href: "/pemerintahan", label: "Struktur Organisasi" },
      { href: "/pemerintahan/lembaga", label: "Lembaga Desa" },
    ]
  },
  {
    label: "Informasi",
    subLinks: [
      { href: "/informasi", label: "Berita & Agenda" },
      { href: "/informasi/transparansi", label: "Transparansi Anggaran" },
      { href: "/profil/demografi", label: "Demografi Penduduk" },
      { href: "/informasi/pengumuman", label: "Pengumuman Resmi" },
      { href: "/informasi/kkm", label: "Tim KKM" },
      { href: "/informasi/galeri", label: "Galeri & Media" },
    ]
  },
  { href: "/potensi", label: "Potensi Desa" },
  { href: "/pelayanan", label: "Layanan Pengaduan" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) => {
    if (openMobileDropdown === label) {
      setOpenMobileDropdown(null);
    } else {
      setOpenMobileDropdown(label);
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const isSolid = !isHomePage || isScrolled;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 transition-all duration-300 ${isSolid ? 'bg-surface/95 backdrop-blur-md dark:bg-on-background/95 shadow-sm' : 'bg-transparent shadow-none'}`} id="main-nav">
      {/* Brand / Logo (Clickable to refresh/home) */}
      <a href="/" className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
        <img src="/logo.png" alt="Logo Desa" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" />
        <span className={`font-display-lg text-title-lg font-bold ${isSolid ? 'text-primary dark:text-primary-fixed' : 'text-white'}`}>Nagarakembang</span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center justify-end flex-1 mx-8 gap-6 xl:gap-8">
        {NAV_LINKS.map((link) => {
          if (link.subLinks) {
            // Dropdown Menu Item
            const isActive = link.subLinks.some(sub => pathname === sub.href);
            return (
              <div key={link.label} className="relative group">
                <button
                  className={`flex items-center gap-1 font-body-md text-label-md transition-colors py-2 ${isActive
                      ? (isSolid ? "text-primary font-bold" : "text-white font-bold")
                      : (isSolid ? "text-on-surface-variant hover:text-primary" : "text-white/80 hover:text-white")
                    }`}
                >
                  {link.label}
                  <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform duration-300">expand_more</span>
                </button>

                {/* Dropdown Content */}
                <div className="absolute top-full left-0 mt-4 w-56 bg-surface rounded-xl shadow-lg border border-outline-variant opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-300 flex flex-col py-2 overflow-hidden z-50">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`px-4 py-2.5 text-sm transition-colors ${pathname === sub.href
                          ? "bg-primary/10 text-primary font-bold border-l-2 border-primary"
                          : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary border-l-2 border-transparent"
                        }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          // Normal Menu Item
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href!}
              className={`font-body-md text-label-md transition-colors py-2 ${isActive
                  ? (isSolid ? "text-primary dark:text-primary-fixed border-b-2 border-primary font-bold opacity-80" : "text-white border-b-2 border-white font-bold")
                  : (isSolid ? "text-on-surface-variant hover:text-primary" : "text-white/80 hover:text-white")
                }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Right side actions */}
      <div className="flex items-center gap-4">



        {/* Mobile menu toggle */}
        <button className={`lg:hidden p-2 ${isSolid ? 'text-primary' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined">{isMobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full max-h-[calc(100vh-80px)] overflow-y-auto bg-surface shadow-lg p-4 flex flex-col gap-4 lg:hidden border-t border-outline-variant z-40">
          {NAV_LINKS.map((link) => {
            if (link.subLinks) {
              const isActive = link.subLinks.some(sub => pathname === sub.href);
              const isOpen = openMobileDropdown === link.label;
              return (
                <div key={link.label} className="flex flex-col border-b border-surface-variant pb-2">
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className={`flex items-center justify-between font-body-md text-label-md transition-colors w-full text-left py-2 ${isActive ? "text-primary font-bold" : "text-on-surface-variant"
                      }`}
                  >
                    {link.label}
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}>
                      expand_more
                    </span>
                  </button>

                  {/* Mobile Dropdown Sublinks */}
                  {isOpen && (
                    <div className="flex flex-col gap-1 pl-4 border-l-2 border-outline-variant ml-2 mt-2">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`py-2 text-sm transition-colors ${pathname === sub.href ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
                            }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href!}
                className={`font-body-md text-label-md transition-colors py-2 border-b border-surface-variant ${isActive ? "text-primary font-bold" : "text-on-surface-variant"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}



        </div>
      )}
    </header>
  );
}
