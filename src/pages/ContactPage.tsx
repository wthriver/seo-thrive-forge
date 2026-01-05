
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import HardLink from '@/components/HardLink';
import seoData from '@/data/seoData.json';

const ContactPage = () => {
  const { toast } = useToast();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "WebThriver",
      "image": "https://webthriver.com/logo.png",
      "url": "https://webthriver.com",
      "email": "info@webthriver.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Global",
        "addressLocality": "Remote"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 10:00-16:00"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "250",
        "bestRating": "5"
      },
      "priceRange": "$$$",
      "areaServed": [
        "US",
        "UK",
        "CA",
        "AU",
        "DE",
        "FR",
        "AE",
        "SA",
        "BD",
        "NL"
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://webthriver.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://webthriver.com/contact"
        }
      ]
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const response = await fetch("https://formsubmit.co/ajax/info@webthriver.com", {
        method: "POST",
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        setShowSuccess(true);
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
          action: <CheckCircle className="h-4 w-4" />,
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEOHead
        title="Contact WebThriver - Custom Web Development Company | Free Consultation 2026"
        description="Get in touch with WebThriver for expert custom web development, e-commerce solutions, and digital marketing services. Free consultation available for businesses worldwide."
        keywords="contact webthriver, custom web development company, web development contact, free consultation, digital marketing services, e-commerce development, mobile app development, software development"
        canonical="https://webthriver.com/contact"
        ogTitle="Contact WebThriver - Custom Web Development Company | Free Consultation"
        ogDescription="Contact the leading custom web development company. Expert services in web development, e-commerce, mobile apps, UI/UX design, digital marketing, and software development. Free consultation."
        ogImage="https://webthriver.com/og-contact.jpg"
        structuredData={structuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full w-full max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 break-words leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl md:text-lg md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Ready to start your digital transformation journey? Let's discuss your project with our expert team and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  {!showSuccess ? (
                    <>
                      <h2 className="text-3xl font-bold mb-6 break-words text-slate-800">Send Us a Message</h2>
                      <form
                        id="contactForm"
                        action="https://formsubmit.co/ajax/info@webthriver.com"
                        method="POST"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        {/* Disable FormSubmit redirect */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="New Contact Form Submission - WebThriver" />

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="+1 234 567 8900"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Service Interested In
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select a service</option>
                            {seoData.services.map((service) => (
                              <option key={service.slug} value={service.slug}>
                                {service.name}
                              </option>
                            ))}
                            <option value="multiple">Multiple Services</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Project Details *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="Tell us about your project requirements, timeline, and budget..."
                            required
                          ></textarea>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 transition-all"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                          <Send className="ml-2 h-5 w-5" />
                        </Button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                        Thank You!
                      </h3>
                      <p className="text-slate-600 text-lg mb-6">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setShowSuccess(false)}
                        variant="outline"
                        className="border-2 border-slate-300 hover:border-blue-400"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 break-words text-slate-800">Contact Information</h2>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                    We're here to help you transform your business digitally. Reach out to us through any of the channels below, and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-lg mr-4">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">Email</h3>
                          <p className="text-slate-600">info@webthriver.com</p>
                          <p className="text-sm text-slate-500">We'll respond within 2 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center">
                        <div className="p-3 bg-green-100 rounded-lg mr-4">
                          <MapPin className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">Location</h3>
                          <p className="text-slate-600">Global Remote Team</p>
                          <p className="text-sm text-slate-500">Serving clients worldwide</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center">
                        <div className="p-3 bg-purple-100 rounded-lg mr-4">
                          <Clock className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">Business Hours</h3>
                          <p className="text-slate-600">Mon - Fri: 9 AM - 6 PM</p>
                          <p className="text-sm text-slate-500">Saturday: 10 AM - 4 PM (UTC+6)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Services Quick Links */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6 break-words text-slate-800">Our Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {seoData.services.map((service) => (
                      <HardLink
                        key={service.slug}
                        to={`/${service.slug}`}
                        className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        → {service.name}
                      </HardLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="w-full w-full max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-4xl sm:text-5xl font-bold mb-6 break-words">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 500+ satisfied clients who have transformed their business with our custom web development solutions.
            </p>
            <HardLink to="/services">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg">
                Explore Our Services
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </HardLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
