import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Pitrukarya | Shri Chidambara Shraddha Bhavan, Yelahanka" },
      { name: "description", content: "Contact Pitrukarya | Shri Chidambara Shraddha Bhavan, Shri Kanva Matha, Sante Beedi, Yelahanka, Bengaluru — 560064. Phone: +91 97405 13665." },
      { property: "og:title", content: "Contact | Pitrukarya | Shri Chidambara Shraddha Bhavan" },
      { property: "og:description", content: "Reach out to the Bhavan for ceremonies and enquiries." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <>
      <PageBanner eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />
      <ContactSection />
    </>
  );
}
