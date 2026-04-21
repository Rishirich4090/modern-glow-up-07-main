import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { EnquiryForm } from "@/components/EnquiryForm";

const AFFILIATIONS = [
  "Lovely Professional University",
  "Amity University",
  "Chandigarh University",
  "Sharda University",
  "Galgotias University",
  "Sandip University",
  "GD Goenka University",
  "Quantum University",
  "Mangalayatan University",
  "Glocal University",
  "Sun International Institute",
  "JIMS Group",
];

const Affiliations = () => (
  <>
    <SEO title="Our Affiliations — Navyukti Consultancy" description="Trusted by India's leading universities and colleges. We have direct tie-ups with top institutions." />
    <PageHero
      eyebrow="Our Affiliations"
      title="Trusted by India's top universities."
      subtitle="We work directly with leading institutions to give our students priority admissions, scholarships and authentic guidance."
      breadcrumb={[{ label: "Home", to: "/" }, { label: "Affiliations" }]}
    />
    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {AFFILIATIONS.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl p-5 shadow-soft border border-border/50 flex items-center gap-3 hover:border-primary/40 hover:shadow-card transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="text-primary" size={22} />
              </div>
              <div className="font-semibold text-secondary">{a}</div>
            </motion.div>
          ))}
        </div>
        <aside className="lg:sticky lg:top-28 self-start">
          <EnquiryForm title="Get college recommendations" description="Tell us your goals — we'll suggest the best fit." />
        </aside>
      </div>
    </section>
  </>
);

export default Affiliations;
