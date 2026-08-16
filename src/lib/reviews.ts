import type { Lang } from "@/i18n/translations";

export interface PublicReview {
  id: string;
  name: string;
  rating: number;
  review_text: string;
  service: string | null;
  featured: boolean;
  created_at: string;
  approved_at: string | null;
}

export interface AdminReview extends PublicReview {
  email: string | null;
  phone: string | null;
  consent: boolean;
  status: "pending" | "approved" | "rejected";
}

export function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
}

export function formatDate(iso: string, lang: Lang) {
  try {
    return new Date(iso).toLocaleDateString(lang === "kn" ? "kn-IN" : "en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso.slice(0, 10);
  }
}

export function summarise(reviews: PublicReview[]) {
  const total = reviews.length;
  const sum = reviews.reduce((a, r) => a + r.rating, 0);
  const average = total ? sum / total : 0;
  const distribution = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => r.rating === star).length;
    return { star, count, percent: total ? Math.round((count / total) * 100) : 0 };
  });
  return { total, average, distribution };
}

export const reviewsCopy = {
  en: {
    eyebrow: "Devotee Experiences",
    title: "What Devotees Say",
    subtitle:
      "Words shared by families who performed their ancestral rites at the Bhavan.",
    basedOn: (n: number) => `Based on ${n} devotee review${n === 1 ? "" : "s"}`,
    share: "Share Your Experience",
    viewAll: "View All Reviews",
    empty: "Be among the first to share your experience with Shraddha Bhavan.",
    loading: "Loading reviews…",
    loadError: "Reviews could not be loaded right now. Please try again later.",
    featured: "Featured",
    form: {
      title: "Share Your Experience",
      description:
        "Your words help other families. Reviews are published after a short review by the Bhavan.",
      name: "Name",
      namePh: "Your full name",
      mobile: "Mobile number (optional, never shown publicly)",
      mobilePh: "10-digit mobile number",
      email: "Email (optional, never shown publicly)",
      emailPh: "you@example.com",
      service: "Ceremony / Service (optional)",
      servicePh: "Select a ceremony",
      rating: "Your rating",
      review: "Your review",
      reviewPh: "Tell us about your experience at the Bhavan…",
      consent: "I agree that my name and review may be displayed publicly on this website.",
      submit: "Submit Review",
      submitting: "Submitting…",
      cancel: "Cancel",
      success:
        "Thank you for sharing your experience. Your review has been submitted for approval.",
      close: "Close",
      errors: {
        name: "Please enter your name.",
        mobile: "Enter a valid 10-digit mobile number.",
        email: "Enter a valid email address.",
        rating: "Please select a star rating.",
        review: "Please write a few words about your experience.",
        reviewMax: "Review must be under 1500 characters.",
        consent: "Please confirm your review may be displayed publicly.",
        submit: "Your review could not be submitted. Please try again.",
      },
    },
  },
  kn: {
    eyebrow: "ಭಕ್ತರ ಅನುಭವ",
    title: "ಭಕ್ತರು ಹಂಚಿಕೊಂಡ ಮಾತು",
    subtitle: "ಭವನದಲ್ಲಿ ಪಿತೃಕಾರ್ಯ ನೆರವೇರಿಸಿದ ಕುಟುಂಬಗಳ ಅನುಭವಗಳು.",
    basedOn: (n: number) => `${n} ಭಕ್ತರ ಅಭಿಪ್ರಾಯಗಳ ಆಧಾರದ ಮೇಲೆ`,
    share: "ನಿಮ್ಮ ಅನುಭವ ಹಂಚಿಕೊಳ್ಳಿ",
    viewAll: "ಎಲ್ಲ ಅಭಿಪ್ರಾಯಗಳನ್ನು ನೋಡಿ",
    empty: "ಶ್ರಾದ್ಧಭವನದ ಬಗ್ಗೆ ನಿಮ್ಮ ಅನುಭವ ಹಂಚಿಕೊಳ್ಳುವ ಮೊದಲಿಗರಾಗಿ.",
    loading: "ಅಭಿಪ್ರಾಯಗಳನ್ನು ತರಲಾಗುತ್ತಿದೆ…",
    loadError: "ಸದ್ಯಕ್ಕೆ ಅಭಿಪ್ರಾಯಗಳನ್ನು ತರಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ನಂತರ ಪ್ರಯತ್ನಿಸಿ.",
    featured: "ವಿಶೇಷ",
    form: {
      title: "ನಿಮ್ಮ ಅನುಭವ ಹಂಚಿಕೊಳ್ಳಿ",
      description:
        "ನಿಮ್ಮ ಮಾತು ಇತರ ಕುಟುಂಬಗಳಿಗೆ ಸಹಾಯವಾಗುತ್ತದೆ. ಪರಿಶೀಲನೆಯ ನಂತರ ಪ್ರಕಟಿಸಲಾಗುವುದು.",
      name: "ಹೆಸರು",
      namePh: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು",
      mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (ಐಚ್ಛಿಕ, ಸಾರ್ವಜನಿಕವಾಗಿ ತೋರಿಸುವುದಿಲ್ಲ)",
      mobilePh: "10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
      email: "ಇಮೇಲ್ (ಐಚ್ಛಿಕ, ಸಾರ್ವಜನಿಕವಾಗಿ ತೋರಿಸುವುದಿಲ್ಲ)",
      emailPh: "you@example.com",
      service: "ಕಾರ್ಯ / ಸೇವೆ (ಐಚ್ಛಿಕ)",
      servicePh: "ಕಾರ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      rating: "ನಿಮ್ಮ ರೇಟಿಂಗ್",
      review: "ನಿಮ್ಮ ಅಭಿಪ್ರಾಯ",
      reviewPh: "ಭವನದಲ್ಲಿನ ನಿಮ್ಮ ಅನುಭವವನ್ನು ಬರೆಯಿರಿ…",
      consent: "ನನ್ನ ಹೆಸರು ಮತ್ತು ಅಭಿಪ್ರಾಯವನ್ನು ಈ ಜಾಲತಾಣದಲ್ಲಿ ಪ್ರಕಟಿಸಲು ನಾನು ಒಪ್ಪುತ್ತೇನೆ.",
      submit: "ಅಭಿಪ್ರಾಯ ಸಲ್ಲಿಸಿ",
      submitting: "ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ…",
      cancel: "ರದ್ದುಮಾಡಿ",
      success:
        "ನಿಮ್ಮ ಅನುಭವ ಹಂಚಿಕೊಂಡಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಅಭಿಪ್ರಾಯವನ್ನು ಅನುಮೋದನೆಗಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ.",
      close: "ಮುಚ್ಚಿ",
      errors: {
        name: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
        mobile: "ಸರಿಯಾದ 10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.",
        email: "ಸರಿಯಾದ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ.",
        rating: "ದಯವಿಟ್ಟು ರೇಟಿಂಗ್ ಆಯ್ಕೆಮಾಡಿ.",
        review: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಅನುಭವದ ಬಗ್ಗೆ ಬರೆಯಿರಿ.",
        reviewMax: "ಅಭಿಪ್ರಾಯ 1500 ಅಕ್ಷರಗಳಿಗಿಂತ ಕಡಿಮೆ ಇರಬೇಕು.",
        consent: "ದಯವಿಟ್ಟು ಪ್ರಕಟಣೆಗೆ ಒಪ್ಪಿಗೆ ನೀಡಿ.",
        submit: "ಅಭಿಪ್ರಾಯ ಸಲ್ಲಿಸಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      },
    },
  },
} as const;
