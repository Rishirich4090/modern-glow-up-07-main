import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "container-custom mx-4 sm:mx-auto px-4 sm:px-6 rounded-2xl transition-all duration-300",
          scrolled ? "glass shadow-card py-2" : "bg-transparent py-3"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <GraduationCap className="text-primary-foreground" size={22} />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-base leading-tight text-secondary">{SITE.shortName}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Consultancy</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-secondary/80 hover:text-primary hover:bg-primary/5"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              <Phone size={16} /> {SITE.phone}
            </a>
            <Button asChild className="hidden sm:inline-flex bg-gradient-cta hover:opacity-90 shadow-glow rounded-full">
              <Link to="/contact">Book Free Counselling</Link>
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10 text-secondary"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-3 pt-3 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2.5 rounded-lg text-sm font-medium",
                      isActive ? "text-primary bg-primary/10" : "text-secondary hover:bg-primary/5"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Button asChild className="mt-2 bg-gradient-cta rounded-full">
                <Link to="/contact">Book Free Counselling</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
