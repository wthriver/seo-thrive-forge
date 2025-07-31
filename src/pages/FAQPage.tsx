import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does WebThriver offer?",
      answer: "WebThriver offers comprehensive digital services including web development, e-commerce development, mobile app development, UI/UX design, digital marketing, SEO, and software development. We specialize in creating custom solutions for businesses across Bangladesh."
    },
    {
      question: "How much does a website cost in Bangladesh?",
      answer: "Website costs vary based on complexity and features. Our basic websites start from ৳25,000, while e-commerce sites start from ৳50,000. Custom web applications can range from ৳100,000 to ৳500,000+. We provide detailed quotes after understanding your requirements."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "Development timelines depend on project complexity. A basic website takes 1-2 weeks, e-commerce sites take 3-4 weeks, and custom applications can take 2-6 months. We provide realistic timelines during our initial consultation."
    },
    {
      question: "Do you provide website maintenance services?",
      answer: "Yes, we offer comprehensive website maintenance packages including security updates, content updates, performance optimization, backup services, and technical support. Our maintenance plans start from ৳3,000 per month."
    },
    {
      question: "Can you help with digital marketing and SEO?",
      answer: "Absolutely! We provide complete digital marketing services including SEO, Google Ads, Facebook advertising, content marketing, and social media management. Our SEO services help businesses rank higher in search results and attract more customers."
    },
    {
      question: "Do you work with businesses outside Dhaka?",
      answer: "Yes, we serve clients throughout Bangladesh and internationally. We work remotely with businesses in all divisions including Chittagong, Sylhet, Rajshahi, Khulna, Barisal, and Rangpur. Distance is not a barrier to quality service."
    },
    {
      question: "What makes WebThriver different from other agencies?",
      answer: "We focus on results-driven solutions with transparent pricing, regular communication, and dedicated project management. Our team has 5+ years of experience, we've completed 500+ projects, and we provide ongoing support even after project completion."
    },
    {
      question: "Do you provide e-commerce solutions?",
      answer: "Yes, we specialize in e-commerce development using platforms like WooCommerce, Shopify, and custom solutions. Our e-commerce sites include payment gateway integration, inventory management, order tracking, and mobile optimization."
    },
    {
      question: "What is your payment process?",
      answer: "We typically work with a 50% advance payment to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers, mobile banking (bKash, Nagad), and international payments."
    },
    {
      question: "Do you provide training after website delivery?",
      answer: "Yes, we provide comprehensive training on how to manage your website, update content, add products (for e-commerce), and use the admin panel. We also provide video tutorials and documentation for future reference."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
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
          "name": "FAQ",
          "item": "https://webthriver.com/faq"
        }
      ]
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEOHead
        title="Frequently Asked Questions - WebThriver Digital Services"
        description="Get answers to common questions about web development, digital marketing, pricing, timelines, and services offered by WebThriver in Bangladesh."
        keywords="webthriver faq, web development questions, digital marketing faq, website cost bangladesh, development timeline"
        canonical="https://webthriver.com/faq"
        ogTitle="FAQ - WebThriver Digital Services"
        ogDescription="Find answers to frequently asked questions about our web development, digital marketing, and e-commerce services in Bangladesh."
        ogImage="https://webthriver.com/og-faq.jpg"
        structuredData={structuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Get answers to the most common questions about our digital services and processes
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-slate-800 pr-4">
                        {faq.question}
                      </h3>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;