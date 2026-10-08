import { Link } from "@tanstack/react-router";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/logo.png";

const navItems = [
  { to: "/", key: "home" as const },
  { to: "/about", key: "about" as const },
  { to: "/services", key: "services" as const },
  { to: "/facilities", key: "facilities" as const },
  { to: "/gallery", key: "gallery" as const },
  { to: "/why-choose-us", key: "whyUs" as const },
  { to: "/faq", key: "faq" as const },
  { to: "/contact", key: "contact" as const },
];

export function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 py-2 sm:flex sm:gap-4 sm:px-6 sm:py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img
            src={logoUrl}
            alt={`${t.meta.siteName} logo`}
             className="h-11 w-11 shrink-0 rounded-full object-cover shadow-[var(--shadow-soft)] sm:h-14 sm:w-14"
            width={56}
            height={56}
          />


          <span className="min-w-0">
            <span className="block truncate font-serif text-base font-semibold leading-tight text-primary sm:text-lg">
              {t.meta.siteName}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              {t.meta.tagline}
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary bg-accent/25" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/20"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2 lg:ml-2">
          <LangSwitcher lang={lang} setLang={setLang} />
          <Button asChild variant="temple" size="sm" className="hidden md:inline-flex">
            <Link to="/booking">{t.nav.book}</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary bg-accent/25" }}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-accent/20"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-3 py-3 text-center text-base font-medium text-primary-foreground"
            >
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function LangSwitcher({ lang, setLang }: { lang: "kn" | "en"; setLang: (l: "kn" | "en") => void }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-medium shadow-sm"
    >
      <Languages className="mx-1.5 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      <button
        type="button"
        onClick={() => setLang("kn")}
        aria-pressed={lang === "kn"}
        className={cn(
          "min-h-9 rounded-full px-3 py-1.5 transition-colors",
          lang === "kn" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary",
        )}
      >
        ಕನ್ನಡ
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "min-h-9 rounded-full px-3 py-1.5 transition-colors",
          lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary",
        )}
      >
        EN
      </button>
    </div>
  );
}
