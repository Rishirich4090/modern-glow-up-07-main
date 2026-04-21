import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { EnquiryForm } from "@/components/EnquiryForm";

const About = () => {
  const values = [
    { icon: Target, title: "Our Mission", text: "To empower every student with the right information, mentorship and tools to make confident career decisions." },
    { icon: Eye, title: "Our Vision", text: "To become India's most trusted education consultancy — known for honesty, care and outcomes." },
    { icon: Heart, title: "Our Values", text: "Student-first approach, complete transparency, and life-long support beyond admission." },
  ];

  return (
    <>
      <SEO title="About Navyukti Consultancy — Who We Are" description="Learn about Navyukti Consultancy — our mission, vision and student-first approach to education guidance." />
      <PageHero
        eyebrow="About Us"
        title="Guiding students. Building futures."
        subtitle="Navyukti Consultancy is a student-first education consultancy from Gaya, Bihar, helping thousands of students discover and reach the right college and career."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Story</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary mt-3 mb-5">
              Built on care, powered by experience
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For over a decade, Navyukti Consultancy has helped students navigate one of life's biggest decisions — choosing the right college and career path. We're a small, passionate team that treats every student like family.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We don't believe in one-size-fits-all advice. Each student gets a personalised plan based on their interests, strengths, budget and ambitions.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "100% transparent guidance — no hidden fees",
                "Direct tie-ups with top colleges across India",
                "Continued mentorship beyond admission",
                "Special support for Bihar Student Credit Card Scheme",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-secondary/90">
                  <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} /> <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {[
              { n: "5,000+", l: "Students Guided" },
              { n: "100+", l: "Partner Colleges" },
              { n: "12+", l: "Years Experience" },
              { n: "98%", l: "Success Rate" },
            ].map((s) => (
              <div key={s.l} className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
                <div className="font-display font-extrabold text-3xl gradient-text">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-secondary mt-3">Mission, vision & values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-3xl p-8 shadow-card border border-border/50 hover:shadow-elegant transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-5">
                  <v.icon className="text-primary-foreground" size={26} />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <EnquiryForm title="Have a question about us?" description="Drop your details — we'd love to chat." />
        </div>
      </section>
    </>
  );
};

export default About;
