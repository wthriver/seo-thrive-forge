
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, Search, Smartphone, Code, ShoppingCart, Palette, MapPin, Star, Clock } from 'lucide-react';
import seoData from '@/data/seoData.json';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import HardLink from '@/components/HardLink';

const CountryServicesPage = () => {
  const { country } = useParams();
  const countryData = seoData.countries.find(c => c.code === country);

  const structuredData = countryData ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebThriver",
    "url": "https://webthriver.com",
    "description": `Professional digital services in ${countryData.name}`,
    "areaServed": {
      "@type": "Country",
      "name": countryData.name
    },
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "E-commerce Development",
      "Digital Marketing",
      "UI/UX Design",
      "Software Development"
    ]
  } : null;

  if (!countryData) {
    return <div>Country not found</div>;
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

  const countryTestimonials = seoData.testimonials.filter(t => t.country === country);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {countryData && (
        <SEOHead
          title={`Digital Services in ${countryData.name} | WebThriver`}
          description={`Professional digital services in ${countryData.name}. Web development, mobile apps, e-commerce, and digital marketing solutions for businesses in ${countryData.name}.`}
          keywords={`digital services, ${countryData.name}, web development, mobile app development, e-commerce, digital marketing, UI/UX design, software development`}
          canonical={`https://webthriver.com/services/${country}`}
          ogTitle={`Digital Services in ${countryData.name} | WebThriver`}
          ogDescription={`Transform your business with professional digital services in ${countryData.name}. Local expertise, global standards.`}
          structuredData={structuredData}
        />
      )}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full w-full max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Digital Services in {countryData.name}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 break-words leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Professional Digital Services
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-slate-700">
                in {countryData.name}
              </span>
            </h1>
            
            <p className="text-xl md:text-lg md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Transform your business with our comprehensive digital solutions designed specifically for the {countryData.name} market. From web development to digital marketing, we deliver results that drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <HardLink to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg group w-full sm:w-auto">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </HardLink>
              <HardLink to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg w-full sm:w-auto">
                  Free Consultation
                </Button>
              </HardLink>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                <span className="text-slate-700 font-medium">500+ Projects in {countryData.name}</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200">
                <MapPin className="w-4 h-4 mr-2 text-green-600" />
                <span className="text-slate-700 font-medium">Local {countryData.name} Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Services in {countryData.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {seoData.services.map((service, index) => {
                const ServiceIcon = getServiceIcon(service.slug);
                const serviceUrl = `/${service.slug}/${country}`;
                
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
                          {service.name}
                        </h3>
                      </div>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {service.short_description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500">Delivery:</span>
                          <span className="font-semibold text-blue-600">{service.delivery_time}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-slate-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <HardLink to={serviceUrl}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group-hover:shadow-lg transition-all">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </HardLink>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Country */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Why Choose WebThriver in {countryData.name}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { 
                  title: `Local ${countryData.name} Expertise`, 
                  description: `Deep understanding of ${countryData.name} market dynamics, consumer behavior, and business regulations. Our local team ensures cultural relevance and market-specific solutions.` 
                },
                { 
                  title: 'Proven Track Record', 
                  description: `Successfully delivered 500+ projects across ${countryData.name} with measurable business impact. Our clients see average growth of 300% within the first year.` 
                },
                { 
                  title: 'Competitive Pricing', 
                  description: `Transparent pricing in ${countryData.currency} with no hidden costs. Flexible payment options and financing available for businesses in ${countryData.name}.` 
                },
                { 
                  title: 'Latest Technology', 
                  description: `We use cutting-edge technologies and frameworks to ensure your digital solutions stay ahead of competition and deliver exceptional performance.` 
                },
                { 
                  title: 'Local Support', 
                  description: `Dedicated support team in ${countryData.name} timezone. 24/7 technical assistance, regular updates, and ongoing maintenance for all our projects.` 
                },
                { 
                  title: 'Compliance & Security', 
                  description: `Full compliance with ${countryData.name} data protection laws and industry regulations. Enterprise-grade security and privacy protection.` 
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {countryTestimonials.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Success Stories from {countryData.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {countryTestimonials.map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 md:p-6">
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

      {/* Popular Cities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Serving Businesses Across {countryData.name}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {countryData.popular_cities.map((city, index) => (
                <div key={index} className="text-center p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800">{city}</h3>
                  <p className="text-sm text-slate-600">Digital Services</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="w-full w-full max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business in {countryData.name}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of successful businesses in {countryData.name} who have chosen WebThriver for their digital transformation.
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

export default CountryServicesPage;
