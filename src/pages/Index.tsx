
import HardLink from '@/components/HardLink';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp, Globe, Smartphone, ShoppingCart, Phone, Mail, MapPin, Clock, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesGrid from '@/components/ServicesGrid';
import StatsCounter from '@/components/StatsCounter';
import BlogSection from '@/components/BlogSection';
import SEOHead from '@/components/SEOHead';
import seoData from '@/data/seoData.json';

const Index = () => {
  const structuredDataList = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "WebThriver",
      "url": "https://webthriver.com",
      "logo": "https://webthriver.com/logo.png",
      "description": "Leading digital agency in Bangladesh providing web development, e-commerce, mobile apps, and digital marketing services.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BD",
        "addressLocality": "Dhaka"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+880-1700-000000",
        "contactType": "customer service",
        "email": "hello@webthriver.com"
      },
      "sameAs": [
        "https://facebook.com/webthriver",
        "https://linkedin.com/company/webthriver"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "WebThriver",
      "url": "https://webthriver.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://webthriver.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webthriver.com" }
      ]
    }
  ];

  const featuredCountries = seoData.countries.slice(0, 8);
  const featuredServices = seoData.services.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      <SEOHead
        title="WebThriver - Custom Web Development Company | Bespoke Solutions 2026"
        description="WebThriver is a leading custom web development company specializing in bespoke websites, e-commerce, mobile apps, and digital marketing. Trusted by 500+ businesses worldwide since 2020."
        keywords="custom web development company, bespoke web development, custom web development services, web development agency, custom websites, e-commerce development, mobile app development, software development, digital marketing"
        canonical="https://webthriver.com"
        structuredData={structuredDataList}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full w-full max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 break-words leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Custom Web Development Company
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-blue-600">
                Building Bespoke Digital Solutions
              </span>
            </h1>
            <p className="text-xl md:text-lg md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Premier custom web development company crafting bespoke websites, e-commerce platforms, and mobile applications. Transform your business with our expert team since 2020.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <HardLink to="/web-development">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg group">
                  <span className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </HardLink>
              <HardLink to="/services">
                <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg">
                  View Our Services
                </Button>
              </HardLink>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                <span className="text-slate-700 font-medium">500+ Projects Delivered</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                <span className="text-slate-700 font-medium">5-Star Client Rating</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200">
                <Globe className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-slate-700 font-medium">10+ Countries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <StatsCounter />
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl sm:text-5xl font-bold mb-6 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Serving Clients Worldwide with Custom Solutions
              </h2>
              <p className="text-base md:text-xl text-slate-600 w-full max-w-3xl mx-auto leading-relaxed">
                As a global custom web development company, we provide bespoke digital services to businesses across the globe, with local expertise and international standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:p-6">
              {featuredCountries.map((country, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <HardLink to={`/services/${country.code}`}>
                      <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {country.name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2">Digital Services</p>
                    </HardLink>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-slate-600 mb-6">
                Available in United States, United Kingdom, Canada, Australia, Germany, France, UAE, Saudi Arabia, Bangladesh, Netherlands and more countries.
              </p>
              <HardLink to="/services">
                <Button variant="outline" size="lg">
                  View All Countries
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </HardLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl sm:text-5xl font-bold mb-6 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Custom Web Development Services
            </h2>
            <p className="text-base md:text-xl text-slate-600 w-full max-w-3xl mx-auto leading-relaxed">
              From custom web development to complete digital transformation, our custom web development company provides comprehensive solutions that help businesses thrive in the digital age.
            </p>
          </div>
          <ServicesGrid />
          
          <div className="text-center mt-12">
            <HardLink to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </HardLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl sm:text-5xl font-bold mb-6 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Why Choose WebThriver?
              </h2>
              <p className="text-base md:text-xl text-slate-600 w-full max-w-3xl mx-auto leading-relaxed">
                We combine technical expertise with deep understanding of global markets to deliver solutions that drive real business growth worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { 
                  icon: Award, 
                  title: 'Proven Track Record', 
                  description: 'Over 500 successful projects delivered across 10+ countries with 98% client satisfaction rate and measurable business impact.',
                  stat: '500+ Projects'
                },
                { 
                  icon: Users, 
                  title: 'Expert Global Team', 
                  description: 'Certified developers, designers, and digital marketers with extensive experience in modern technologies and international markets.',
                  stat: '50+ Experts'
                },
                { 
                  icon: Target, 
                  title: 'Results-Focused', 
                  description: 'We measure success by your business growth. Every solution is designed to achieve measurable results and ROI.',
                  stat: '300% Avg Growth'
                },
                { 
                  icon: Globe, 
                  title: 'Global Reach', 
                  description: 'Serving clients in USA, UK, Canada, Australia, Germany, France, UAE, Saudi Arabia, Bangladesh, and Netherlands.',
                  stat: '10+ Countries'
                },
                { 
                  icon: Clock, 
                  title: 'Fast Delivery', 
                  description: 'Efficient project management and agile development processes ensure timely delivery without quality compromise.',
                  stat: '100% On-Time'
                },
                { 
                  icon: CheckCircle, 
                  title: 'Quality Assurance', 
                  description: 'Rigorous testing, code reviews, and quality checks ensure every project meets the highest international standards.',
                  stat: 'Zero Defects'
                }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                    <div className="text-blue-600 font-bold text-lg">{item.stat}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl sm:text-5xl font-bold mb-6 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Popular Services Worldwide
              </h2>
              <p className="text-base md:text-xl text-slate-600 w-full max-w-3xl mx-auto leading-relaxed">
                Our most requested services that help businesses achieve digital transformation and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Web Development</h3>
                  <p className="text-slate-600 mb-6">Custom websites and web applications using React, Next.js, and modern frameworks.</p>
                  <HardLink to="/web-development">
                    <Button className="w-full">Learn More</Button>
                  </HardLink>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Mobile Apps</h3>
                  <p className="text-slate-600 mb-6">Native and cross-platform mobile applications for iOS and Android platforms.</p>
                  <HardLink to="/mobile-app-development">
                    <Button className="w-full">Learn More</Button>
                  </HardLink>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">E-commerce</h3>
                  <p className="text-slate-600 mb-6">Complete online stores with payment integration and inventory management.</p>
                  <HardLink to="/ecommerce-development">
                    <Button className="w-full">Learn More</Button>
                  </HardLink>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl sm:text-5xl font-bold mb-6 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                What Our Global Clients Say
              </h2>
              <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
                Success stories from businesses across the world who have transformed their operations with our digital solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {seoData.testimonials.slice(0, 6).map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-8">
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
                      <div className="text-xs text-slate-400 mt-1">
                        {seoData.countries.find(c => c.code === testimonial.country)?.name}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl sm:text-5xl font-bold mb-6 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Industries We Serve Globally
              </h2>
              <p className="text-base md:text-xl text-slate-600 w-full max-w-3xl mx-auto leading-relaxed">
                We have deep expertise across multiple industries, helping businesses of all sizes achieve their digital transformation goals worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-6">
              {seoData.industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">{industry.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{industry.description}</p>
                    </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full w-full max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-4xl sm:text-5xl font-bold mb-6 break-words bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base md:text-xl text-slate-600 mb-8 leading-relaxed">
              Join hundreds of successful businesses worldwide who have chosen WebThriver for their digital transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Global Support</h3>
                <p className="text-slate-600">24/7 support in multiple timezones</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-slate-600">hello@webthriver.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Worldwide</h3>
                <p className="text-slate-600">Serving 10+ countries globally</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HardLink to="/web-development">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg">
                  <span className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </HardLink>
              <HardLink to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg">
                  Get Free Consultation
                </Button>
              </HardLink>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="w-full w-full max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of successful businesses who have transformed their operations with our digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HardLink to="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  <span className="flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </HardLink>
              <HardLink to="/services">
                <Button variant="outline" size="lg" className="border-2 border-blue-300 text-white hover:bg-blue-800 px-8 py-4 text-lg">
                  View Pricing
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

export default Index;
