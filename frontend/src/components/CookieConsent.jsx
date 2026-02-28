import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { Button } from './ui/button';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('ayvant-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('ayvant-cookie-consent', 'accepted');
    localStorage.setItem('ayvant-cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[100] bg-zinc-900 border-t border-zinc-800 shadow-2xl animate-fade-in-up"
      data-testid="cookie-consent-banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-10 h-10 rounded-sm bg-[#E31837]/20 items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-[#E31837]" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white text-sm sm:text-base">
                We use cookies to enhance your browsing experience and analyze site traffic. 
                By clicking "OK", you consent to our use of cookies.
              </p>
              <Link 
                to="/cookie-policy" 
                className="text-[#E31837] hover:underline text-sm"
              >
                Learn more in our Cookie Policy
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              onClick={acceptCookies}
              className="bg-[#E31837] hover:bg-[#C4122C] text-white px-8 py-2 font-semibold rounded-sm transition-all duration-300"
              data-testid="cookie-accept-btn"
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
