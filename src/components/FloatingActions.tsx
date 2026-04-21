import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

export const FloatingActions = () => {
  return (
    <>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
      {/* Mobile sticky call bar */}
      <a
        href={`tel:${SITE.phoneRaw}`}
        className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-gradient-cta text-primary-foreground py-3 flex items-center justify-center gap-2 font-semibold shadow-elegant"
      >
        <Phone size={18} /> Call Now — Free Counselling
      </a>
    </>
  );
};
