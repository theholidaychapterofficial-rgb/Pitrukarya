import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  value,
  size = "sm",
  className,
}: {
  value: number;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${value} / 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden
          className={cn(
            size === "sm" ? "h-4 w-4" : "h-5 w-5",
            n <= Math.round(value)
              ? "fill-[color:var(--gold,theme(colors.amber.500))] text-accent"
              : "text-muted-foreground/35",
          )}
        />
      ))}
    </div>
  );
}

export function StarInput({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (v: number) => void;
  label: string;
}) {
  const [hover, setHover] = useState(0);
  const active = hover || value;
  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label={label}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n}`}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(n)}
          className="rounded-md p-1.5 transition-transform duration-150 hover:scale-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-95"
        >
          <Star
            className={cn(
              "h-8 w-8 transition-colors sm:h-7 sm:w-7",
              n <= active ? "fill-accent text-accent" : "text-muted-foreground/40",
              value === n && "drop-shadow-sm",
            )}
            aria-hidden
          />
        </button>
      ))}
    </div>
  );
}
