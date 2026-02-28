import { useEffect } from 'react';
import { 
  MapPin, Phone, Mail, Clock,
  CheckCircle, MessageSquare, Calendar
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Contact() {
  // Load GHL form embed script only
  useEffect(() => {
    const formScript = document.createElement('script');
    formScript.src = 'https://link.msgsndr.com/js/form_embed.js';
    formScript.async = true;
    document.body.appendChild(formScript);

    return () => {
      if (document.body.contains(formScript)) {
        document.body.removeChild(formScript);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office',
      lines: ['20627 Fraser Hwy', 'Langley, BC V3A 4G4'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['(604) 239-2090', '24/7 Emergency Support'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['hello@ayvant.ca'],
    },
  ];

  return (
    <div data-testid="contact-page">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20 md:py-24" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E31837]/10 border border-[#E31837]/30 rounded-sm text-[#E31837] text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Let's Start a
              <span className="text-[#E31837]"> Conversation</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Have questions? Need a quote? Just want to chat about your IT challenges? 
              We're here to help – no pressure, no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b border-zinc-200" data-testid="contact-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={`${info.title}-${index}`} className="flex items-start gap-4 p-4" data-testid={`contact-info-${index}`}>
                <div className="w-12 h-12 rounded-sm bg-[#E31837]/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-zinc-600 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-zinc-50" data-testid="contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-zinc-600 mb-8">
                Fill out the form below and we'll get back to you within one business day.
              </p>

              {/* GHL Contact Form */}
              <Card className="border-0 shadow-lg" data-testid="contact-form">
                <CardContent className="p-0">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/fo2EXkTq1ysY0kGsUGlY"
                    style={{width: '100%', height: '801px', border: 'none', borderRadius: '0px'}}
                    id="inline-fo2EXkTq1ysY0kGsUGlY"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Contact us Form"
                    data-height="801"
                    data-layout-iframe-id="inline-fo2EXkTq1ysY0kGsUGlY"
                    data-form-id="fo2EXkTq1ysY0kGsUGlY"
                    title="Contact us Form"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Response */}
              <Card className="border-0 shadow-md bg-zinc-900 text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                  <p className="text-zinc-400 mb-6">
                    For urgent IT issues or security concerns, call our support line directly. 
                    We're available 24/7 for emergencies.
                  </p>
                  <a href="tel:+16042392090">
                    <Button className="w-full bg-[#E31837] hover:bg-[#C4122C] py-6 font-bold" data-testid="emergency-call-btn">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (604) 239-2090
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Office Location */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-[#E31837]" />
                    <h3 className="text-xl font-bold text-zinc-900">Our Location</h3>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Office</h4>
                    <p className="text-zinc-600 text-sm">
                      20627 Fraser Hwy<br />
                      Langley, BC V3A 4G4
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {[
                      'Response within 1 business day',
                      'No-pressure consultation',
                      'Honest assessment of your needs',
                      'Clear, jargon-free communication',
                      'Customized recommendations',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#E31837] flex-shrink-0" />
                        <span className="text-zinc-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-[#E31837]" />
                    <h3 className="text-xl font-bold text-zinc-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-zinc-600">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-[#E31837] font-semibold">24/7 Emergency Support Available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-zinc-200" data-testid="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.5!2d-122.6585!3d49.0985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d38e62e1b6f1%3A0x5007e2ec6e0da1b3!2s20627%20Fraser%20Hwy%2C%20Langley%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ayvant Langley Office Location"
        ></iframe>
      </section>
    </div>
  );
}
