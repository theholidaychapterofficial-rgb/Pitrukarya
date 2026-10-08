import { SectionHeading } from "@/components/site/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/i18n/LanguageProvider";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const { t } = useLang();
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <Card key={item.name} className="temple-border border-transparent bg-card shadow-[var(--shadow-soft)]">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent" aria-hidden />
                <p className="mt-4 whitespace-pre-line break-words font-serif text-lg italic leading-relaxed text-foreground/90">
                  “{item.quote}”
                </p>
                <p className="mt-6 text-sm font-medium text-primary">— {item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
