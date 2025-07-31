
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HardLink from './HardLink';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <HardLink to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            WebThriver
          </HardLink>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <HardLink to="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</HardLink>
            <HardLink to="/services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</HardLink>
            <HardLink to="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</HardLink>
            <HardLink to="/portfolio" className="text-slate-600 hover:text-blue-600 transition-colors">Portfolio</HardLink>
            <HardLink to="/blog" className="text-slate-600 hover:text-blue-600 transition-colors">Blog</HardLink>
            <HardLink to="/faq" className="text-slate-600 hover:text-blue-600 transition-colors">FAQ</HardLink>
            <HardLink to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</HardLink>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4 pt-4">
              <HardLink to="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</HardLink>
              <HardLink to="/services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</HardLink>
              <HardLink to="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</HardLink>
              <HardLink to="/portfolio" className="text-slate-600 hover:text-blue-600 transition-colors">Portfolio</HardLink>
              <HardLink to="/blog" className="text-slate-600 hover:text-blue-600 transition-colors">Blog</HardLink>
              <HardLink to="/faq" className="text-slate-600 hover:text-blue-600 transition-colors">FAQ</HardLink>
              <HardLink to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</HardLink>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 w-full">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
