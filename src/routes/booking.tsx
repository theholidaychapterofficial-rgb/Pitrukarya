import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { BookingStepsSection } from "@/components/sections/BookingStepsSection";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Ceremony | Pitrukarya | Shri Chidambara Shraddha Bhavan" },
      { name: "description", content: "Reserve your Pitru Karya ceremony at Pitrukarya | Shri Chidambara Shraddha Bhavan, Yelahanka. Advance booking recommended, especially during Mahalaya Paksha." },
      { property: "og:title", content: "Book a Ceremony | Pitrukarya | Shri Chidambara Shraddha Bhavan" },
      { property: "og:description", content: "Simple steps to reserve your ceremony." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  const { t } = useLang();
  return (
    <>
      <PageBanner eyebrow={t.booking.eyebrow} title={t.booking.title} />
      <BookingStepsSection />
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-primary">{t.contact.form.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.contact.subtitle}</p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
