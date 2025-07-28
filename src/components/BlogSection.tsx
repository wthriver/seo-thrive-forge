import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "10 Essential Features Every E-commerce Website Needs in 2024",
      excerpt: "Discover the must-have features that can boost your online store's conversion rates and customer satisfaction.",
      author: "WebThriver Team",
      date: "January 15, 2024",
      category: "E-commerce",
      readTime: "5 min read"
    },
    {
      title: "The Complete Guide to SEO for Bangladesh Businesses",
      excerpt: "Learn how to dominate local search results and attract more customers with our comprehensive SEO strategy guide.",
      author: "WebThriver Team", 
      date: "January 10, 2024",
      category: "Digital Marketing",
      readTime: "8 min read"
    },
    {
      title: "Mobile-First Design: Why It Matters for Your Business",
      excerpt: "Understand why mobile-first approach is crucial for your website's success in today's smartphone-dominated world.",
      author: "WebThriver Team",
      date: "January 5, 2024", 
      category: "Web Development",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Latest Insights & Tips
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in web development, digital marketing, and business growth strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
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
                      to="/blog" 
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
  );
};

export default BlogSection;