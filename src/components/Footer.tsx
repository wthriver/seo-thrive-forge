
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent block">
              WebThriver
            </Link>
            <p className="text-slate-400 mb-6 text-lg">
              Leading digital transformation company in Bangladesh. We help businesses grow with custom web development, e-commerce solutions, and digital marketing services.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Start Your Project
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Get Free Quote
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/web-development-bangladesh" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/ecommerce-development-bangladesh" className="hover:text-white transition-colors">E-commerce Development</Link></li>
              <li><Link to="/ui-ux-design-bangladesh" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/digital-marketing-bangladesh" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/mobile-app-development-bangladesh" className="hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link to="/software-development-bangladesh" className="hover:text-white transition-colors">Software Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
              <div className="text-slate-400 space-y-2">
                <p>📧 hello@webthriver.com</p>
                <p>📞 +880 1700 000000</p>
                <p>📍 Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400">© 2024 WebThriver. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
