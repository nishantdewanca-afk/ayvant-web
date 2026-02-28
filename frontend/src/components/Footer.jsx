import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Shield, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useEffect } from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'IT Support', path: '/it-support' },
    { name: 'IT Consulting', path: '/it-consulting' },
  ];

  const serviceAreas = [
    { name: 'IT Support in Vancouver', path: '/it-support-vancouver' },
    { name: 'IT Support in Surrey', path: '/it-support-surrey' },
    { name: 'IT Support in Langley', path: '/it-support-langley' },
    { name: 'IT Support in Burnaby', path: '/it-support-burnaby' },
    { name: 'IT Support in Richmond', path: '/it-support-richmond' },
    { name: 'IT Support in Coquitlam', path: '/it-support-coquitlam' },
    { name: 'IT Support in Port Moody', path: '/it-support-port-moody' },
    { name: 'IT Support in Delta', path: '/it-support-delta' },
    { name: 'IT Support in Abbotsford', path: '/it-support-abbotsford' },
    { name: 'IT Support in Chilliwack', path: '/it-support-chilliwack' },
  ];

  const industries = [
    'Law Firms',
    'Accounting Firms',
    'Immigration Consultants',
    'Healthcare',
    'Real Estate',
  ];

  // Load GHL form embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-zinc-900 text-white" data-testid="footer">
      {/* Newsletter Section with GHL Form */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Protected. Stay Informed.</h3>
              <p className="text-zinc-400">Get cybersecurity tips and IT insights delivered to your inbox.</p>
            </div>
            {/* GHL Newsletter Form */}
            <div className="w-full lg:w-[400px]" data-testid="newsletter-form">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/gzsd20VFQkODIdbrHWnn"
                style={{width: '100%', height: '120px', border: 'none', borderRadius: '0px'}}
                id="inline-gzsd20VFQkODIdbrHWnn"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Newsletter Form"
                data-height="120"
                data-layout-iframe-id="inline-gzsd20VFQkODIdbrHWnn"
                data-form-id="gzsd20VFQkODIdbrHWnn"
                title="Newsletter Form"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="https://customer-assets.emergentagent.com/job_bc-it-solutions/artifacts/gxout8lv_ayvant%20%281%29.png" 
              alt="Ayvant IT & Cybersecurity" 
              className="h-[50px] w-auto mb-6"
            />
            <p className="text-zinc-400 mb-6 leading-relaxed text-sm">
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
                    className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm"
                    data-testid={`footer-service-${service.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area.path}>
                  <Link 
                    to={area.path} 
                    className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6 opacity-0">More Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.slice(5).map((area) => (
                <li key={area.path}>
                  <Link 
                    to={area.path} 
                    className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200 text-sm"
                  >
                    {area.name}
                  </Link>
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
                <div className="text-zinc-400 text-sm">
                  <p className="font-medium text-white mb-1">Langley Office</p>
                  <p>20627 Fraser Hwy<br />Langley, BC V3A 4G4</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E31837] flex-shrink-0 mt-0.5" />
                <div className="text-zinc-400 text-sm">
                  <p className="font-medium text-white mb-1">Surrey Office</p>
                  <p>2677 192 St. Suite 102<br />Surrey, BC V3S 3X1</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E31837] flex-shrink-0" />
                <a href="tel:+16042392090" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  (604) 239-2090
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E31837] flex-shrink-0" />
                <a href="mailto:hello@ayvant.ca" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  hello@ayvant.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E31837] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">
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
              <Link to="/privacy-policy" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-zinc-500 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-zinc-500 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
