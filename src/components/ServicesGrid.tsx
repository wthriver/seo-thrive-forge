
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development in Bangladesh',
      description: 'Custom Next.js applications with modern frameworks and optimal performance for businesses across Bangladesh',
      features: ['Next.js Development', 'React Applications', 'Full-Stack Solutions'],
      coverage: 'Nationwide Coverage',
      link: '/web-development-bangladesh'
    },
    {
      icon: Zap,
      title: 'E-commerce Development in Bangladesh',
      description: 'Scalable online stores with integrated payment systems and inventory management for Bangladesh businesses',
      features: ['Shopify Development', 'WooCommerce', 'Custom Platforms'],
      coverage: 'All Bangladesh',
      link: '/ecommerce-development-bangladesh'
    },
    {
      icon: Users,
      title: 'UI/UX Design in Bangladesh',
      description: 'User-centered design solutions that convert visitors into customers for Bangladesh companies',
      features: ['User Research', 'Prototyping', 'Design Systems'],
      coverage: 'Remote & On-site',
      link: '/ui-ux-design-bangladesh'
    },
    {
      icon: Search,
      title: 'Digital Marketing in Bangladesh',
      description: 'SEO and digital marketing strategies to grow your online presence across Bangladesh',
      features: ['SEO Optimization', 'Content Strategy', 'PPC Campaigns'],
      coverage: 'Bangladesh-wide Services',
      link: '/digital-marketing-bangladesh'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <Card 
          key={index}
          className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/60 backdrop-blur-sm"
        >
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold ml-4 text-slate-800">
                {service.title}
              </h3>
            </div>
            
            <p className="text-slate-600 mb-6 text-lg">
              {service.description}
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-slate-800 mb-3">Key Services:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-slate-800 mb-3">Service Area:</h4>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {service.coverage}
              </span>
            </div>
            
            <Button 
              asChild
              variant="outline" 
              className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors border-blue-200 group-hover:border-blue-600"
            >
              <Link to={service.link}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;
