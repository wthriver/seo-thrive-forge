
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle, Users, Globe, Zap, Star, Award, Target, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import StatsCounter from '@/components/StatsCounter';
import CTASection from '@/components/CTASection';

const Index = () => {
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for Bangladesh's growing market
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Why Choose WebThriver?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We deliver exceptional digital solutions that drive real business results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Award, 
                  title: 'Proven Expertise', 
                  description: 'Over 5 years of experience delivering successful digital projects across Bangladesh',
                  stat: '250+ Projects'
                },
                { 
                  icon: Users, 
                  title: 'Dedicated Team', 
                  description: 'Skilled professionals committed to your success with 24/7 support',
                  stat: '50+ Experts'
                },
                { 
                  icon: Target, 
                  title: 'Results-Driven', 
                  description: 'We focus on measurable outcomes that directly impact your business growth',
                  stat: '98% Success Rate'
                },
                { 
                  icon: Globe, 
                  title: 'Modern Technology', 
                  description: 'Cutting-edge tools and frameworks to keep your business ahead of the curve',
                  stat: 'Latest Tech Stack'
                },
                { 
                  icon: Clock, 
                  title: 'Fast Delivery', 
                  description: 'Efficient project management ensures timely delivery without compromising quality',
                  stat: 'On-Time Delivery'
                },
                { 
                  icon: CheckCircle, 
                  title: 'Quality Assurance', 
                  description: 'Rigorous testing and quality checks to ensure flawless performance',
                  stat: '100% Quality'
                }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <div className="text-blue-600 font-semibold text-lg">{item.stat}</div>
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
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Industries We Serve
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Specialized solutions for diverse sectors across Bangladesh
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Fintech', desc: 'Digital payment solutions', icon: '💳' },
                { name: 'Healthcare', desc: 'Medical tech platforms', icon: '🏥' },
                { name: 'Education', desc: 'E-learning systems', icon: '📚' },
                { name: 'Retail', desc: 'E-commerce platforms', icon: '🛍️' },
                { name: 'Manufacturing', desc: 'Industrial automation', icon: '🏭' },
                { name: 'Real Estate', desc: 'Property management', icon: '🏢' },
                { name: 'Food & Beverage', desc: 'Delivery platforms', icon: '🍕' },
                { name: 'Logistics', desc: 'Supply chain solutions', icon: '🚚' }
              ].map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                    <p className="text-slate-600 text-sm">{industry.desc}</p>
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Our Process
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your business needs and goals' },
                { step: '02', title: 'Strategy', desc: 'Developing a comprehensive digital strategy' },
                { step: '03', title: 'Development', desc: 'Building your solution with cutting-edge technology' },
                { step: '04', title: 'Launch & Support', desc: 'Deploying and providing ongoing maintenance' }
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

      {/* CTA Section */}
      <CTASection />

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

export default Index;
