import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SITE } from "@/lib/site-data";

const Contact = () => (
  <>
    <SEO title="Contact Navyukti Consultancy" description={`Get in touch — ${SITE.phone}, ${SITE.email}. Visit us in Gaya, Bihar.`} />
    <PageHero
      eyebrow="Contact"
      title="Let's talk about your future."
      subtitle="Reach out for a free counselling session — by call, email, WhatsApp or in person."
      breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
    />
    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: MapPin, title: "Visit Us", body: SITE.address },
            { icon: Phone, title: "Call Us", body: SITE.phone, href: `tel:${SITE.phoneRaw}` },
            { icon: Mail, title: "Email Us", body: SITE.email, href: `mailto:${SITE.email}` },
            { icon: Clock, title: "Office Hours", body: "Mon – Sat: 10:00 AM – 7:00 PM" },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-5 shadow-soft border border-border/50 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <c.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-secondary">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} className="text-muted-foreground text-sm hover:text-primary break-all">{c.body}</a>
                ) : (
                  <p className="text-muted-foreground text-sm">{c.body}</p>
                )}
              </div>
            </motion.div>
          ))}

          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-soft aspect-video">
            <iframe
              title="Navyukti Consultancy location"
              src="https://www.google.com/maps?q=Kharkhura+Nawada+Loco+Gate+Gaya+Bihar+823002&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <EnquiryForm title="Send us a message" description="Fill the form — we'll get back within 24 hours." />
        </div>
      </div>
    </section>
  </>
);

export default Contact;
