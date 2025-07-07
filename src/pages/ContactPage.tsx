
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Ready to start your digital transformation journey? Let's discuss your project and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-slate-800">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+880 1700 000000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Service Interested In
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="ecommerce">E-commerce Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project requirements, timeline, and budget..."
                        required
                      ></textarea>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-slate-800">Contact Information</h2>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                    We're here to help you transform your business digitally. Reach out to us through any of the channels below, and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-lg mr-4">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">Phone</h3>
                          <p className="text-slate-600">+880 1700 000000</p>
                          <p className="text-sm text-slate-500">Call us 9 AM - 6 PM (GMT+6)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-lg mr-4">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">Email</h3>
                          <p className="text-slate-600">hello@webthriver.com</p>
                          <p className="text-sm text-slate-500">We'll respond within 2 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-lg mr-4">
                          <MapPin className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">Address</h3>
                          <p className="text-slate-600">Dhaka, Bangladesh</p>
                          <p className="text-sm text-slate-500">Serving clients nationwide</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-lg mr-4">
                          <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">Business Hours</h3>
                          <p className="text-slate-600">Mon - Fri: 9 AM - 6 PM</p>
                          <p className="text-sm text-slate-500">Saturday: 10 AM - 4 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
