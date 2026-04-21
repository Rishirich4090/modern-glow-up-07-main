import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";

const Gallery = () => {
  const items = Array.from({ length: 12 }, (_, i) => i);
  const gradients = [
    "from-primary/30 to-accent/20",
    "from-accent/30 to-primary/20",
    "from-secondary/40 to-primary/30",
    "from-primary/40 to-secondary/30",
  ];
  return (
    <>
      <SEO title="Gallery — Navyukti Consultancy" description="Moments from our counselling sessions, college visits and student events." />
      <PageHero
        eyebrow="Gallery"
        title="Moments that matter."
        subtitle="A glimpse into our counselling sessions, campus visits, workshops and happy student stories."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />
      <section className="section-padding">
        <div className="container-custom grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`aspect-square rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} shadow-soft border border-border/50 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer`}
            >
              <Camera className="text-white/70" size={36} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
