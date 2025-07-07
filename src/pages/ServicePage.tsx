
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Globe, Users, Zap, Star, Smartphone, Code, ShoppingCart, Palette, PenTool, Search } from 'lucide-react';
import seoData from '@/data/seoData.json';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ServicePageProps {
  service: string;
}

const ServicePage = ({ service }: ServicePageProps) => {
  const serviceData = seoData.services.find(s => s.name === service);

  useEffect(() => {
    if (serviceData) {
      document.title = `${serviceData.title} | WebThriver`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', serviceData.description);
    }
  }, [serviceData]);

  if (!serviceData) {
    return <div>Service not found</div>;
  }

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

  const ServiceIcon = getServiceIcon(service);

  const faqs = [
    {
      question: `What makes your ${serviceData.title.toLowerCase()} different?`,
      answer: `Our ${serviceData.title.toLowerCase()} stands out because we combine technical expertise with deep understanding of the Bangladesh market. We use the latest technologies and follow industry best practices to deliver solutions that drive real business results.`
    },
    {
      question: `How long does a typical ${serviceData.title.toLowerCase()} project take?`,
      answer: `Project timelines vary based on complexity and requirements. Typically, our ${serviceData.title.toLowerCase()} projects are completed within ${serviceData.deliveryTime}. We provide detailed timelines during the initial consultation.`
    },
    {
      question: `What is included in your ${serviceData.title.toLowerCase()} pricing?`,
      answer: `Our ${serviceData.title.toLowerCase()} packages are comprehensive and include ${serviceData.features.slice(0, 3).join(', ')}, and more. We provide transparent pricing with no hidden costs.`
    },
    {
      question: `Do you provide ongoing support after project completion?`,
      answer: `Yes, we provide comprehensive post-launch support including maintenance, updates, technical support, and optimization services to ensure your solution continues to perform optimally.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />

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
                Get Started - {serviceData.pricing}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg">
                View Portfolio
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200">
                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-slate-700 font-medium">Delivery: {serviceData.deliveryTime}</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                <span className="text-slate-700 font-medium">98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              What's Included in Our {serviceData.title}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                    <p className="text-slate-600">Professional implementation of {feature.toLowerCase()} with industry best practices and latest technologies.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Why Choose WebThriver for {serviceData.title}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Expert Team', description: 'Skilled professionals with years of experience in Bangladesh market and modern technologies' },
                { title: 'Proven Results', description: 'Over 500 successful projects delivered with measurable business impact and client satisfaction' },
                { title: 'Latest Technology', description: 'We use cutting-edge tools and frameworks to ensure your solution stays ahead of competition' },
                { title: 'Local Understanding', description: 'Deep knowledge of Bangladesh business landscape, customer behavior, and market dynamics' },
                { title: 'Ongoing Support', description: '24/7 technical support, regular updates, and maintenance to keep your solution running optimally' },
                { title: 'Transparent Pricing', description: 'No hidden costs, clear pricing structure, and flexible payment options to suit your budget' }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our {serviceData.title} Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your business requirements, goals, and target audience through detailed consultation' },
                { step: '02', title: 'Planning', desc: 'Creating comprehensive project plan, timeline, and strategy tailored to your specific needs' },
                { step: '03', title: 'Development', desc: 'Building your solution using modern technologies with regular updates and quality assurance' },
                { step: '04', title: 'Launch & Support', desc: 'Deploying your solution and providing ongoing maintenance and technical support' }
              ].map((process, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-slate-600">{process.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-slate-300 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-slate-800">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                <Link to="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
