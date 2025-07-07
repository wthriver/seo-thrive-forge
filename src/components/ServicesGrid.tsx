
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Users, Zap, Smartphone, Code, ShoppingCart, Palette, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import seoData from '@/data/seoData.json';

const ServicesGrid = () => {
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

  // Show only the main 6 services on homepage
  const featuredServices = seoData.services.slice(0, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredServices.map((service, index) => {
        const ServiceIcon = getServiceIcon(service.name);
        const serviceUrl = `/${service.name.replace(/_/g, '-')}-bangladesh`;
        
        return (
          <Card 
            key={index}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
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
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description.substring(0, 120)}...
              </p>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-slate-500">Starting at:</span>
                  <span className="font-bold text-green-600 text-lg">{service.pricing}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Delivery:</span>
                  <span className="font-semibold text-blue-600">{service.deliveryTime}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group-hover:shadow-lg transition-all"
              >
                <Link to={serviceUrl}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
