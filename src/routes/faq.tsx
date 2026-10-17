import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { useLang } from "@/i18n/LanguageProvider";
import { translations } from "@/i18n/translations";

export const Route = createFileRoute("/faq")({
  head: () => {
    const faqs = translations.en.faq.items;
    return {
      meta: [
        { title: "Frequently Asked Questions | Pitrukarya | Shri Chidambara Shraddha Bhavan" },
        { name: "description", content: "Answers to common questions about ceremonies, booking, Brahmin arrangements, puja materials and facilities at the Bhavan." },
        { property: "og:title", content: "FAQs | Pitrukarya | Shri Chidambara Shraddha Bhavan" },
        { property: "og:description", content: "Answers to the most common questions from families." },
        { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      ],
      links: [{ rel: "canonical", href: "/faq" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: FaqPage,
});

function FaqPage() {
  const { t } = useLang();
  return (
    <>
      <PageBanner eyebrow={t.faq.eyebrow} title={t.faq.title} />
      <FaqSection />
    </>
  );
}
