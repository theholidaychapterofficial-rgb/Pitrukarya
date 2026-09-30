import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { ReviewsBlock } from "@/components/reviews/ReviewsBlock";
import { useLang } from "@/i18n/LanguageProvider";
import { reviewsCopy } from "@/lib/reviews";

const TITLE = "Devotee Reviews | Pitrukarya | Shri Chidambara Shraddha Bhavan";
const DESC =
  "Read experiences shared by families who performed Pitru Karya, Shraddha and Tarpana at Shri Chidambara Shraddha Bhavan, Yelahanka, Bengaluru.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://shraddha-seva-darshan.lovable.app/reviews" },
    ],
    links: [{ rel: "canonical", href: "https://shraddha-seva-darshan.lovable.app/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const { lang } = useLang();
  const c = reviewsCopy[lang];
  return (
    <>
      <PageBanner eyebrow={c.eyebrow} title={c.title} />
      <ReviewsBlock />
    </>
  );
}
