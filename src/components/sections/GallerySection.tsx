import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import hallWide from "@/assets/venue-hall-wide.jpg";
import ritual from "@/assets/venue-ritual-priests.jpg";
import prasada from "@/assets/venue-prasada.jpg";
import detail from "@/assets/venue-ceremony-detail.jpg";
import prasadaWide from "@/assets/venue-prasada-wide.jpg";
import ceremony from "@/assets/venue-ceremony.jpg";
import entrance from "@/assets/venue-entrance.jpg";
import exterior from "@/assets/venue-exterior.jpg";

export function GallerySection() {
  const { t, lang } = useLang();
  const kn = lang === "kn";
  const [filter, setFilter] = useState<"all" | "ceremony" | "hall" | "dining">("all");
  const items = [
    { src: entrance, category: "hall", caption: kn ? "ಅಲಂಕೃತ ಪ್ರವೇಶ ದ್ವಾರ" : "Decorated entrance", portrait: true },
    { src: ritual, category: "ceremony", caption: kn ? "ವೇದವಿದ್ವಾಂಸರಿಂದ ಪಿತೃಕಾರ್ಯ" : "Priests conducting a Pitrukarya ritual" },
    { src: prasada, category: "dining", caption: kn ? "ಬಾಳೆಎಲೆಯ ಮೇಲೆ ಸಾಂಪ್ರದಾಯಿಕ ಭೋಜನ" : "Traditional bhojana served on banana leaf" },
    { src: hallWide, category: "hall", caption: kn ? "ಸಭಾಂಗಣದ ನೋಟ" : "View of the hall" },
    { src: ceremony, category: "ceremony", caption: kn ? "ಭವನದಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಪಿತೃಕಾರ್ಯ" : "Pitrukarya in progress" },
    { src: detail, category: "ceremony", caption: kn ? "ಪಿತೃಕಾರ್ಯದ ವಿಧಿಗಳು ಮತ್ತು ಪೂಜಾ ಸಾಮಗ್ರಿಗಳು" : "Ritual proceedings and puja materials", portrait: true },
    { src: prasadaWide, category: "dining", caption: kn ? "ಭೋಜನ ವ್ಯವಸ್ಥೆ" : "Dining arrangement in the hall" },
    { src: exterior, category: "hall", caption: kn ? "ಶ್ರೀ ಚಿದಂಬರ ಶ್ರಾದ್ಧಭವನದ ಹೊರಾಂಗಣ" : "Exterior of the Bhavan" },
  ];
  const filters = [
    { id: "all", label: kn ? "ಎಲ್ಲಾ ಚಿತ್ರಗಳು" : "All photos" },
    { id: "ceremony", label: kn ? "ಪಿತೃಕಾರ್ಯ" : "Ceremony" },
    { id: "hall", label: kn ? "ಸಭಾಂಗಣ" : "Hall" },
    { id: "dining", label: kn ? "ಭೋಜನ" : "Dining" },
  ] as const;
  const visible = items.map((item, id) => ({ ...item, id })).filter((item) => filter === "all" || item.category === filter);
  const visibleIds = visible.map((item) => item.id);
  const [open, setOpen] = useState<number | null>(null);
  const n = visible.length;
  const go = useCallback((d: number) => setOpen((i) => {
    if (i === null) return null;
    const index = visibleIds.indexOf(i);
    return visibleIds[(index + d + visibleIds.length) % visibleIds.length] ?? null;
  }), [filter]);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  return (
    <section id="gallery" className="pattern-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />
        <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label={kn ? "ಚಿತ್ರಗಳ ವಿಭಾಗಗಳು" : "Photo categories"}>
          {filters.map(({ id, label }) => (
            <Button key={id} variant={filter === id ? "maroon" : "outlineTemple"} aria-pressed={filter === id} onClick={() => { setFilter(id); setOpen(null); }}>
              {label}
            </Button>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((it) => (
            <figure key={it.id} className="group relative overflow-hidden rounded-lg border border-border/60 shadow-[var(--shadow-soft)]">
              <Button variant="ghost" type="button" onClick={() => setOpen(it.id)} className={`block h-auto w-full overflow-hidden rounded-none p-0 ${it.portrait ? "aspect-[3/4]" : "aspect-[4/3]"}`} aria-label={it.caption}>
                <img src={it.src} alt={it.caption} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none" />
              </Button>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown/70 to-transparent p-3 text-xs text-hero-foreground sm:text-sm">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
          {open !== null && (
            <>
              <DialogTitle className="sr-only">{items[open].caption}</DialogTitle>
              <div className="relative">
                <img src={items[open].src} alt={items[open].caption} className="max-h-[80vh] w-full rounded-lg object-contain" />
                <Button variant="ghost" size="icon" type="button" onClick={() => go(-1)} aria-label={kn ? "ಹಿಂದಿನ ಚಿತ್ರ" : "Previous photo"} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-brown/60 text-hero-foreground hover:bg-brown/80">
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" type="button" onClick={() => go(1)} aria-label={kn ? "ಮುಂದಿನ ಚಿತ್ರ" : "Next photo"} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-brown/60 text-hero-foreground hover:bg-brown/80">
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              <p className="mt-2 text-center text-sm text-hero-foreground">
                {items[open].caption} · {visibleIds.indexOf(open) + 1}/{n}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
