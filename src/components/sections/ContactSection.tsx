import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { CONTACT } from "@/lib/contact";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";
import { ExteriorCard } from "./VenueSections";

export function ContactSection() {
  const { t } = useLang();
  return (
    <section id="contact" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.contact.addressLabel}
                  </p>
                  <address className="mt-1 not-italic text-base leading-relaxed text-foreground">
                    {t.contact.addressLines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </address>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="mt-1 text-base">
                    <a href={`tel:${CONTACT.phone1.tel}`} className="text-primary hover:underline">
                      {CONTACT.phone1.display}
                    </a>
                    <span className="mx-2 text-muted-foreground">·</span>
                    <a href={`tel:${CONTACT.phone2.tel}`} className="text-primary hover:underline">
                      {CONTACT.phone2.display}
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="maroon" size="lg">
                  <a href={`tel:${CONTACT.phone1.tel}`}>
                    <Phone /> {t.contact.callNow}
                  </a>
                </Button>
                <Button asChild variant="temple" size="lg">
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle /> {t.contact.chatWhatsApp}
                  </a>
                </Button>
                <Button asChild variant="outlineTemple" size="lg">
                  <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin /> {t.contact.openMap}
                  </a>
                </Button>
              </div>
            </div>

            <ExteriorCard />
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-[var(--shadow-soft)]">
              <iframe
                title="Google Maps"
                src={CONTACT.mapsEmbed}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-primary">{t.contact.form.title}</h3>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
