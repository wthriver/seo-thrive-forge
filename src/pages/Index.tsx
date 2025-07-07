
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle, Users, Globe, Zap, Star, Award, Target, Clock, Phone, Mail, MapPin } from 'lucide-react';
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

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Digital Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From custom web development to complete digital transformation, we provide comprehensive solutions that help Bangladesh businesses thrive in the digital age.
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
                We combine technical expertise with deep understanding of the Bangladesh market to deliver solutions that drive real business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Award, 
                  title: 'Proven Track Record', 
                  description: 'Over 500 successful projects delivered across various industries in Bangladesh with 98% client satisfaction rate.',
                  stat: '500+ Projects'
                },
                { 
                  icon: Users, 
                  title: 'Expert Team', 
                  description: 'Certified developers, designers, and digital marketers with extensive experience in modern technologies.',
                  stat: '50+ Experts'
                },
                { 
                  icon: Target, 
                  title: 'Results-Focused', 
                  description: 'We measure success by your business growth. Every solution is designed to achieve measurable results.',
                  stat: '300% Avg Growth'
                },
                { 
                  icon: Globe, 
                  title: 'Latest Technology', 
                  description: 'We use cutting-edge frameworks and tools to ensure your digital presence stays ahead of competition.',
                  stat: 'Modern Tech Stack'
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
                  description: 'Rigorous testing, code reviews, and quality checks ensure every project meets the highest standards.',
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

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seoData.testimonials.map((testimonial, index) => (
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Industries We Serve
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We have deep expertise across multiple industries, helping businesses of all sizes achieve their digital transformation goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoData.industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">{industry.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Our Proven Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A systematic approach that ensures every project is delivered on time, within budget, and exceeds expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Discovery & Planning', 
                  desc: 'We start by understanding your business goals, target audience, and technical requirements through detailed consultation and market research.' 
                },
                { 
                  step: '02', 
                  title: 'Strategy & Design', 
                  desc: 'Our team creates a comprehensive digital strategy with wireframes, mockups, and prototypes that align with your brand identity.' 
                },
                { 
                  step: '03', 
                  title: 'Development & Testing', 
                  desc: 'Using agile methodology, we build your solution with regular updates, thorough testing, and quality assurance at every stage.' 
                },
                { 
                  step: '04', 
                  title: 'Launch & Support', 
                  desc: 'We handle the deployment process and provide ongoing maintenance, updates, and technical support to ensure optimal performance.' 
                }
              ].map((process, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">{process.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{process.desc}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-slate-300 mx-auto" />
                    </div>
                  )}
                </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Let's discuss your project and create a digital solution that drives real business results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-slate-600">+880 1700 000000</p>
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
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-slate-600">Dhaka, Bangladesh</p>
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
