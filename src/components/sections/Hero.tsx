import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { CONTACT } from "@/lib/contact";
import heroImg from "@/assets/venue-hall-wide.jpg";

export function Hero() {
  const { t, lang } = useLang();
  return (
    <section id="home-hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt={lang === "kn" ? "ಶ್ರೀ ಚಿದಂಬರ ಶ್ರಾದ್ಧಭವನದ ವಿಶಾಲ ಒಳಾಂಗಣ" : "Spacious interior hall of Shri Chidambara Shraddha Bhavan"}
          className="h-full w-full object-cover object-[50%_45%]"
          width={1920}
          height={1200}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[image:var(--hero-readability)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-64px)] max-w-6xl flex-col items-center justify-center px-4 pb-24 pt-10 text-center text-hero-foreground sm:px-6 sm:pb-24 sm:pt-14 lg:min-h-[760px] lg:py-16">
        <span className="mb-4 rounded-full border border-hero-foreground/25 bg-brown/20 px-4 py-1.5 text-xs font-medium tracking-normal backdrop-blur-sm">
          {t.hero.eyebrow}
        </span>
        <h1 className="hero-heading max-w-4xl font-serif text-[30px] font-semibold leading-[1.5] text-hero-foreground sm:text-[38px] lg:text-[48px]">
          {t.hero.titleTop}
        </h1>
        <h2 className="hero-heading mt-2 max-w-4xl font-serif text-[24px] font-semibold leading-[1.6] text-gold-soft sm:text-[30px] lg:text-[36px]">
          {t.hero.titleBottom}
        </h2>
        <p className="hero-heading mx-auto mt-6 max-w-2xl rounded-2xl bg-brown/15 px-4 py-4 text-[14px] font-medium leading-[1.95] text-hero-foreground backdrop-blur-[2px] sm:px-6 sm:text-base lg:mt-7 lg:text-lg">
          {t.hero.subtitle}
        </p>
        <div className="mt-8 flex w-[96%] max-w-[380px] flex-col items-stretch justify-center gap-3 sm:w-full sm:max-w-2xl sm:flex-row sm:items-center">
          <Button
            asChild
            size="xl"
            variant="maroon"
            className="h-[58px] min-w-0 rounded-2xl border border-hero-button/60 bg-hero-button px-6 text-base font-semibold text-maroon shadow-sm hover:bg-hero-button/95 sm:min-w-[240px]"
          >
            <Link to="/booking">📿 {t.hero.book}</Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="maroon"
            className="h-[58px] min-w-0 rounded-2xl border border-hero-button/60 bg-hero-button px-6 text-base font-semibold text-maroon shadow-sm hover:bg-hero-button/95 sm:min-w-[240px]"
          >
            <Link to="/contact">📞 {t.hero.contact}</Link>
          </Button>
        </div>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-heading mt-4 inline-flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-hero-foreground underline-offset-4 hover:underline sm:text-base"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          {lang === "kn" ? "WhatsApp ಮೂಲಕ ವಿಚಾರಿಸಿ" : "Enquire on WhatsApp"}
        </a>
      </div>
      <div id="hero-contact-actions" className="absolute bottom-4 right-4 z-30 lg:bottom-6 lg:right-6" />
    </section>
  );
}
