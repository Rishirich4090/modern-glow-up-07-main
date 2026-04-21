import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Send, MapPin, Phone, Mail, GraduationCap } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site-data";

export const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-secondary-foreground mt-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <GraduationCap className="text-primary-foreground" size={22} />
              </div>
              <div>
                <div className="font-display font-bold text-base leading-tight">{SITE.shortName}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Consultancy</div>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Helping students choose the right college and career path through expert counselling and personalised guidance.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-primary transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-primary">{SITE.phone}</a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary break-all">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Designed with care for students across India.</p>
        </div>
      </div>
    </footer>
  );
};
