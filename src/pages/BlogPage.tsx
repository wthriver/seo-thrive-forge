import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "10 Essential Features Every E-commerce Website Needs in 2024",
      excerpt: "Discover the must-have features that can boost your online store's conversion rates and customer satisfaction. From advanced search functionality to AI-powered recommendations.",
      author: "WebThriver Team",
      date: "January 15, 2024",
      category: "E-commerce",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "The Complete Guide to SEO for Bangladesh Businesses",
      excerpt: "Learn how to dominate local search results and attract more customers with our comprehensive SEO strategy guide tailored for Bangladesh market.",
      author: "WebThriver Team", 
      date: "January 10, 2024",
      category: "Digital Marketing",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Mobile-First Design: Why It Matters for Your Business",
      excerpt: "Understand why mobile-first approach is crucial for your website's success in today's smartphone-dominated world and how to implement it effectively.",
      author: "WebThriver Team",
      date: "January 5, 2024", 
      category: "Web Development",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Explore the latest technologies and best practices for building web applications that can grow with your business needs.",
      author: "WebThriver Team",
      date: "December 28, 2023",
      category: "Web Development", 
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Digital Marketing Trends to Watch in 2024",
      excerpt: "Stay ahead of the competition with these emerging digital marketing trends that will shape the industry this year.",
      author: "WebThriver Team",
      date: "December 20, 2023",
      category: "Digital Marketing",
      readTime: "4 min read", 
      featured: false
    },
    {
      title: "UX/UI Design Principles for Better User Engagement",
      excerpt: "Learn the fundamental design principles that create exceptional user experiences and drive business results.",
      author: "WebThriver Team",
      date: "December 15, 2023",
      category: "UI/UX Design",
      readTime: "6 min read",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "E-commerce", "Digital Marketing", "UI/UX Design"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEOHead
        title="WebThriver Blog - Digital Marketing & Web Development Insights"
        description="Stay updated with the latest trends, tips, and strategies in web development, digital marketing, and business growth from WebThriver's expert team."
        keywords="web development blog, digital marketing tips, bangladesh tech blog, seo guide, ecommerce development"
        canonical="https://webthriver.com/blog"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                WebThriver Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Insights, tips, and strategies to help your business thrive in the digital world
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow group ${post.featured ? 'lg:col-span-2' : ''}`}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className={`font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors ${
                      post.featured ? 'text-2xl' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{post.readTime}</span>
                      <Link 
                        to="/blog/article" 
                        className="text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
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

export default BlogPage;