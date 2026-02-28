import { Link } from 'react-router-dom';
import { FileText, AlertTriangle, Shield, Scale, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  const lastUpdated = "February 28, 2026";

  return (
    <div data-testid="terms-of-service-page" className="bg-white">
      {/* Hero Section */}
      <section className="bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-[#E31837]" />
            <span className="text-[#E31837] font-semibold uppercase tracking-wide">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-zinc-400">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Ayvant IT & 
                Cybersecurity Inc. ("Ayvant," "we," "us," or "our"), a company registered in British Columbia, Canada. 
                By accessing our website at ayvant.ca, using our services, or communicating with us, you agree to be 
                bound by these Terms.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                If you do not agree with these Terms, please do not use our website or services. We reserve the right 
                to modify these Terms at any time, and your continued use of our services constitutes acceptance of 
                any modifications.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Description of Services</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Ayvant IT & Cybersecurity Inc. provides information technology support, cybersecurity services, and 
                IT consulting to businesses in Vancouver, the Lower Mainland, and surrounding areas of British Columbia. 
                Our services include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Managed IT support and help desk services</li>
                <li>Cybersecurity assessments and monitoring</li>
                <li>Network management and infrastructure support</li>
                <li>Cloud services and migration</li>
                <li>IT consulting and strategic planning</li>
                <li>Data backup and disaster recovery</li>
                <li>Hardware and software procurement</li>
              </ul>
            </div>

            {/* Use of Website */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Use of Website</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Use the website in any way that violates applicable federal, provincial, or local laws</li>
                <li>Attempt to gain unauthorized access to any part of the website or its related systems</li>
                <li>Use the website to transmit malware, viruses, or other harmful code</li>
                <li>Interfere with or disrupt the website or servers connected to it</li>
                <li>Collect or harvest personal information of other users without consent</li>
                <li>Use automated systems (bots, scrapers) to access the website without permission</li>
              </ul>
            </div>

            {/* Communications Consent */}
            <div className="mb-12 bg-zinc-50 p-8 rounded-sm border-l-4 border-[#E31837]">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Communications Consent</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">4.1 Email Communications</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    By providing your email address through our website forms, newsletter sign-up, or other means, 
                    you consent to receive electronic communications from us. These may include service updates, 
                    newsletters, promotional content, and other information related to our services. You may 
                    unsubscribe from marketing emails at any time by clicking the "unsubscribe" link or contacting 
                    us directly. Service-related communications may still be sent as necessary.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">4.2 Text Message (SMS) Communications</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    By providing your mobile phone number and opting in to receive text messages, you consent to 
                    receive SMS communications from Ayvant IT & Cybersecurity Inc. Message frequency varies. Message 
                    and data rates may apply. You can opt out at any time by replying "STOP" to any message. For help, 
                    reply "HELP" or contact us at (604) 239-2090. Consent to receive text messages is not required as 
                    a condition of purchasing services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">4.3 Telephone Communications</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    By providing your telephone number, you consent to receive calls from Ayvant IT & Cybersecurity Inc. 
                    regarding your inquiries, service requests, support matters, and promotional communications. Calls 
                    may be made using automated dialing systems. You may request to be placed on our internal do-not-call 
                    list at any time by contacting us.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">4.4 Compliance with CASL</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    All electronic communications from Ayvant IT & Cybersecurity Inc. comply with Canada's Anti-Spam 
                    Legislation (CASL). We obtain express or implied consent before sending commercial electronic 
                    messages and provide clear unsubscribe mechanisms in all communications.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Agreements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Service Agreements</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Specific IT support, cybersecurity, and consulting services are subject to separate service agreements 
                or statements of work. These Terms govern your use of our website and general interactions with us, 
                while specific service terms will be outlined in individual agreements.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                In the event of a conflict between these Terms and a specific service agreement, the service agreement 
                shall prevail with respect to that particular service.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Intellectual Property</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, and software, 
                is the property of Ayvant IT & Cybersecurity Inc. or its licensors and is protected by Canadian and 
                international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works from any content on this website 
                without our prior written consent.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12 bg-amber-50 p-8 rounded-sm border-l-4 border-amber-500">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                7. Limitation of Liability
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW IN BRITISH COLUMBIA AND CANADA:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mb-4">
                <li>Our website and its content are provided "as is" without warranties of any kind, either express or implied</li>
                <li>We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components</li>
                <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website</li>
                <li>Our total liability for any claims arising from these Terms shall not exceed the amount you paid us in the twelve (12) months preceding the claim</li>
              </ul>
              <p className="text-zinc-600 leading-relaxed">
                Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some 
                of the above limitations may not apply to you.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Indemnification</h2>
              <p className="text-zinc-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Ayvant IT & Cybersecurity Inc., its officers, directors, 
                employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) 
                arising from your use of the website, violation of these Terms, or infringement of any third-party rights.
              </p>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">9. Privacy</h2>
              <p className="text-zinc-600 leading-relaxed">
                Your use of our website and services is also governed by our{' '}
                <Link to="/privacy-policy" className="text-[#E31837] hover:underline">Privacy Policy</Link>, 
                which is incorporated into these Terms by reference. Please review our Privacy Policy to understand 
                how we collect, use, and protect your personal information.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">10. Third-Party Links and Services</h2>
              <p className="text-zinc-600 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the 
                content, privacy practices, or terms of service of any third-party sites. Your use of third-party 
                sites is at your own risk and subject to their respective terms and policies.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">11. Termination</h2>
              <p className="text-zinc-600 leading-relaxed">
                We reserve the right to terminate or suspend your access to our website at any time, without notice, 
                for any reason, including violation of these Terms. Upon termination, your right to use the website 
                will immediately cease.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">12. Governing Law and Jurisdiction</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the Province of British 
                Columbia and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Any disputes arising from these Terms or your use of our website shall be subject to the exclusive 
                jurisdiction of the courts of British Columbia, and you hereby consent to the personal jurisdiction 
                of such courts.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">13. Severability</h2>
              <p className="text-zinc-600 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable by a court of competent 
                jurisdiction, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">14. Entire Agreement</h2>
              <p className="text-zinc-600 leading-relaxed">
                These Terms, together with our Privacy Policy and any applicable service agreements, constitute the 
                entire agreement between you and Ayvant IT & Cybersecurity Inc. regarding the use of our website and 
                supersede all prior agreements and understandings.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">15. Changes to These Terms</h2>
              <p className="text-zinc-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon 
                posting on this page with an updated "Last Updated" date. Your continued use of the website after 
                any changes indicates your acceptance of the modified Terms. We encourage you to review these Terms 
                periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-zinc-900 text-white p-8 rounded-sm">
              <h2 className="text-2xl font-bold mb-4">16. Contact Information</h2>
              <p className="text-zinc-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
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
