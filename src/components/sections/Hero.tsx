import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { CONTACT } from "@/lib/contact";
import heroImg from "@/assets/venue-hall-wide.jpg";

export function Hero() {
  const { t, lang } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt={lang === "kn" ? "ಶ್ರೀ ಚಿದಂಬರ ಶ್ರಾದ್ಧಭವನದ ವಿಶಾಲ ಒಳಾಂಗಣ" : "Spacious interior hall of Shri Chidambara Shraddha Bhavan"}
          className="h-full w-full object-cover object-[50%_45%]"
          width={1920}
          height={1200}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      </div>

      <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center text-white sm:px-6">
        <span className="mb-4 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] backdrop-blur-sm">
          {t.hero.eyebrow}
        </span>
        <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-white drop-shadow-md sm:text-5xl md:text-6xl">
          <span className="block">{t.hero.titleTop}</span>
          <span className="mt-2 block text-[color:var(--gold-soft)]">{t.hero.titleBottom}</span>
        </h1>
        <div className="divider-ornament my-6 w-full max-w-md" aria-hidden />
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          {t.hero.subtitle}
        </p>
        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center">
          <Button
            asChild
            size="xl"
            variant="maroon"
            className="min-w-[240px] border-2 border-white/60 bg-white px-8 py-6 text-base font-semibold text-primary shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] hover:bg-white/95 sm:text-lg"
          >
            <Link to="/booking">📿 {t.hero.book}</Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="maroon"
            className="min-w-[240px] border-2 border-white/60 bg-white px-8 py-6 text-base font-semibold text-primary shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] hover:bg-white/95 sm:text-lg"
          >
            <Link to="/contact">📞 {t.hero.contact}</Link>
          </Button>
        </div>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/95 underline-offset-4 hover:underline sm:text-base"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          {lang === "kn" ? "WhatsApp ಮೂಲಕ ವಿಚಾರಿಸಿ" : "Enquire on WhatsApp"}
        </a>
      </div>
    </section>
  );
}
