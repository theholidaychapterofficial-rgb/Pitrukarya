import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { useLang } from "@/i18n/LanguageProvider";

export function FloatingActions() {
  const { t } = useLang();
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.contact.chatWhatsApp}
        className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-hero-foreground shadow-sm transition-transform hover:scale-105 motion-reduce:transform-none"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${CONTACT.phone1.tel}`}
        aria-label={t.contact.callNow}
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform hover:scale-105 motion-reduce:transform-none"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
