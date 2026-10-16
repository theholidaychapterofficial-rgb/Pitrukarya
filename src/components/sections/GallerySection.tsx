import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLang } from "@/i18n/LanguageProvider";
import hallGathering from "@/assets/venue-hall-gathering.jpg";
import ritual from "@/assets/venue-ritual-priests.jpg";
import prasada from "@/assets/venue-prasada.jpg";
import hallSpacious from "@/assets/venue-hall-spacious.jpg";
import gathering from "@/assets/venue-gathering.jpg";
import prasadaWide from "@/assets/venue-prasada-wide.jpg";
import ceremony from "@/assets/venue-ceremony.jpg";
import wall from "@/assets/venue-spiritual-wall.jpg";
import entrance from "@/assets/venue-entrance.jpg";
import exterior from "@/assets/venue-exterior.jpg";

export function GallerySection() {
  const { t, lang } = useLang();
  const kn = lang === "kn";
  const items = [
    { src: hallGathering, caption: kn ? "ಕುಟುಂಬಗಳು ಸೇರಿರುವ ವಿಶಾಲ ಸಭಾಂಗಣ" : "The spacious hall with families gathered", cls: "sm:col-span-2 sm:row-span-2" },
    { src: ritual, caption: kn ? "ವೇದವಿದ್ವಾಂಸರಿಂದ ಪಿತೃಕಾರ್ಯ" : "Priests conducting a Pitrukarya ritual", cls: "sm:col-span-2" },
    { src: prasada, caption: kn ? "ಬಾಳೆಎಲೆಯ ಮೇಲೆ ಸಾಂಪ್ರದಾಯಿಕ ಭೋಜನ" : "Traditional bhojana served on banana leaf", cls: "" },
    { src: entrance, caption: kn ? "ಅಲಂಕೃತ ಪ್ರವೇಶ ದ್ವಾರ" : "Decorated entrance", cls: "sm:row-span-2" },
    { src: hallSpacious, caption: kn ? "ಸಭಾಂಗಣದ ನೋಟ" : "View of the hall", cls: "" },
    { src: gathering, caption: kn ? "ಕಾರ್ಯದಲ್ಲಿ ಭಾಗವಹಿಸಿರುವ ಕುಟುಂಬಗಳು" : "Families taking part in a ceremony", cls: "sm:col-span-2" },
    { src: ceremony, caption: kn ? "ಭವನದಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಪಿತೃಕಾರ್ಯ" : "Pitrukarya in progress", cls: "" },
    { src: prasadaWide, caption: kn ? "ಭೋಜನ ವ್ಯವಸ್ಥೆ" : "Dining arrangement in the hall", cls: "sm:col-span-2" },
    { src: wall, caption: kn ? "ಪೂಜಾ ಸ್ಥಳದ ಸಾಂಪ್ರದಾಯಿಕ ಅಲಂಕಾರ" : "Traditional spiritual wall and seat", cls: "" },
    { src: exterior, caption: kn ? "ಶ್ರೀ ಚಿದಂಬರ ಶ್ರಾದ್ಧಭವನದ ಹೊರಾಂಗಣ" : "Exterior of the Bhavan", cls: "sm:col-span-3" },
  ];
  const [open, setOpen] = useState<number | null>(null);
  const n = items.length;
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);
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
        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-4">
          {items.map((it, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-xl border border-border/60 shadow-[var(--shadow-soft)] ${it.cls}`}>
              <button type="button" onClick={() => setOpen(i)} className="block h-full w-full" aria-label={it.caption}>
                <img src={it.src} alt={it.caption} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none" />
              </button>
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
                <button type="button" onClick={() => go(-1)} aria-label={kn ? "ಹಿಂದಿನ ಚಿತ್ರ" : "Previous photo"} className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-brown/60 text-hero-foreground hover:bg-brown/80">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button type="button" onClick={() => go(1)} aria-label={kn ? "ಮುಂದಿನ ಚಿತ್ರ" : "Next photo"} className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-brown/60 text-hero-foreground hover:bg-brown/80">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              <p className="mt-2 text-center text-sm text-hero-foreground">
                {items[open].caption} · {open + 1}/{n}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
