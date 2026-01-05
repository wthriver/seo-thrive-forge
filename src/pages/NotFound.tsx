import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import HardLink from '@/components/HardLink';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - 404 Error",
    "description": "The requested page could not be found",
    "url": `https://webthriver.com${location.pathname}`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEOHead
        title="404 - Page Not Found | WebThriver"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our digital services including web development, mobile apps, and digital marketing."
        canonical={`https://webthriver.com${location.pathname}`}
        structuredData={structuredData}
      />
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Page Not Found</h1>
            <p className="text-xl text-slate-600 mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HardLink to="/">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </HardLink>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
          
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Popular Pages:</h2>
            <div className="space-y-2">
              <HardLink to="/services" className="block text-blue-600 hover:text-blue-800 transition-colors">
                Our Services
              </HardLink>
              <HardLink to="/contact" className="block text-blue-600 hover:text-blue-800 transition-colors">
                Contact Us
              </HardLink>
              <HardLink to="/about" className="block text-blue-600 hover:text-blue-800 transition-colors">
                About Us
              </HardLink>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
