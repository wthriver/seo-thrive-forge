
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Globe, Users, Zap, Star, Smartphone, Code, ShoppingCart, Palette, PenTool, Search, Clock, MapPin, Phone, Mail } from 'lucide-react';
import seoData from '@/data/seoData.json';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface CountryServicePageProps {
  service: string;
}

const CountryServicePage = ({ service }: CountryServicePageProps) => {
  const { country } = useParams();
  const serviceData = seoData.services.find(s => s.slug === service);
  const countryData = seoData.countries.find(c => c.code === country);

  useEffect(() => {
    if (serviceData && countryData) {
      document.title = `${serviceData.title} in ${countryData.name} | WebThriver`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', 
        `Professional ${serviceData.name.toLowerCase()} services in ${countryData.name}. ${serviceData.short_description}. Contact us for a free consultation.`
      );
    }
  }, [serviceData, countryData]);

  if (!serviceData || !countryData) {
    return <div>Service or country not found</div>;
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
  const countryTestimonials = seoData.testimonials.filter(t => t.country === country);

  const faqs = [
    {
      question: `Why choose WebThriver for ${serviceData.name.toLowerCase()} in ${countryData.name}?`,
      answer: `We have extensive experience delivering ${serviceData.name.toLowerCase()} projects to clients in ${countryData.name}. Our team understands the local market dynamics, business requirements, and regulatory compliance needs specific to ${countryData.name}.`
    },
    {
      question: `What is the cost of ${serviceData.name.toLowerCase()} services in ${countryData.name}?`,
      answer: `Our ${serviceData.name.toLowerCase()} services in ${countryData.name} start from ${serviceData.pricing[country as keyof typeof serviceData.pricing] || serviceData.pricing.bd}. The final cost depends on project complexity, features required, and timeline. We provide detailed quotes after understanding your specific requirements.`
    },
    {
      question: `How long does a ${serviceData.name.toLowerCase()} project take in ${countryData.name}?`,
      answer: `Typical ${serviceData.name.toLowerCase()} projects in ${countryData.name} are completed within ${serviceData.delivery_time}. We provide realistic timelines based on project scope and maintain transparent communication throughout the development process.`
    },
    {
      question: `Do you provide ongoing support for ${serviceData.name.toLowerCase()} in ${countryData.name}?`,
      answer: `Yes, we provide comprehensive post-launch support for all our ${serviceData.name.toLowerCase()} projects in ${countryData.name}. This includes maintenance, updates, technical support, and performance optimization to ensure your solution continues to deliver results.`
    },
    {
      question: `What makes your ${serviceData.name.toLowerCase()} different in ${countryData.name}?`,
      answer: `Our ${serviceData.name.toLowerCase()} services in ${countryData.name} combine global best practices with local market insights. We use cutting-edge technologies while ensuring compliance with local regulations and business practices in ${countryData.name}.`
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
              <MapPin className="w-4 h-4 mr-2" />
              {serviceData.name} in {countryData.name}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {serviceData.title}
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-slate-700">
                in {countryData.name}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              {serviceData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg group">
                Get Started - {serviceData.pricing[country as keyof typeof serviceData.pricing] || serviceData.pricing.bd}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg">
                Free Consultation
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
                <MapPin className="w-4 h-4 mr-2 text-green-600" />
                <span className="text-slate-700 font-medium">Local {countryData.name} Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country-Specific Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Why Choose Our {serviceData.name} Services in {countryData.name}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: `Local ${countryData.name} Expertise`, 
                  description: `Deep understanding of ${countryData.name} market dynamics, business practices, and regulatory requirements for ${serviceData.name.toLowerCase()}.` 
                },
                { 
                  title: 'Proven Track Record', 
                  description: `Successfully delivered ${serviceData.name.toLowerCase()} projects for businesses across ${countryData.name} with measurable results and high client satisfaction.` 
                },
                { 
                  title: 'Competitive Pricing', 
                  description: `Transparent pricing starting from ${serviceData.pricing[country as keyof typeof serviceData.pricing] || serviceData.pricing.bd} with no hidden costs. Flexible payment options tailored for ${countryData.name} businesses.` 
                },
                { 
                  title: 'Latest Technology', 
                  description: `We use cutting-edge ${serviceData.technologies.join(', ')} and modern development practices to ensure your solution stays ahead of competition.` 
                },
                { 
                  title: 'Local Support Team', 
                  description: `Dedicated support team familiar with ${countryData.name} time zones and business hours. 24/7 technical assistance and ongoing maintenance.` 
                },
                { 
                  title: 'Compliance & Security', 
                  description: `Full compliance with ${countryData.name} data protection laws and industry regulations. Enterprise-grade security implementation.` 
                }
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
                    <p className="text-slate-600">Professional implementation of {feature.toLowerCase()} with industry best practices and latest technologies.</p>
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
              Our {serviceData.name} Process in {countryData.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.process.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step}</h3>
                  <p className="text-slate-600">Professional {step.toLowerCase()} tailored for {countryData.name} market requirements and business standards.</p>
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

      {/* Testimonials */}
      {countryTestimonials.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                What Our {countryData.name} Clients Say
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {countryTestimonials.map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-slate-800">{testimonial.name}</div>
                        <div className="text-sm text-slate-500">{testimonial.role}</div>
                        <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Ready to Start Your {serviceData.name} Project in {countryData.name}?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Contact our {countryData.name} team for a free consultation and detailed project quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call {countryData.name}</h3>
                <p className="text-slate-600">Available in {countryData.name} timezone</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-slate-600">24/7 response guaranteed</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Local Presence</h3>
                <p className="text-slate-600">{countryData.name} business hours</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg">
                <Link to="/contact" className="flex items-center">
                  Start Your Project - {serviceData.pricing[country as keyof typeof serviceData.pricing] || serviceData.pricing.bd}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg">
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

export default CountryServicePage;
