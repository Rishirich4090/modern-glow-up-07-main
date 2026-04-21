import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { ScrollToTop } from "./ScrollToTop";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <div className="sm:hidden h-12" aria-hidden /> {/* spacer for mobile sticky call bar */}
    </div>
  );
};
