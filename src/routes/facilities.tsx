import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities | Pitrukarya | Shri Chidambara Shraddha Bhavan, Yelahanka" },
      { name: "description", content: "Spacious Shraddha hall, dining area, dedicated Pinda Pradana and tarpana spaces, parking, comfortable seating and complete ritual setup at the Bhavan." },
      { property: "og:title", content: "Facilities | Pitrukarya | Shri Chidambara Shraddha Bhavan" },
      { property: "og:description", content: "Everything arranged with care for a peaceful ceremony." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/facilities" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  const { t } = useLang();
  return (
    <>
      <PageBanner eyebrow={t.facilities.eyebrow} title={t.facilities.title} />
      <FacilitiesSection />
    </>
  );
}
