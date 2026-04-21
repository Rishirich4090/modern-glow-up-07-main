import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4">
      <div className="text-center max-w-md">
        <div className="font-display font-extrabold text-[140px] leading-none gradient-text">404</div>
        <h1 className="font-display font-bold text-3xl text-secondary mt-4">Page not found</h1>
        <p className="text-muted-foreground mt-3">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex gap-3 justify-center mt-8">
          <Button asChild className="bg-gradient-cta rounded-full">
            <Link to="/"><Home /> Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full" onClick={() => window.history.back()}>
            <button><ArrowLeft /> Go back</button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
