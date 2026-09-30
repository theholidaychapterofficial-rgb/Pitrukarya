import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLang } from "@/i18n/LanguageProvider";
import hallWide from "@/assets/venue-hall-wide.jpg";
import ceremony from "@/assets/venue-ceremony.jpg";
import wall from "@/assets/venue-spiritual-wall.jpg";
import entrance from "@/assets/venue-entrance.jpg";
import hallView from "@/assets/venue-hall-view.jpg";
import exterior from "@/assets/venue-exterior.jpg";
import detail from "@/assets/venue-ceremony-detail.jpg";

export function GallerySection() {
  const { t, lang } = useLang();
  const kn = lang === "kn";
  const items = [
    { src: hallWide, caption: kn ? "ಶ್ರೀ ಚಿದಂಬರ ಶ್ರಾದ್ಧಭವನದ ವಿಶಾಲ ಒಳಾಂಗಣ" : "Spacious interior hall", cls: "sm:col-span-2 sm:row-span-2" },
    { src: ceremony, caption: kn ? "ಭವನದಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಪಿತೃಕಾರ್ಯ" : "Pitrukarya in progress", cls: "sm:col-span-2" },
    { src: wall, caption: kn ? "ಪೂಜಾ ಸ್ಥಳದ ಸಾಂಪ್ರದಾಯಿಕ ಅಲಂಕಾರ" : "Traditional spiritual wall and seat", cls: "" },
    { src: entrance, caption: kn ? "ಅಲಂಕೃತ ಪ್ರವೇಶ ದ್ವಾರ" : "Decorated entrance", cls: "sm:row-span-2" },
    { src: hallView, caption: kn ? "ಸಭಾಂಗಣದ ನೋಟ" : "View of the hall", cls: "" },
    { src: detail, caption: kn ? "ವಿಧಿವಿಧಾನದ ಕ್ಷಣ" : "Ritual in detail", cls: "" },
    { src: exterior, caption: kn ? "ಶ್ರೀ ಚಿದಂಬರ ಶ್ರಾದ್ಧಭವನದ ಹೊರಾಂಗಣ" : "Exterior of the Bhavan", cls: "sm:col-span-2" },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="gallery" className="pattern-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />
        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-4">
          {items.map((it, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-xl border border-border/60 shadow-[var(--shadow-soft)] ${it.cls}`}>
              <button type="button" onClick={() => setOpen(i)} className="block h-full w-full" aria-label={it.caption}>
                <img src={it.src} alt={it.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </button>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs text-white sm:text-sm">
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
              <img src={items[open].src} alt={items[open].caption} className="max-h-[85vh] w-full rounded-lg object-contain" />
              <p className="mt-2 text-center text-sm text-white">{items[open].caption}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
