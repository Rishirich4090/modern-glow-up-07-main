import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { SERVICES } from "@/lib/site-data";

const Icon = ({ name, ...rest }: { name: string; [k: string]: any }) => {
  const C = (Icons as any)[name] ?? Icons.Sparkles;
  return <C {...rest} />;
};

const Services = () => (
  <>
    <SEO title="Our Services — Navyukti Consultancy" description="Admission guidance, college selection and career counselling — everything you need under one roof." />
    <PageHero
      eyebrow="Our Services"
      title="Everything you need, in one place."
      subtitle="From discovering your career path to securing admission — we've got every step covered."
      breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
    />
    <section className="section-padding">
      <div className="container-custom grid md:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Link
              to={`/services/${s.slug}`}
              className="group block bg-card rounded-3xl p-8 shadow-card hover:shadow-elegant border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-2 h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
                <Icon name={s.icon} className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-display font-bold text-xl text-secondary mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.short}</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Services;
