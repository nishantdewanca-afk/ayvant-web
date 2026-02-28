import { useState, useEffect, useCallback } from 'react';
import { X, Shield, AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback((e) => {
    // Only trigger when mouse leaves from the top of the viewport
    if (e.clientY <= 0 && !hasShown) {
      const popupShown = sessionStorage.getItem('ayvant-exit-popup-shown');
      if (!popupShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('ayvant-exit-popup-shown', 'true');
      }
    }
  }, [hasShown]);

  useEffect(() => {
    // Check if popup was already shown this session
    const popupShown = sessionStorage.getItem('ayvant-exit-popup-shown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Add event listener for mouse leave
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      data-testid="exit-intent-popup"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={closePopup}
      />
      
      {/* Popup Content */}
      <div className="relative bg-white rounded-sm shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors"
          data-testid="exit-popup-close"
        >
          <X className="w-5 h-5 text-zinc-600" />
        </button>

        {/* Header Banner */}
        <div className="bg-zinc-900 px-8 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-[#E31837] flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[#E31837] font-semibold text-sm uppercase tracking-wide">Wait! Before You Go...</p>
              <h2 className="text-2xl md:text-3xl font-black text-white">Is Your Data on the Dark Web?</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-zinc-900 mb-3">
              Get Your FREE Dark Web Scan
            </h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Cybercriminals trade stolen business data on the dark web every day. Your company's 
              passwords, client information, and financial data could be exposed right now – and you 
              wouldn't even know it.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-zinc-700">
                <CheckCircle className="w-5 h-5 text-[#E31837]" />
                <span className="text-sm font-medium">No Strings Attached</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700">
                <CheckCircle className="w-5 h-5 text-[#E31837]" />
                <span className="text-sm font-medium">No Obligation</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700">
                <Clock className="w-5 h-5 text-[#E31837]" />
                <span className="text-sm font-medium">Results in 48 Hours</span>
              </div>
            </div>

            <div className="bg-[#E31837]/5 border border-[#E31837]/20 rounded-sm p-4 mb-6">
              <p className="text-sm text-zinc-700">
                <strong className="text-[#E31837]">Perfect for Law Firms & Accountants:</strong> Your clients trust you with 
                their most sensitive information. Find out if that trust has been compromised.
              </p>
            </div>
          </div>

          {/* GHL Dark Web Scan Form */}
          <div className="border border-zinc-200 rounded-sm overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/57PnoaWrKZtZCOXqG99f"
              style={{width: '100%', height: '449px', border: 'none', borderRadius: '0px'}}
              id="inline-57PnoaWrKZtZCOXqG99f"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="DarkWeb Final Form"
              data-height="449"
              data-layout-iframe-id="inline-57PnoaWrKZtZCOXqG99f"
              data-form-id="57PnoaWrKZtZCOXqG99f"
              title="DarkWeb Final Form"
            />
          </div>

          <p className="text-xs text-zinc-500 text-center mt-4">
            Your information is secure and will never be shared. 
            View our <a href="/privacy-policy" className="text-[#E31837] hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
