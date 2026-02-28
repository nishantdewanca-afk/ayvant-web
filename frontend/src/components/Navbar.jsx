import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Phone, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'IT Support', path: '/it-support' },
    { name: 'IT Consulting', path: '/it-consulting' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200/50" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" data-testid="nav-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_bc-it-solutions/artifacts/ensfyszf_Screenshot%202026-02-28%20at%2012.55.23%E2%80%AFAM.png" 
              alt="Ayvant IT & Cybersecurity" 
              className="h-[50px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-sm ${
                  isActive(link.path)
                    ? 'text-[#E31837] bg-red-50'
                    : 'text-zinc-700 hover:text-[#E31837] hover:bg-zinc-50'
                }`}
                data-testid={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Client Portal Link - GHL Integration Placeholder */}
            <a 
              href="https://ayvant-ca.app.clientclub.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 hover:text-[#E31837] transition-colors"
              data-testid="client-portal-link"
            >
              Client Portal <ExternalLink className="w-4 h-4" />
            </a>
            <Link to="/contact">
              <Button 
                className="bg-[#E31837] hover:bg-[#C4122C] text-white px-6 py-2 rounded-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                data-testid="nav-cta-button"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get a Free Assessment
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-sm text-zinc-700 hover:bg-zinc-100 transition-colors"
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-200 animate-fade-in" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-[#E31837] bg-red-50'
                    : 'text-zinc-700 hover:bg-zinc-50'
                }`}
                data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-zinc-200 space-y-3">
              <a 
                href="https://ayvant-ca.app.clientclub.net/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 text-zinc-700 font-medium"
              >
                Client Portal <ExternalLink className="w-4 h-4" />
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#E31837] hover:bg-[#C4122C] text-white py-3 rounded-sm font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Get a Free Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
