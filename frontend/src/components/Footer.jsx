import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Shield, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'IT Support', path: '/it-support' },
    { name: 'IT Consulting', path: '/it-consulting' },
  ];

  const industries = [
    'Law Firms',
    'Accounting Firms',
    'Immigration Consultants',
    'Healthcare',
    'Real Estate',
  ];

  return (
    <footer className="bg-zinc-900 text-white" data-testid="footer">
      {/* Newsletter Section */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Protected. Stay Informed.</h3>
              <p className="text-zinc-400">Get cybersecurity tips and IT insights delivered to your inbox.</p>
            </div>
            {/* GHL Newsletter Integration Placeholder */}
            <div className="w-full lg:w-auto" id="ghl-newsletter-placeholder" data-testid="newsletter-form">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-w-[280px] h-12"
                  data-testid="newsletter-email-input"
                />
                <Button 
                  className="bg-[#E31837] hover:bg-[#C4122C] text-white px-8 h-12 font-semibold rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                  data-testid="newsletter-submit-btn"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-zinc-500 mt-2">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="https://customer-assets.emergentagent.com/job_3b3d2e10-bde7-4823-bcb1-d3b5421626ce/artifacts/lfqh4i3f_ayvant.png" 
              alt="Ayvant IT & Cybersecurity" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Your trusted partner for IT support and cybersecurity in Vancouver and the Lower Mainland. 
              We keep your business safe so you can focus on what matters most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-zinc-800 hover:bg-[#E31837] flex items-center justify-center transition-colors duration-300" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-zinc-800 hover:bg-[#E31837] flex items-center justify-center transition-colors duration-300" data-testid="social-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-zinc-800 hover:bg-[#E31837] flex items-center justify-center transition-colors duration-300" data-testid="social-twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#E31837]" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200"
                    data-testid={`footer-service-${service.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-bold mb-6">Industries We Serve</h4>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry} className="text-zinc-400">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E31837] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400">
                  Langley, British Columbia<br />
                  Serving Vancouver & Lower Mainland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E31837] flex-shrink-0" />
                <a href="tel:+1234567890" className="text-zinc-400 hover:text-white transition-colors">
                  (604) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E31837] flex-shrink-0" />
                <a href="mailto:info@ayvant.ca" className="text-zinc-400 hover:text-white transition-colors">
                  info@ayvant.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E31837] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  24/7 Emergency Support
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} Ayvant IT & Cybersecurity Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
