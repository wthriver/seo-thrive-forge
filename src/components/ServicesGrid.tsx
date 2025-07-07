
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Users, Zap } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom Next.js applications with modern frameworks and optimal performance',
      features: ['Next.js Development', 'React Applications', 'Full-Stack Solutions'],
      locations: ['Dhaka', 'Chittagong', 'Sylhet']
    },
    {
      icon: Zap,
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with integrated payment systems and inventory management',
      features: ['Shopify Development', 'WooCommerce', 'Custom Platforms'],
      locations: ['Dhaka', 'Rajshahi', 'Barishal']
    },
    {
      icon: Users,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that convert visitors into customers',
      features: ['User Research', 'Prototyping', 'Design Systems'],
      locations: ['Dhaka', 'Chittagong', 'Khulna']
    },
    {
      icon: Search,
      title: 'Digital Marketing',
      description: 'SEO and digital marketing strategies to grow your online presence',
      features: ['SEO Optimization', 'Content Strategy', 'PPC Campaigns'],
      locations: ['All Bangladesh', 'Remote Services']
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
              <h4 className="font-semibold text-slate-800 mb-3">Available in:</h4>
              <div className="flex flex-wrap gap-2">
                {service.locations.map((location, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors border-blue-200 group-hover:border-blue-600"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;
