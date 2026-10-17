import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us | Pitrukarya | Shri Chidambara Shraddha Bhavan" },
      { name: "description", content: "Shastra-compliant rituals, experienced Vedic scholars, complete end-to-end assistance and a peaceful environment for every Pitru Karya." },
      { property: "og:title", content: "Why Choose Us | Pitrukarya | Shri Chidambara Shraddha Bhavan" },
      { property: "og:description", content: "Trust rooted in tradition." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyPage,
});

function WhyPage() {
  const { t } = useLang();
  return (
    <>
      <PageBanner eyebrow={t.whyUs.eyebrow} title={t.whyUs.title} />
      <WhyUsSection />
      <TestimonialsSection />
    </>
  );
}
