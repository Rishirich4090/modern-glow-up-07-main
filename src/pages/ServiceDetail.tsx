import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { EnquiryForm } from "@/components/EnquiryForm";
import { COLLEGE_KEYS, SERVICES } from "@/lib/site-data";

const CONTENT: Record<string, { intro: string; sections: { title: string; text?: string; bullets?: string[] }[] }> = {
  "admission-guidance": {
    intro: "Securing admission in your dream college is a major milestone. Our admission guidance helps you navigate every step — from shortlisting colleges to filling forms, preparing for entrance exams, interviews, and document verification.",
    sections: [
      { title: "Application Strategy", text: "We help you build a strong application — from selecting the right colleges to crafting standout statements of purpose." },
      { title: "Entrance Exam Prep", text: "Personalised study plans and resources for CUET, JEE, NEET, CLAT, BBA-CET, NIMCET and more." },
      { title: "Interview Coaching", text: "Mock interviews and personality development sessions so you walk in with confidence." },
      { title: "Documentation Support", text: "End-to-end help with forms, certificates, transcripts and verification — no missed deadlines." },
    ],
  },
  "college-selection": {
    intro: "Choosing the right college shapes the next four years — and your career. We help you evaluate colleges across 10 critical parameters to find the one that truly fits.",
    sections: [
      { title: "Key Factors We Evaluate", bullets: COLLEGE_KEYS.map((k) => `${k.title} — ${k.desc}`) },
    ],
  },
  "career-counselling": {
    intro: "Not sure what to study? Confused between streams? Our certified counsellors use psychometric tools, one-on-one sessions and industry insights to help you discover your ideal career path.",
    sections: [
      { title: "Psychometric Assessment", text: "Science-backed tests reveal your strengths, interests and personality fit for different careers." },
      { title: "1-on-1 Counselling", text: "Deep conversations with experienced counsellors — no rushed advice, no generic pitches." },
      { title: "Career Roadmap", text: "Walk away with a clear, written plan: courses, colleges, exams, timelines and backup options." },
      { title: "Parent Guidance", text: "We also work with parents so the whole family is aligned and supportive." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const content = slug ? CONTENT[slug] : undefined;

  if (!service || !content) return <Navigate to="/services" replace />;

  return (
    <>
      <SEO title={`${service.title} — Navyukti Consultancy`} description={service.short} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={content.intro}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.title }]}
      />

      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {content.sections.map((sec, i) => (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-3xl p-7 shadow-card border border-border/50"
              >
                <h2 className="font-display font-bold text-xl text-secondary mb-3">{sec.title}</h2>
                {sec.text && <p className="text-muted-foreground leading-relaxed">{sec.text}</p>}
                {sec.bullets && (
                  <ul className="grid sm:grid-cols-2 gap-3 mt-2">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-secondary/90">
                        <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={18} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
          <aside className="lg:sticky lg:top-28 self-start">
            <EnquiryForm title="Talk to an expert" description="Free, no-obligation counselling." />
          </aside>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
