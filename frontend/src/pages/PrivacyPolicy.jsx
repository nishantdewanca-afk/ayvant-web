import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MessageSquare, Lock, FileText, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "February 28, 2026";

  return (
    <div data-testid="privacy-policy-page" className="bg-white">
      {/* Hero Section */}
      <section className="bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-[#E31837]" />
            <span className="text-[#E31837] font-semibold uppercase tracking-wide">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-zinc-400">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#E31837]" />
                Introduction
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Ayvant IT & Cybersecurity Inc. ("Ayvant," "we," "us," or "our") is committed to protecting your privacy 
                and safeguarding your personal information. This Privacy Policy explains how we collect, use, disclose, 
                and protect your personal information in accordance with the Personal Information Protection Act (PIPA) 
                of British Columbia and the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                By using our website, services, or communicating with us, you consent to the collection, use, and 
                disclosure of your personal information as described in this Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Information We Collect</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mb-4">
                <li>Fill out forms on our website (contact forms, quote requests, newsletter sign-ups)</li>
                <li>Communicate with us via email, phone, or text message</li>
                <li>Use our IT support services or client portal</li>
                <li>Engage with our live chat feature</li>
                <li>Subscribe to our newsletter or marketing communications</li>
              </ul>
              <p className="text-zinc-600 leading-relaxed mb-4">
                <strong>Types of information we may collect include:</strong>
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, business address</li>
                <li><strong>Business Information:</strong> Company name, job title, industry</li>
                <li><strong>Communication Records:</strong> Records of your communications with us</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information (collected automatically)</li>
                <li><strong>Service-Related Information:</strong> Information necessary to provide IT support services</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">How We Use Your Information</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>To provide and deliver IT support and cybersecurity services</li>
                <li>To respond to your inquiries and communicate with you</li>
                <li>To send service-related notifications and updates</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </div>

            {/* Communications Section */}
            <div className="mb-12 bg-zinc-50 p-8 rounded-sm border-l-4 border-[#E31837]">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-[#E31837]" />
                Communications Consent
              </h2>
              
              <div className="space-y-6">
                {/* Email Marketing */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#E31837]" />
                    Email Marketing
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    By subscribing to our newsletter or providing your email address, you consent to receive 
                    marketing emails from Ayvant IT & Cybersecurity Inc. These emails may include cybersecurity 
                    tips, IT insights, service updates, and promotional offers. In accordance with Canada's 
                    Anti-Spam Legislation (CASL), all marketing emails will include clear identification of the 
                    sender, our contact information, and an easy unsubscribe mechanism. You may withdraw your 
                    consent at any time by clicking the "unsubscribe" link in any email or by contacting us directly.
                  </p>
                </div>

                {/* Text Messaging */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#E31837]" />
                    Text Messaging (SMS)
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    If you provide your mobile phone number and consent to receive text messages, we may send you 
                    SMS communications regarding service appointments, urgent security alerts, support ticket updates, 
                    and promotional messages. Message and data rates may apply depending on your mobile carrier. 
                    You may opt out of text messages at any time by replying "STOP" to any message or by contacting 
                    us directly. Text messaging consent is not a condition of purchasing our services.
                  </p>
                </div>

                {/* Phone Calls */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#E31837]" />
                    Phone Calls
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    By providing your phone number, you consent to receive phone calls from Ayvant IT & Cybersecurity Inc. 
                    for purposes including responding to your inquiries, providing support services, discussing your 
                    IT needs, and follow-up communications. We respect your time and will make reasonable efforts to 
                    contact you during business hours unless you request otherwise. You may opt out of promotional 
                    calls at any time by informing us of your preference.
                  </p>
                </div>
              </div>
            </div>

            {/* We Do Not Sell Your Information */}
            <div className="mb-12 bg-green-50 p-8 rounded-sm border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-green-600" />
                We Do Not Sell Your Personal Information
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                <strong>Ayvant IT & Cybersecurity Inc. does not sell, rent, trade, or otherwise transfer your 
                personal information to third parties for their marketing purposes.</strong>
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Your trust is essential to our business. We are committed to maintaining the confidentiality of 
                your personal information and will only share it as described in this Privacy Policy or with your 
                explicit consent.
              </p>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">When We May Share Your Information</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We may share your personal information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us 
                in operating our business (e.g., cloud hosting, CRM systems), subject to confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, 
                or that of our clients or the public</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, 
                with appropriate notice provided to you</li>
                <li><strong>With Your Consent:</strong> In any other situation where you have provided explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Data Security</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                As a cybersecurity company, we take the protection of your personal information seriously. 
                We implement appropriate technical, administrative, and physical safeguards to protect your 
                information, including:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure access controls and authentication</li>
                <li>Regular security assessments and monitoring</li>
                <li>Employee training on privacy and security practices</li>
                <li>Incident response procedures</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Data Retention</h2>
              <p className="text-zinc-600 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes for 
                which it was collected, to comply with legal obligations, resolve disputes, and enforce our 
                agreements. When personal information is no longer needed, we will securely destroy or anonymize it.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Your Rights Under BC and Canadian Privacy Law</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Under PIPA (British Columbia) and PIPEDA (Canada), you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information held by us</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw your consent to the collection, use, or 
                disclosure of your personal information (subject to legal or contractual restrictions)</li>
                <li><strong>Complaint:</strong> File a complaint with the Office of the Information and Privacy 
                Commissioner for British Columbia or the Privacy Commissioner of Canada</li>
              </ul>
              <p className="text-zinc-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact our Privacy Officer using the contact information below.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and understand where our visitors come from. You can control cookie 
                preferences through your browser settings. Please note that disabling certain cookies may affect 
                website functionality.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Third-Party Links</h2>
              <p className="text-zinc-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review the privacy policies 
                of any third-party websites you visit.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-zinc-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or 
                legal requirements. We will post any changes on this page with an updated "Last Updated" date. 
                We encourage you to review this Privacy Policy periodically. Continued use of our services 
                after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-zinc-900 text-white p-8 rounded-sm">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-zinc-300 mb-6">
                If you have any questions about this Privacy Policy, wish to exercise your privacy rights, 
                or have concerns about our privacy practices, please contact our Privacy Officer:
              </p>
              <div className="space-y-3 text-zinc-300">
                <p><strong className="text-white">Ayvant IT & Cybersecurity Inc.</strong></p>
                <p>Privacy Officer</p>
                <p>20627 Fraser Hwy, Langley, BC V3A 4G4</p>
                <p>Email: <a href="mailto:hello@ayvant.ca" className="text-[#E31837] hover:underline">hello@ayvant.ca</a></p>
                <p>Phone: <a href="tel:+16042392090" className="text-[#E31837] hover:underline">(604) 239-2090</a></p>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-700">
                <p className="text-sm text-zinc-400">
                  You may also contact the Office of the Information and Privacy Commissioner for British Columbia 
                  at <a href="https://www.oipc.bc.ca" target="_blank" rel="noopener noreferrer" className="text-[#E31837] hover:underline">www.oipc.bc.ca</a> or 
                  the Privacy Commissioner of Canada at <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-[#E31837] hover:underline">www.priv.gc.ca</a>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
