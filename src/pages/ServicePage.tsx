
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Globe, Users, Zap, Star, Smartphone, Code, ShoppingCart, Palette, PenTool, Search, Clock, MapPin, Award, Target } from 'lucide-react';
import seoData from '@/data/seoData.json';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import HardLink from '@/components/HardLink';

interface ServicePageProps {
  service: string;
}

const ServicePage = ({ service }: ServicePageProps) => {
  const serviceData = seoData.services.find(s => s.slug === service);

  const structuredData = serviceData ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.title,
    "description": serviceData.description,
    "provider": {
      "@type": "Organization",
      "name": "WebThriver",
      "url": "https://webthriver.com"
    },
    "serviceType": serviceData.name
  } : null;

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
      default: return Globe;
    }
  };

  const ServiceIcon = getServiceIcon(service);

  const faqs = [
    {
      question: `What makes your ${serviceData.name.toLowerCase()} services different?`,
      answer: `Our ${serviceData.name.toLowerCase()} services stand out because we combine technical expertise with deep market understanding. We use the latest ${serviceData.technologies.join(', ')} technologies and follow industry best practices to deliver solutions that drive real business results.`
    },
    {
      question: `How long does a typical ${serviceData.name.toLowerCase()} project take?`,
      answer: `Project timelines vary based on complexity and requirements. Typically, our ${serviceData.name.toLowerCase()} projects are completed within ${serviceData.delivery_time}. We provide detailed timelines during the initial consultation and maintain transparent communication throughout the process.`
    },
    {
      question: `What technologies do you use for ${serviceData.name.toLowerCase()}?`,
      answer: `We use cutting-edge technologies including ${serviceData.technologies.join(', ')} to ensure your solution is built with modern, scalable, and maintainable code. Our technology choices are based on project requirements and long-term sustainability.`
    },
    {
      question: `Do you provide ongoing support after project completion?`,
      answer: `Yes, we provide comprehensive post-launch support including maintenance, updates, technical support, and optimization services. Our support packages ensure your solution continues to perform optimally and stays up-to-date with the latest security patches.`
    },
    {
      question: `Can you help with international expansion?`,
      answer: `Absolutely! We have experience delivering ${serviceData.name.toLowerCase()} projects globally. We can help you expand to multiple countries with localized solutions, compliance with local regulations, and market-specific optimizations.`
    }
  ];

  const availableCountries = seoData.countries.slice(0, 6); // Show first 6 countries

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {serviceData && (
        <SEOHead
          title={`${serviceData.title} | Custom Web Development Company 2026`}
          description={`${serviceData.description} Leading custom web development company delivering bespoke ${serviceData.name.toLowerCase()} solutions with cutting-edge technology.`}
          keywords={`${serviceData.name}, ${serviceData.technologies.join(', ')}, professional digital services, custom web development company, bespoke web solutions`}
          canonical={`https://webthriver.com/${service}`}
          ogTitle={`${serviceData.title} | WebThriver Custom Web Development`}
          ogDescription={`${serviceData.description} Expert ${serviceData.name.toLowerCase()} services from a leading custom web development company.`}
          structuredData={structuredData}
        />
      )}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <ServiceIcon className="w-4 h-4 mr-2" />
              Professional {serviceData.name}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {serviceData.title} 2026
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              {serviceData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg">
                View Portfolio
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200">
                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-slate-700 font-medium">Delivery: {serviceData.delivery_time}</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                <span className="text-slate-700 font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200">
                <Award className="w-4 h-4 mr-2 text-green-600" />
                <span className="text-slate-700 font-medium">500+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Technologies We Use for {serviceData.name}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {serviceData.technologies.map((tech, index) => (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              What's Included in Our {serviceData.name} Package?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                    <p className="text-slate-600">Professional implementation of {feature.toLowerCase()} with industry best practices and cutting-edge technologies.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our {serviceData.name} Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.process.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step}</h3>
                  <p className="text-slate-600">Professional {step.toLowerCase()} with attention to detail and focus on delivering exceptional results.</p>
                  {index < serviceData.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-slate-300 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Countries */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              {serviceData.name} Services Available Worldwide
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableCountries.map((country, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-6">
                    <HardLink to={`/${service}/${country.code}`} className="block hover:no-underline">
                      <div className="flex items-center mb-4">
                        <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                          {serviceData.name} in {country.name}
                        </h3>
                      </div>
                      <p className="text-slate-600 mb-4">
                        Professional {serviceData.name.toLowerCase()} services tailored for the {country.name} market.
                      </p>
                      <div className="flex justify-end items-center">
                        <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </HardLink>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <HardLink to="/services">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  View All Countries
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </HardLink>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Why Choose WebThriver for {serviceData.name}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Award,
                  title: 'Proven Expertise', 
                  description: `Over 500 successful ${serviceData.name.toLowerCase()} projects delivered globally with 98% client satisfaction rate and measurable business results.` 
                },
                { 
                  icon: Target,
                  title: 'Results-Focused Approach', 
                  description: `Every ${serviceData.name.toLowerCase()} project is designed to achieve specific business goals with measurable KPIs and ROI tracking.` 
                },
                { 
                  icon: Users,
                  title: 'Expert Team', 
                  description: `Certified professionals with extensive experience in ${serviceData.technologies.join(', ')} and modern development practices.` 
                },
                { 
                  icon: Clock,
                  title: 'Timely Delivery', 
                  description: `Efficient project management ensures ${serviceData.name.toLowerCase()} projects are delivered within ${serviceData.delivery_time} without compromising quality.` 
                },
                { 
                  icon: Globe,
                  title: 'Global Reach', 
                  description: `${serviceData.name} services available in multiple countries with local market expertise and cultural understanding.` 
                },
                { 
                  icon: CheckCircle,
                  title: 'Quality Assurance', 
                  description: `Rigorous testing, code reviews, and quality checks ensure every ${serviceData.name.toLowerCase()} project meets the highest standards.` 
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
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
              Ready to Get Started with {serviceData.name}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your {serviceData.name.toLowerCase()} project and create a solution that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HardLink to="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </HardLink>
              <HardLink to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                  Get Free Consultation
                </Button>
              </HardLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
