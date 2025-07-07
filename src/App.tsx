
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import ServicesOverview from "./pages/ServicesOverview";
import CountryServicePage from "./pages/CountryServicePage";
import CountryServicesPage from "./pages/CountryServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          
          {/* Service-only pages */}
          <Route path="/web-development" element={<ServicePage service="web-development" />} />
          <Route path="/mobile-app-development" element={<ServicePage service="mobile-app-development" />} />
          <Route path="/ecommerce-development" element={<ServicePage service="ecommerce-development" />} />
          <Route path="/digital-marketing" element={<ServicePage service="digital-marketing" />} />
          <Route path="/ui-ux-design" element={<ServicePage service="ui-ux-design" />} />
          <Route path="/software-development" element={<ServicePage service="software-development" />} />
          
          {/* Country-specific service pages - Programmatic SEO */}
          <Route path="/web-development/:country" element={<CountryServicePage service="web-development" />} />
          <Route path="/mobile-app-development/:country" element={<CountryServicePage service="mobile-app-development" />} />
          <Route path="/ecommerce-development/:country" element={<CountryServicePage service="ecommerce-development" />} />
          <Route path="/digital-marketing/:country" element={<CountryServicePage service="digital-marketing" />} />
          <Route path="/ui-ux-design/:country" element={<CountryServicePage service="ui-ux-design" />} />
          <Route path="/software-development/:country" element={<CountryServicePage service="software-development" />} />
          
          {/* Country services overview pages */}
          <Route path="/services/:country" element={<CountryServicesPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
