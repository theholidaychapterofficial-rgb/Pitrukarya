import { Link } from "@tanstack/react-router";
import { BookOpen, Users, Wind, Package, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { CONTACT } from "@/lib/contact";
import ceremony from "@/assets/venue-ceremony.jpg";
import entrance from "@/assets/venue-entrance.jpg";
import exterior from "@/assets/venue-exterior.jpg";
import hallWide from "@/assets/venue-hall-wide.jpg";
import hallView from "@/assets/venue-hall-view.jpg";

export function TrustStrip() {
  const { lang } = useLang();
  const kn = lang === "kn";
  const items = [
    { Icon: BookOpen, label: kn ? "ಶಾಸ್ತ್ರೋಕ್ತ ವಿಧಿಗಳು" : "Shastrokta rituals" },
    { Icon: Users, label: kn ? "ಅನುಭವಿ ವೇದವಿದ್ವಾಂಸರು" : "Experienced Vedic scholars" },
    { Icon: Wind, label: kn ? "ಶಾಂತ ಹಾಗೂ ಸ್ವಚ್ಛ ವಾತಾವರಣ" : "Calm, clean surroundings" },
    { Icon: Package, label: kn ? "ಸಂಪೂರ್ಣ ಪೂಜಾ ವ್ಯವಸ್ಥೆ" : "Complete puja arrangements" },
  ];
  return (
    <section aria-label={kn ? "ನಮ್ಮ ವಿಶೇಷತೆಗಳು" : "Highlights"} className="border-b border-border/60 bg-card">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border/50 lg:grid-cols-4">
        {items.map(({ Icon, label }) => (
          <li key={label} className="flex items-center gap-3 bg-card px-4 py-5 sm:px-6">
            <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden />
            <span className="text-sm font-medium text-foreground sm:text-base">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Split({
  img, alt, eyebrow, title, body, reverse, children,
}: {
  img: string; alt: string; eyebrow: string; title: string; body: string; reverse?: boolean; children?: React.ReactNode;
}) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div className="overflow-hidden rounded-xl border border-border/60 shadow-[var(--shadow-soft)]">
        <img src={img} alt={alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">{title}</h2>
        <div className="mt-4 h-px w-24 bg-[var(--gradient-gold)]" />
        <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">{body}</p>
        {children}
      </div>
    </div>
  );
}

export function CeremonyFeature() {
  const { lang } = useLang();
  const kn = lang === "kn";
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Split
          img={ceremony}
          alt={kn ? "ಶ್ರೀ ಚಿದಂಬರ ಶ್ರಾದ್ಧಭವನದಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಪಿತೃಕಾರ್ಯ" : "A Pitrukarya ceremony in progress at Shri Chidambara Shraddha Bhavan"}
          eyebrow={kn ? "ಭವನದಲ್ಲಿ ನೆರವೇರಿಸಲಾಗುವ ಕಾರ್ಯಗಳು" : "Ceremonies at the Bhavan"}
          title={kn ? "ಶ್ರದ್ಧೆಯಿಂದ ಪಿತೃಸೇವೆ" : "Pitru seva with devotion"}
          body={kn
            ? "ಪ್ರತಿ ಕಾರ್ಯವೂ ಶಾಸ್ತ್ರೋಕ್ತ ವಿಧಾನ ತಿಳಿದಿರುವ ಅನುಭವಿ ವೇದವಿದ್ವಾಂಸರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ನೆರವೇರಿಸಲಾಗುತ್ತದೆ. ಕುಟುಂಬಗಳು ಶ್ರದ್ಧೆಯಿಂದ ಪಿತೃಸ್ಮರಣೆಯಲ್ಲಿ ತೊಡಗಿಕೊಳ್ಳಲು ಅಗತ್ಯ ವ್ಯವಸ್ಥೆಗಳನ್ನು ಒದಗಿಸಲಾಗುತ್ತದೆ."
            : "Every ceremony is performed under the guidance of experienced Vedic scholars who know the Shastrokta procedure, with arrangements made so families can focus on remembering their ancestors."}
        >
          <Button asChild variant="maroon" size="lg" className="mt-8">
            <Link to="/booking">📿 {kn ? "ಪೂರ್ವಬುಕ್ಕಿಂಗ್" : "Book a Ceremony"}</Link>
          </Button>
        </Split>
      </div>
    </section>
  );
}

export function EntranceFeature() {
  const { lang } = useLang();
  const kn = lang === "kn";
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr]">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-border/60 shadow-[var(--shadow-soft)]">
            <img src={entrance} alt={kn ? "ಶ್ರೀ ಚಿದಂಬರ ಶ್ರಾದ್ಧಭವನದ ಪ್ರವೇಶ ದ್ವಾರ" : "Decorated entrance of Shri Chidambara Shraddha Bhavan"} loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{kn ? "ಆಗಮನ" : "Arrival"}</p>
            <h2 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
              {kn ? "ಆಧ್ಯಾತ್ಮಿಕ ವಾತಾವರಣಕ್ಕೆ ಸ್ವಾಗತ" : "Welcome to a spiritual atmosphere"}
            </h2>
            <div className="mt-4 h-px w-24 bg-[var(--gradient-gold)]" />
            <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
              {kn
                ? "ಶ್ರದ್ಧೆಯಿಂದ ನೆರವೇರಿಸುವ ಪಿತೃಕಾರ್ಯಗಳಿಗೆ ಶಾಂತ, ಸುವ್ಯವಸ್ಥಿತ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ವಾತಾವರಣವನ್ನು ಒದಗಿಸುವುದು ನಮ್ಮ ಉದ್ದೇಶ."
                : "Our purpose is to offer a calm, well-organised and traditional setting for Pitrukarya performed with devotion."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FacilityPhotos() {
  const { lang } = useLang();
  const kn = lang === "kn";
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2">
      <figure className="overflow-hidden rounded-xl border border-border/60 shadow-[var(--shadow-soft)]">
        <img src={hallWide} alt={kn ? "ಶ್ರೀ ಚಿದಂಬರ ಶ್ರಾದ್ಧಭವನದ ವಿಶಾಲ ಒಳಾಂಗಣ" : "Spacious interior hall of the Bhavan"} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <figcaption className="bg-card px-4 py-3 text-sm text-muted-foreground">{kn ? "ವಿಶಾಲ ಸಭಾಂಗಣ, ಗಾಳಿ-ಬೆಳಕಿನ ಕಿಟಕಿಗಳು ಹಾಗೂ ಫ್ಯಾನ್‌ಗಳು" : "Spacious hall with windows for light and air, and ceiling fans"}</figcaption>
      </figure>
      <figure className="overflow-hidden rounded-xl border border-border/60 shadow-[var(--shadow-soft)]">
        <img src={hallView} alt={kn ? "ಪ್ರತ್ಯೇಕ ಕಾರ್ಯಸ್ಥಳಗಳು ಹಾಗೂ ಸ್ವಚ್ಛ ಕಲ್ಲಿನ ನೆಲ" : "Separate ritual spaces and clean stone flooring"} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <figcaption className="bg-card px-4 py-3 text-sm text-muted-foreground">{kn ? "ಪ್ರತ್ಯೇಕ ಕಾರ್ಯಸ್ಥಳಗಳು ಹಾಗೂ ಸ್ವಚ್ಛ ಕಲ್ಲಿನ ನೆಲ" : "Separate ritual spaces and clean stone flooring"}</figcaption>
      </figure>
    </div>
  );
}

export function ExteriorCard() {
  const { lang } = useLang();
  const kn = lang === "kn";
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)]">
      <img src={exterior} alt={kn ? "ಶ್ರೀ ಚಿದಂಬರ ಶ್ರಾದ್ಧಭವನದ ಹೊರಾಂಗಣ" : "Exterior of Shri Chidambara Shraddha Bhavan"} loading="lazy" className="aspect-[16/9] w-full object-cover object-[60%_70%]" />
      <div className="flex flex-wrap gap-2 p-4">
        <Button asChild variant="outlineTemple" size="sm"><a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin /> {kn ? "ದಾರಿ ಕಂಡುಹಿಡಿಯಿರಿ" : "Get directions"}</a></Button>
        <Button asChild variant="outlineTemple" size="sm"><a href={`tel:${CONTACT.phone1.tel}`}><Phone /> {kn ? "ಕರೆ ಮಾಡಿ" : "Call"}</a></Button>
        <Button asChild variant="outlineTemple" size="sm"><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button>
      </div>
    </div>
  );
}
