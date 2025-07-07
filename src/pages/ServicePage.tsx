
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Globe, Users, Zap, Star } from 'lucide-react';
import seoData from '@/data/seoData.json';

interface ServicePageProps {
  service: string;
}

const ServicePage = ({ service }: ServicePageProps) => {
  const serviceData = seoData.services.find(s => s.name === service);

  useEffect(() => {
    if (serviceData) {
      document.title = serviceData.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', serviceData.description);
    }
  }, [serviceData]);

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  const getServiceIcon = (serviceName: string) => {
    switch (serviceName) {
      case 'web-development': return Globe;
      case 'ecommerce-development': return Zap;
      case 'ui-ux-design': return Users;
      case 'digital-marketing': return Star;
      default: return Globe;
    }
  };

  const ServiceIcon = getServiceIcon(service);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              WebThriver
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/web-development-bangladesh" className="text-slate-600 hover:text-blue-600 transition-colors">Web Development</Link>
              <Link to="/ecommerce-development-bangladesh" className="text-slate-600 hover:text-blue-600 transition-colors">E-commerce</Link>
              <Link to="/ui-ux-design-bangladesh" className="text-slate-600 hover:text-blue-600 transition-colors">UI/UX Design</Link>
              <Link to="/digital-marketing-bangladesh" className="text-slate-600 hover:text-blue-600 transition-colors">Digital Marketing</Link>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <ServiceIcon className="w-4 h-4 mr-2" />
              Professional {serviceData.title}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {serviceData.title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              {serviceData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Why Choose WebThriver for {serviceData.title}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Expert Team', description: 'Skilled professionals with years of experience in Bangladesh market' },
                { title: 'Custom Solutions', description: 'Tailored approaches that fit your specific business needs' },
                { title: 'Proven Results', description: 'Track record of successful projects across various industries' },
                { title: 'Local Understanding', description: 'Deep knowledge of Bangladesh business landscape and customer behavior' },
                { title: 'Ongoing Support', description: '24/7 support and maintenance to keep your business running smoothly' },
                { title: 'Competitive Pricing', description: 'Affordable solutions without compromising on quality' }
              ].map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your {serviceData.title.toLowerCase()} project and create something amazing together.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent block">
                WebThriver
              </Link>
              <p className="text-slate-400">
                Leading digital transformation company in Bangladesh
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/web-development-bangladesh" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link to="/ecommerce-development-bangladesh" className="hover:text-white transition-colors">E-commerce Solutions</Link></li>
                <li><Link to="/ui-ux-design-bangladesh" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                <li><Link to="/digital-marketing-bangladesh" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-slate-400">
                Ready to transform your business digitally?
              </p>
              <Button className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicePage;
