import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImportanceSection } from "@/components/sections/ImportanceSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Bhavan | Pitrukarya | Shri Chidambara Shraddha Bhavan, Yelahanka" },
      { name: "description", content: "About Pitrukarya | Shri Chidambara Shraddha Bhavan under Shri Kanva Matha — a sacred space in Yelahanka, Bengaluru dedicated to Pitru Karyas per Vedic tradition." },
      { property: "og:title", content: "About | Pitrukarya | Shri Chidambara Shraddha Bhavan" },
      { property: "og:description", content: "Learn about the tradition, priests and philosophy of the Bhavan." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <PageBanner eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.intro} />
      <AboutSection />
      <ImportanceSection />
      <WhyUsSection />
    </>
  );
}
