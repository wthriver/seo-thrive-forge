
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Globe, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEOHead
        title="About WebThriver - Bangladesh's Leading Digital Transformation Company"
        description="Learn about WebThriver's journey from a small team to Bangladesh's top digital agency. 500+ successful projects, 50+ experts, and 5+ years of excellence."
        keywords="about webthriver, digital agency bangladesh, web development company, bangladesh tech company"
        canonical="https://webthriver.com/about"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                About WebThriver
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              We are Bangladesh's leading digital transformation company, helping businesses thrive in the digital age with innovative web solutions and strategic digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-slate-600">
              <p className="mb-6">
                Founded in 2019, WebThriver began with a simple mission: to help Bangladesh businesses succeed in the digital world. What started as a small team of passionate developers has grown into a full-service digital agency with over 50 experts.
              </p>
              <p className="mb-6">
                We've had the privilege of working with over 500 businesses across Bangladesh, from startups to large enterprises, helping them achieve their digital transformation goals. Our success is measured not just by the projects we deliver, but by the growth and success of our clients.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in web development, e-commerce, and digital marketing, always staying ahead of the latest trends and technologies to provide our clients with cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We strive for excellence in every project, never settling for good enough.'
                },
                {
                  icon: Users,
                  title: 'Client Success',
                  description: 'Your success is our success. We measure our achievements by your growth.'
                },
                {
                  icon: Target,
                  title: 'Innovation',
                  description: 'We embrace new technologies and creative solutions to stay ahead.'
                },
                {
                  icon: Globe,
                  title: 'Transparency',
                  description: 'Open communication and honest relationships build lasting partnerships.'
                }
              ].map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white">
                        <value.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business digitally.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
