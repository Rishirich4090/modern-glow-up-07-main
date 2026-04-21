import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { COURSES } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

const Icon = ({ name, ...rest }: { name: string; [k: string]: any }) => {
  const C = (Icons as any)[name] ?? Icons.Sparkles;
  return <C {...rest} />;
};

const Courses = () => (
  <>
    <SEO title="Courses — Navyukti Consultancy" description="Explore popular UG and PG courses we guide students into — BCA, MCA, B.Tech, MBA, BSc Nursing, B.Pharma and more." />
    <PageHero
      eyebrow="Courses"
      title="Pick a course. Build a career."
      subtitle="Explore programs across technology, management, healthcare, law, agriculture and more."
      breadcrumb={[{ label: "Home", to: "/" }, { label: "Courses" }]}
    />
    <section className="section-padding">
      <div className="container-custom grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {COURSES.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="bg-card rounded-3xl p-6 shadow-card border border-border/50 hover:border-primary/40 hover:-translate-y-1 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
              <Icon name={c.icon} className="text-primary-foreground" size={26} />
            </div>
            <h3 className="font-display font-bold text-lg text-secondary">{c.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">Top colleges, expert guidance.</p>
            <Button asChild variant="link" className="px-0 mt-2 text-primary">
              <Link to="/contact">Know more <ArrowRight size={14} /></Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Courses;
