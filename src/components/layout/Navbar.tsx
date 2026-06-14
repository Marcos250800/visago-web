"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SITE } from "@/lib/site";
import { Wordmark } from "@/components/brand/Wordmark";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // drawer móvil
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body con el drawer abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-line bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="VisaGo — inicio" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        {/* Navegación desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                <span className="link-underline">{item.label}</span>
                {item.children && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </Link>

              {/* Dropdown / mega-menú */}
              {item.children && (
                <AnimatePresence>
                  {hovered === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "absolute left-0 top-full pt-3",
                        item.label === "Servicios" ? "w-[34rem]" : "w-80",
                      )}
                    >
                      <div className="overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-2xl shadow-black/20">
                        <div className={cn("grid gap-1", item.label === "Servicios" && "grid-cols-2")}>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group/item rounded-xl px-3 py-2.5 transition-colors hover:bg-foreground/5"
                            >
                              <span className="block text-sm font-medium text-foreground">{child.label}</span>
                              {child.description && (
                                <span className="mt-0.5 block text-xs text-muted">{child.description}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:grid" />
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-primary !px-5 !py-2.5 md:inline-flex"
          >
            Solicitar asesoría
          </a>

          {/* Botón hamburguesa (móvil) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-foreground lg:hidden"
          >
            <div className="relative h-3 w-4">
              <span className={cn("absolute left-0 top-0 h-[1.5px] w-full bg-current transition-all duration-300", open && "top-1/2 -translate-y-1/2 rotate-45")} />
              <span className={cn("absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity duration-200", open && "opacity-0")} />
              <span className={cn("absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-all duration-300", open && "bottom-1/2 translate-y-1/2 -rotate-45")} />
            </div>
          </button>
        </div>
      </nav>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

/* ------------------------------- Drawer móvil ------------------------------- */

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background lg:hidden"
        >
          <div className="container flex min-h-full flex-col gap-2 py-8">
            {NAV.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 font-display text-3xl font-semibold text-foreground"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mb-2 ml-1 flex flex-col gap-1 border-l border-line pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="py-1.5 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1"
                onClick={onClose}
              >
                Solicitar asesoría
              </a>
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
