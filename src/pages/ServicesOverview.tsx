
import HardLink from '@/components/HardLink';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, Zap, Users, Search, Smartphone, Code, ShoppingCart, Palette, PenTool } from 'lucide-react';
import seoData from '@/data/seoData.json';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const ServicesOverview = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebThriver",
    "url": "https://webthriver.com",
    "description": "Complete overview of professional digital services including web development, mobile app development, e-commerce solutions, and digital marketing",
    "hasOfferCatalog": {
      "@type": "OfferCatalog", 
      "name": "Digital Services",
      "itemListElement": seoData.services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  const getServiceIcon = (serviceName: string) => {
    switch (serviceName) {
      case 'web-development': return Globe;
      case 'ecommerce-development': return ShoppingCart;
      case 'ui-ux-design': return Palette;
      case 'digital-marketing': return Search;
      case 'mobile-app-development': return Smartphone;
      case 'software-development': return Code;
      case 'wordpress-development': return Globe;
      case 'shopify-development': return ShoppingCart;
      case 'graphic-design': return Palette;
      case 'content-writing': return PenTool;
      default: return Globe;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      <SEOHead
        title="Our Services - Complete Digital Solutions | WebThriver"
        description="Comprehensive digital services including web development, mobile app development, e-commerce solutions, UI/UX design, digital marketing, and software development across Bangladesh and globally."
        keywords="digital services, web development, mobile app development, e-commerce development, digital marketing, UI/UX design, software development, Bangladesh, professional services"
        canonical="https://webthriver.com/services"
        ogTitle="Our Services - Complete Digital Solutions | WebThriver"
        ogDescription="Transform your business with our comprehensive digital services. Professional web development, mobile apps, e-commerce, and digital marketing solutions."
        structuredData={structuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full w-full max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 break-words leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-lg md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Comprehensive digital solutions designed to transform your business in Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {seoData.services.map((service, index) => {
              const ServiceIcon = getServiceIcon(service.slug);
              const serviceUrl = `/${service.slug}`;

              return (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/60 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                        <ServiceIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold ml-4 text-slate-800">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Delivery:</span>
                        <span className="font-semibold text-blue-600">{service.delivery_time}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <HardLink 
                      to={serviceUrl}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-md font-medium flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </HardLink>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Industries We Serve
              </h2>
              <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
                Specialized solutions for diverse sectors across Bangladesh
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-6">
              {seoData.industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg md:text-xl font-semibold mb-3">{industry.title}</h3>
                    <p className="text-slate-600">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesOverview;
