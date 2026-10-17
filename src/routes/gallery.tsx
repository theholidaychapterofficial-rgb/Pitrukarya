import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { GallerySection } from "@/components/sections/GallerySection";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Vedic Rituals at Pitrukarya | Shri Chidambara Shraddha Bhavan" },
      { name: "description", content: "Glimpses of Vedic rituals, kalasha, darbha, til, Pinda Pradana, dining arrangements and the prayer hall at the Bhavan." },
      { property: "og:title", content: "Gallery | Pitrukarya | Shri Chidambara Shraddha Bhavan" },
      { property: "og:description", content: "Sacred rituals and the spiritual ambience of the Bhavan." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useLang();
  return (
    <>
      <PageBanner eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />
      <GallerySection />
    </>
  );
}
