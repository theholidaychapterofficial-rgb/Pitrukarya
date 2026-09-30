import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ImportanceSection } from "@/components/sections/ImportanceSection";
import { BookingStepsSection } from "@/components/sections/BookingStepsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TrustStrip, CeremonyFeature, EntranceFeature } from "@/components/sections/VenueSections";

const TITLE = "Pitrukarya | Authentic Pitru Karma & Shraddha Services";
const DESC =
  "Pitrukarya at Shri Chidambara Shraddha Bhavan, Yelahanka, Bengaluru — authentic Pitru Karma, Shraddha, Pinda Pradana and Tarpana performed strictly as per the Shastras.";
const OG_IMAGE = "https://shraddha-seva-darshan.lovable.app/og-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://shraddha-seva-darshan.lovable.app/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://shraddha-seva-darshan.lovable.app/" }],
  }),

  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesSection compact />
      <ImportanceSection />
      <FacilitiesSection />
      <CeremonyFeature />
      <EntranceFeature />
      <WhyUsSection />
      <BookingStepsSection />
      <TestimonialsSection />
      <GallerySection />
    </>
  );
}
