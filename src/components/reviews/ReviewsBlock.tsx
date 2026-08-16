import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Star, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { ReviewDialog } from "@/components/reviews/ReviewDialog";
import { useLang } from "@/i18n/LanguageProvider";
import { reviewsCopy, summarise, type PublicReview } from "@/lib/reviews";
import { supabase } from "@/integrations/supabase/client";

async function fetchApprovedReviews(): Promise<PublicReview[]> {
  const { data, error } = await supabase
    .from("public_reviews")
    .select("id, name, rating, review_text, service, featured, created_at, approved_at")
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as PublicReview[];
}

export function ReviewsBlock({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();
  const c = reviewsCopy[lang];
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["public-reviews"],
    queryFn: fetchApprovedReviews,
  });

  const reviews = data ?? [];
  const { total, average, distribution } = summarise(reviews);
  const shown = compact ? reviews.slice(0, 3) : reviews;

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

        {isLoading && (
          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {c.loading}
          </p>
        )}

        {isError && (
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">{c.loadError}</p>
            <Button className="mt-4" variant="outlineTemple" onClick={() => refetch()}>
              {lang === "kn" ? "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ" : "Try again"}
            </Button>
          </div>
        )}

        {!isLoading && !isError && total > 0 && (
          <>
            <div className="mx-auto mt-12 grid max-w-3xl gap-8 rounded-xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] sm:grid-cols-[auto_1fr] sm:items-center sm:p-8">
              <div className="text-center sm:pr-8 sm:text-left">
                <p className="flex items-center justify-center gap-2 sm:justify-start">
                  <span className="font-serif text-5xl font-semibold text-primary">
                    {average.toFixed(1)}
                  </span>
                  <Star className="h-7 w-7 fill-accent text-accent" aria-hidden />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{c.basedOn(total)}</p>
              </div>
              <div className="space-y-1.5">
                {distribution.map((d) => (
                  <div key={d.star} className="flex items-center gap-3 text-xs">
                    <span className="w-8 shrink-0 text-muted-foreground">{d.star} ★</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <span
                        className="block h-full rounded-full bg-[var(--gradient-gold)] transition-all duration-500"
                        style={{ width: `${d.percent}%` }}
                      />
                    </span>
                    <span className="w-10 shrink-0 text-right text-muted-foreground">
                      {d.percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          </>
        )}

        {!isLoading && !isError && total === 0 && (
          <p className="mt-12 text-center font-serif text-lg italic text-foreground/80">
            {c.empty}
          </p>
        )}

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ReviewDialog
            onSubmitted={() => refetch()}
            trigger={
              <Button variant="maroon" size="lg" className="w-full sm:w-auto">
                {c.share}
              </Button>
            }
          />
          {compact && total > 3 && (
            <Button asChild variant="outlineTemple" size="lg" className="w-full sm:w-auto">
              <Link to="/reviews">{c.viewAll}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
