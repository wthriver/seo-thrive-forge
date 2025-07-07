
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle, Users, Globe, Zap, Star, Award, Target, Clock, Phone, Mail, MapPin, Code, Smartphone, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import StatsCounter from '@/components/StatsCounter';
import CTASection from '@/components/CTASection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import seoData from '@/data/seoData.json';

const Index = () => {
  const featuredCountries = seoData.countries.slice(0, 8);
  const featuredServices = seoData.services.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <StatsCounter />
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Serving Clients Worldwide
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We provide professional digital services to businesses across the globe, with local expertise and international standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredCountries.map((country, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Link to={`/services/${country.code}`}>
                      <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {country.name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2">Digital Services</p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-slate-600 mb-6">
                Available in United States, United Kingdom, Canada, Australia, Germany, France, UAE, Saudi Arabia, Bangladesh, Netherlands and more countries.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  View All Countries
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Digital Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From custom web development to complete digital transformation, we provide comprehensive solutions that help businesses thrive in the digital age.
            </p>
          </div>
          <ServicesGrid />
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Why Choose WebThriver?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We combine technical expertise with deep understanding of global markets to deliver solutions that drive real business growth worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Popular Services Worldwide
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Our most requested services that help businesses achieve digital transformation and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                  <p className="text-slate-600 mb-6">Custom websites and web applications using React, Next.js, and modern frameworks.</p>
                  <Button asChild className="w-full">
                    <Link to="/web-development">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
                  <p className="text-slate-600 mb-6">Native and cross-platform mobile applications for iOS and Android platforms.</p>
                  <Button asChild className="w-full">
                    <Link to="/mobile-app-development">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">E-commerce</h3>
                  <p className="text-slate-600 mb-6">Complete online stores with payment integration and inventory management.</p>
                  <Button asChild className="w-full">
                    <Link to="/ecommerce-development">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                What Our Global Clients Say
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Success stories from businesses across the world who have transformed their operations with our digital solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Industries We Serve Globally
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We have deep expertise across multiple industries, helping businesses of all sizes achieve their digital transformation goals worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
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
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg">
                <Link to="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
