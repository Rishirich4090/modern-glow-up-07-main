import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  breadcrumb?: { label: string; to?: string }[];
}

export const PageHero = ({ eyebrow, title, subtitle, children, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-12 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1">
                {b.to ? (
                  <Link to={b.to} className="hover:text-primary">{b.label}</Link>
                ) : (
                  <span className="text-secondary font-medium">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight size={12} />}
              </span>
            ))}
          </nav>
        )}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-secondary leading-tight">
            {title}
          </h1>
          {subtitle && <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl">{subtitle}</p>}
          {children && <div className="mt-4">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
};
