
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  const projects = [
    {
      title: "BanglaShop E-commerce Platform",
      category: "E-commerce Development",
      description: "Complete e-commerce solution with payment gateway integration, inventory management, and multi-vendor support.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      results: "300% increase in online sales, 50% faster page load times"
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile App Development", 
      description: "Cross-platform financial services app with secure transactions and real-time analytics.",
      tech: ["React Native", "Firebase", "Node.js", "Express"],
      results: "10,000+ downloads in first month, 4.8 app store rating"
    },
    {
      title: "Healthcare Management System",
      category: "Software Development",
      description: "Comprehensive hospital management system with patient records, appointment scheduling, and billing.",
      tech: ["React", "PostgreSQL", "Python", "Django"],
      results: "60% reduction in administrative tasks, improved patient satisfaction"
    },
    {
      title: "Education Platform Redesign",
      category: "UI/UX Design",
      description: "Complete user experience overhaul for online learning platform with improved engagement.",
      tech: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      results: "85% improvement in user engagement, 40% increase in course completion"
    },
    {
      title: "Restaurant Chain Website",
      category: "Web Development",
      description: "Multi-location restaurant website with online ordering and delivery integration.",
      tech: ["WordPress", "WooCommerce", "Custom Theme", "API Integration"],
      results: "200% increase in online orders, improved brand presence"
    },
    {
      title: "Manufacturing Company Digital Transformation",
      category: "Digital Marketing",
      description: "Complete digital marketing strategy including SEO, social media, and content marketing.",
      tech: ["SEO", "Google Ads", "Facebook Ads", "Content Strategy"],
      results: "500% increase in website traffic, 150% growth in lead generation"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Discover how we've helped businesses across Bangladesh achieve their digital transformation goals through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-2">Results Achieved:</h4>
                      <p className="text-green-600 font-medium">{project.results}</p>
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create your next digital success story together.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">
                Start Your Project
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

export default PortfolioPage;
