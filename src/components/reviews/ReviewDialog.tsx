import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StarInput } from "@/components/reviews/StarRating";
import { useLang } from "@/i18n/LanguageProvider";
import { reviewsCopy } from "@/lib/reviews";
import { supabase } from "@/integrations/supabase/client";

export function ReviewDialog({
  trigger,
  onSubmitted,
}: {
  trigger: React.ReactNode;
  onSubmitted?: () => void;
}) {
  const { lang, t } = useLang();
  const c = reviewsCopy[lang].form;
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [service, setService] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(1, c.errors.name).max(100),
    phone: z
      .string()
      .trim()
      .refine((v) => !v || /^\d{10}$/.test(v), c.errors.mobile),
    email: z
      .string()
      .trim()
      .max(255)
      .refine((v) => !v || z.string().email().safeParse(v).success, c.errors.email),
    rating: z.number().min(1, c.errors.rating).max(5),
    review_text: z.string().trim().min(1, c.errors.review).max(1500, c.errors.reviewMax),
    consent: z.literal(true, { message: c.errors.consent }),
  });

  function reset() {
    setRating(0);
    setService("");
    setConsent(false);
    setErrors({});
    setDone(false);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      rating,
      review_text: String(fd.get("review_text") || ""),
      consent,
    });
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const { error } = await supabase.from("reviews").insert({
      name: parsed.data.name,
      email: parsed.data.email || null,
      phone: parsed.data.phone || null,
      rating: parsed.data.rating,
      review_text: parsed.data.review_text,
      service: service || null,
      consent: true,
    });
    setSubmitting(false);
    if (error) {
      setErrors({ submit: c.errors.submit });
      return;
    }
    form.reset();
    setDone(true);
    onSubmitted?.();
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setTimeout(reset, 200);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] w-[calc(100vw-2rem)] max-w-lg overflow-y-auto sm:w-full">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl text-primary">{c.title}</DialogTitle>
          <DialogDescription>{c.description}</DialogDescription>
        </DialogHeader>

        {done ? (
          <div className="rounded-lg border border-accent/40 bg-accent/10 p-6 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden />
            <p className="mt-4 text-sm leading-relaxed text-foreground">{c.success}</p>
            <Button className="mt-4" variant="outlineTemple" onClick={() => setOpen(false)}>
              {c.close}
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div>
              <Label htmlFor="rv-rating" className="mb-1.5 inline-block text-sm font-medium">
                {c.rating}
              </Label>
              <div id="rv-rating">
                <StarInput value={rating} onChange={setRating} label={c.rating} />
              </div>
              {errors.rating && <p className="mt-1 text-xs text-destructive">{errors.rating}</p>}
            </div>

            <div>
              <Label htmlFor="rv-name" className="mb-1.5 inline-block text-sm font-medium">
                {c.name}
              </Label>
              <Input id="rv-name" name="name" placeholder={c.namePh} maxLength={100} />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="rv-phone" className="mb-1.5 inline-block text-xs font-medium">
                  {c.mobile}
                </Label>
                <Input
                  id="rv-phone"
                  name="phone"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder={c.mobilePh}
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="rv-email" className="mb-1.5 inline-block text-xs font-medium">
                  {c.email}
                </Label>
                <Input id="rv-email" name="email" type="email" maxLength={255} placeholder={c.emailPh} />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="rv-service" className="mb-1.5 inline-block text-sm font-medium">
                {c.service}
              </Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="rv-service" className="w-full">
                  <SelectValue placeholder={c.servicePh} />
                </SelectTrigger>
                <SelectContent>
                  {t.services.items.map((s) => (
                    <SelectItem key={s.title} value={s.title}>
                      {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="rv-text" className="mb-1.5 inline-block text-sm font-medium">
                {c.review}
              </Label>
              <Textarea id="rv-text" name="review_text" rows={4} maxLength={1500} placeholder={c.reviewPh} />
              {errors.review_text && (
                <p className="mt-1 text-xs text-destructive">{errors.review_text}</p>
              )}
            </div>

            <div className="flex items-start gap-3 rounded-md border border-border/60 bg-muted/30 p-3">
              <Checkbox
                id="rv-consent"
                checked={consent}
                onCheckedChange={(v) => setConsent(v === true)}
                className="mt-0.5"
              />
              <Label htmlFor="rv-consent" className="text-xs leading-relaxed font-normal">
                {c.consent}
              </Label>
            </div>
            {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}
            {errors.submit && (
              <p className="rounded-md border border-destructive/40 bg-destructive/10 p-2 text-xs text-destructive">
                {errors.submit}
              </p>
            )}

            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outlineTemple"
                onClick={() => setOpen(false)}
                disabled={submitting}
              >
                {c.cancel}
              </Button>
              <Button type="submit" variant="maroon" disabled={submitting}>
                {submitting && <Loader2 className="animate-spin" aria-hidden />}
                {submitting ? c.submitting : c.submit}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
