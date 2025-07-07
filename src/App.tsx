
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import ServicesOverview from "./pages/ServicesOverview";
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
          <Route path="/web-development-bangladesh" element={<ServicePage service="web-development" />} />
          <Route path="/ecommerce-development-bangladesh" element={<ServicePage service="ecommerce-development" />} />
          <Route path="/ui-ux-design-bangladesh" element={<ServicePage service="ui-ux-design" />} />
          <Route path="/digital-marketing-bangladesh" element={<ServicePage service="digital-marketing" />} />
          <Route path="/mobile-app-development-bangladesh" element={<ServicePage service="mobile-app-development" />} />
          <Route path="/software-development-bangladesh" element={<ServicePage service="software-development" />} />
          <Route path="/wordpress-development-bangladesh" element={<ServicePage service="wordpress-development" />} />
          <Route path="/shopify-development-bangladesh" element={<ServicePage service="shopify-development" />} />
          <Route path="/graphic-design-bangladesh" element={<ServicePage service="graphic-design" />} />
          <Route path="/content-writing-bangladesh" element={<ServicePage service="content-writing" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
