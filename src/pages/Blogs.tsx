import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { BLOGS } from "@/lib/site-data";

const Blogs = () => (
  <>
    <SEO title="Blogs — Navyukti Consultancy" description="Latest articles on colleges, careers, admissions and scholarships in India." />
    <PageHero
      eyebrow="Blogs"
      title="Insights for smarter decisions."
      subtitle="Career advice, college guides and scholarship updates — written by our counsellors."
      breadcrumb={[{ label: "Home", to: "/" }, { label: "Blogs" }]}
    />
    <section className="section-padding">
      <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOGS.concat(BLOGS).map((b, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border/50 hover:shadow-elegant hover:-translate-y-1 transition-all"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center">
              <BookOpen className="text-primary/40" size={56} />
            </div>
            <div className="p-6">
              <div className="text-xs text-muted-foreground mb-2">{b.date}</div>
              <h3 className="font-display font-semibold text-lg text-secondary group-hover:text-primary transition-colors">{b.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  </>
);

export default Blogs;
