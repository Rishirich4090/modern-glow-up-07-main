

# Navyukti Consultancy — Modern Redesign & Build

Rebuild the entire Navyukti Consultancy site as a modern, responsive, multi-page React app using the existing stack (React + Vite + Tailwind + shadcn/ui) plus Framer Motion for animations and Lucide for icons. The reference Wix site is the content source; the visual direction will be modern, conversion-focused, card-based, and mobile-first.

## Design system

- **Colors** (HSL tokens in `index.css`):
  - Primary: Orange `#FF6B00`
  - Secondary: Dark Navy `#0F172A`
  - Accent: Teal `#14B8A6`
  - Background: `#F8FAFC`, Text: `#1E293B`
  - Gradients (orange→amber, navy→slate) and soft shadow tokens
- **Typography**: Poppins for headings, Inter for body (Google Fonts), with a clear H1/H2/H3/body hierarchy
- **Components**: Rounded cards (radius 16–24px), glass panels, soft shadows, sticky floating navbar, animated CTA buttons, micro-interactions on hover/focus

## Pages & routes

1. **Home** `/`
2. **About NC** `/about`
3. **Services** `/services` (overview)
   - **Admission Guidance** `/services/admission-guidance`
   - **College Selection** `/services/college-selection`
   - **Career Counselling** `/services/career-counselling`
4. **Courses** `/courses` (BCA, MCA, BBA, MBA, B.Tech, BSc Nursing, B.Pharma, Diploma, B.Sc Agri, LLB, B.Lib, GNM)
5. **Our Affiliations** `/affiliations`
6. **Gallery** `/gallery`
7. **Blogs** `/blogs` (list + simple article cards)
8. **Contact** `/contact`
9. 404 (already exists, restyled)

## Key sections / components

- **Sticky Navbar**: transparent on top, solid + shadow on scroll, mobile hamburger drawer, "Book Free Counselling" CTA pill
- **Hero (Home)**: gradient background, big headline "Confused About Your Career?", sub-headline, two CTAs (Book Free Counselling / Explore Courses), floating illustration, scroll indicator
- **Services cards**: 3-card grid with icon, hover lift + glow, "Learn more" link to subpage
- **Why Choose Us**: 4–6 icon stat cards (100+ colleges, expert counsellors, etc.)
- **Process timeline**: 6-step visual flow (Search → Apply → Interview → Decide → Enroll → Support)
- **Popular Courses grid**: course cards with icon, name, "Know More"
- **Bihar Student Credit Card**: highlighted promo banner with CTA
- **India's Top Colleges**: carousel of college cards
- **Testimonials**: carousel with avatar, name, course, star rating, quote
- **Blog preview**: 3 latest cards with "View All"
- **Enquiry form** (reusable): floating-label inputs (Name, Mobile, Email, Course select, Message), client-side validation with react-hook-form + zod, success toast, "Confused about your career?" side panel — used on Home, every service page, Contact, Affiliations
- **Footer**: 4-column (Contact info, Quick links, Connect, Newsletter), social icons (Facebook, Instagram, Twitter, Telegram, LinkedIn, YouTube, WhatsApp), copyright bar
- **Floating WhatsApp button** + sticky mobile "Call Now" bar

## Functionality

- Fully responsive (mobile-first, tested at sm/md/lg/xl)
- React Router for all pages, scroll-to-top on route change
- Framer Motion: fade-in on scroll, stagger for cards, hover scale, page transitions
- Form submissions: validated client-side; on submit show success toast and clear (no backend wired — see note below)
- Accessible: semantic HTML, focus rings, alt text, keyboard nav for menu/carousel
- SEO: per-page `<title>` and meta description via document head updates

## Content

Sourced from the screenshots: hero copy, services descriptions, college selection key points (Accreditation, Ranking, Placement, Faculty, Campus Life, Cost, Location, Amenities, Activities, Accommodation), admission guidance steps, About / Mission & Vision, contact info (+91 9117757578, Navyukticonsultancy@gmail.com, Kharkhura Nawada, Loco Gate, Gaya, Bihar 823002).

## Note on "fully functional" form/backend

The enquiry form will be fully functional on the **frontend** (validation, UX, success state). To actually **deliver leads** (email, database, WhatsApp notification), a backend is needed. I'll wire the form to a clean handler so we can plug in **Lovable Cloud** (Supabase) right after — storing leads in a `leads` table and optionally emailing the owner. I'll flag this at the end of implementation so you can enable it in one click.

## Out of scope (can add next)

- Admin dashboard for leads
- Real blog CMS (will use static placeholder posts)
- Multi-language (Hindi/English toggle)
- Auth / student login

