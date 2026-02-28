import { Link } from 'react-router-dom';
import { Cookie, Shield, Settings, BarChart3, Lock } from 'lucide-react';

export default function CookiePolicy() {
  const lastUpdated = "February 28, 2026";

  return (
    <div data-testid="cookie-policy-page" className="bg-white">
      {/* Hero Section */}
      <section className="bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-8 h-8 text-[#E31837]" />
            <span className="text-[#E31837] font-semibold uppercase tracking-wide">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Cookie Policy</h1>
          <p className="text-zinc-400">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">What Are Cookies?</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently, provide a better user experience, and 
                give website owners information about how their site is being used.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                This Cookie Policy explains how Ayvant IT & Cybersecurity Inc. ("Ayvant," "we," "us," or "our") uses 
                cookies and similar technologies on our website ayvant.ca.
              </p>
            </div>

            {/* Types of Cookies We Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Types of Cookies We Use</h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                We use only essential and functional cookies to operate our website. We do not currently run 
                advertising or use advertising cookies.
              </p>

              {/* Essential Cookies */}
              <div className="bg-zinc-50 p-6 rounded-sm mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-sm bg-[#E31837]/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-[#E31837]" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">Essential Cookies</h3>
                </div>
                <p className="text-zinc-600 leading-relaxed mb-3">
                  These cookies are necessary for the website to function properly. They enable basic features like 
                  page navigation, secure areas access, and remembering your preferences. The website cannot function 
                  properly without these cookies.
                </p>
                <ul className="list-disc pl-6 text-zinc-600 space-y-1 text-sm">
                  <li><strong>Session cookies:</strong> Maintain your session while browsing</li>
                  <li><strong>Security cookies:</strong> Help protect against security threats</li>
                  <li><strong>Cookie consent:</strong> Remember your cookie preferences</li>
                </ul>
              </div>

              {/* Functional Cookies */}
              <div className="bg-zinc-50 p-6 rounded-sm mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-sm bg-[#E31837]/10 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-[#E31837]" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">Functional Cookies</h3>
                </div>
                <p className="text-zinc-600 leading-relaxed mb-3">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences 
                  and settings for future visits.
                </p>
                <ul className="list-disc pl-6 text-zinc-600 space-y-1 text-sm">
                  <li><strong>Preference cookies:</strong> Remember your settings and choices</li>
                  <li><strong>Chat widget cookies:</strong> Enable our live chat functionality</li>
                  <li><strong>Form cookies:</strong> Remember form data to improve user experience</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-zinc-50 p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-sm bg-[#E31837]/10 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-[#E31837]" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">Analytics Cookies</h3>
                </div>
                <p className="text-zinc-600 leading-relaxed mb-3">
                  These cookies help us understand how visitors interact with our website by collecting and reporting 
                  information anonymously. This helps us improve our website and services.
                </p>
                <ul className="list-disc pl-6 text-zinc-600 space-y-1 text-sm">
                  <li><strong>Usage data:</strong> Pages visited, time spent, navigation patterns</li>
                  <li><strong>Technical data:</strong> Browser type, device information, general location</li>
                </ul>
              </div>
            </div>

            {/* No Advertising Cookies */}
            <div className="mb-12 bg-green-50 p-8 rounded-sm border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                We Do Not Use Advertising Cookies
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                Ayvant IT & Cybersecurity Inc. does not currently use advertising or tracking cookies. We do not 
                display third-party advertisements on our website, and we do not track your browsing activity 
                across other websites for advertising purposes.
              </p>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Third-Party Cookies</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Some cookies on our website are placed by third-party services we use to enhance functionality:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li><strong>Go High Level:</strong> Our CRM platform uses cookies for live chat functionality, 
                form submissions, and newsletter subscriptions</li>
                <li><strong>Google Maps:</strong> Used on our contact page to display our location</li>
              </ul>
              <p className="text-zinc-600 leading-relaxed mt-4">
                These third-party services have their own privacy and cookie policies. We encourage you to review 
                their policies for more information about how they use cookies.
              </p>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              
              <h3 className="text-lg font-bold text-zinc-900 mb-2">Browser Settings</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can typically find these 
                in the "Options" or "Preferences" menu of your browser. You can:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-1 mb-4">
                <li>View what cookies are stored on your device</li>
                <li>Delete all or specific cookies</li>
                <li>Block all cookies or cookies from specific sites</li>
                <li>Set your browser to notify you when a cookie is set</li>
              </ul>
              
              <p className="text-zinc-600 leading-relaxed mb-4">
                <strong>Please note:</strong> If you disable or delete cookies, some features of our website may not 
                work properly, and your user experience may be affected.
              </p>

              <h3 className="text-lg font-bold text-zinc-900 mb-2">Browser-Specific Instructions</h3>
              <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#E31837] hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#E31837] hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#E31837] hover:underline">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#E31837] hover:underline">Microsoft Edge</a></li>
              </ul>
            </div>

            {/* Cookie Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">How Long Do Cookies Stay on My Device?</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                The length of time a cookie stays on your device depends on the type of cookie:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li><strong>Session cookies:</strong> These are temporary and are deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> These remain on your device for a set period (typically 30 days 
                to 1 year) or until you delete them manually</li>
              </ul>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Changes to This Cookie Policy</h2>
              <p className="text-zinc-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
                or our data practices. Any changes will be posted on this page with an updated "Last Updated" date. 
                We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Related Policies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Related Policies</h2>
              <p className="text-zinc-600 leading-relaxed">
                For more information about how we collect, use, and protect your personal information, please see our{' '}
                <Link to="/privacy-policy" className="text-[#E31837] hover:underline">Privacy Policy</Link>. 
                For information about the terms governing your use of our website, please see our{' '}
                <Link to="/terms-of-service" className="text-[#E31837] hover:underline">Terms of Service</Link>.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-zinc-900 text-white p-8 rounded-sm">
              <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
              <p className="text-zinc-300 mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-3 text-zinc-300">
                <p><strong className="text-white">Ayvant IT & Cybersecurity Inc.</strong></p>
                <p>20627 Fraser Hwy, Langley, BC V3A 4G4</p>
                <p>Email: <a href="mailto:hello@ayvant.ca" className="text-[#E31837] hover:underline">hello@ayvant.ca</a></p>
                <p>Phone: <a href="tel:+16042392090" className="text-[#E31837] hover:underline">(604) 239-2090</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
