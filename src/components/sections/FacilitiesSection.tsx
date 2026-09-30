import { SectionHeading } from "@/components/site/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/i18n/LanguageProvider";
import { FacilityPhotos } from "./VenueSections";
import {
  Building2,
  UtensilsCrossed,
  Flower2,
  Droplet,
  Trees,
  ParkingCircle,
  CalendarCheck,
  Bath,
  Armchair,
  Layout,
} from "lucide-react";

const ICONS = [Building2, UtensilsCrossed, Flower2, Droplet, Trees, ParkingCircle, CalendarCheck, Bath, Armchair, Layout];

export function FacilitiesSection() {
  const { t } = useLang();
  return (
    <section id="facilities" className="pattern-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.facilities.eyebrow} title={t.facilities.title} />
        <FacilityPhotos />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.facilities.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Card key={item.title} className="bg-card/95 shadow-[var(--shadow-soft)]">
                <CardContent className="p-5">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-md bg-accent/20 text-accent-foreground">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-primary">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
