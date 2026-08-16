import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/reviews/StarRating";
import { formatDate, initials, reviewsCopy, type PublicReview } from "@/lib/reviews";
import { useLang } from "@/i18n/LanguageProvider";

export function ReviewCard({ review }: { review: PublicReview }) {
  const { lang } = useLang();
  const c = reviewsCopy[lang];
  return (
    <Card className="temple-border h-full border-transparent bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-md">
      <CardContent className="flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span
            aria-hidden
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-sm font-semibold text-primary"
          >
            {initials(review.name)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-primary">{review.name}</p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <StarRating value={review.rating} />
              <span className="text-xs text-muted-foreground">
                {formatDate(review.created_at, lang)}
              </span>
            </div>
          </div>
          {review.featured && (
            <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
              {c.featured}
            </span>
          )}
        </div>

        <p className="mt-4 flex-1 whitespace-pre-line break-words text-sm leading-relaxed text-foreground/90">
          {review.review_text}
        </p>

        {review.service && (
          <p className="mt-4 border-t border-border/60 pt-3 text-xs text-muted-foreground">
            {review.service}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
