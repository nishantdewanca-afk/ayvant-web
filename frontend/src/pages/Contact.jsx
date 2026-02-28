import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle, MessageSquare, Calendar
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission - Replace with GHL integration
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      lines: ['Langley, British Columbia', 'Serving Vancouver & Lower Mainland'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['(604) 555-0123', '24/7 Emergency Support'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@ayvant.ca', 'support@ayvant.ca'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      lines: ['Monday - Friday: 8 AM - 6 PM', 'Emergency: 24/7'],
    },
  ];

  const services = [
    'Cybersecurity Assessment',
    'IT Support',
    'IT Consulting',
    'Cloud Services',
    'Network Setup',
    'Other',
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
              <div key={info.title} className="flex items-start gap-4 p-4" data-testid={`contact-info-${index}`}>
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

              {/* GHL Contact Form Integration Placeholder */}
              <Card className="border-0 shadow-lg" id="ghl-contact-form-placeholder" data-testid="contact-form">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-2">Thank You!</h3>
                      <p className="text-zinc-600">
                        We've received your message and will be in touch shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Smith"
                            required
                            className="h-12"
                            data-testid="contact-name-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            required
                            className="h-12"
                            data-testid="contact-email-input"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(604) 555-0123"
                            className="h-12"
                            data-testid="contact-phone-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company"
                            className="h-12"
                            data-testid="contact-company-input"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select onValueChange={handleSelectChange} value={formData.service}>
                          <SelectTrigger className="h-12" data-testid="contact-service-select">
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your IT needs or challenges..."
                          required
                          className="min-h-[150px] resize-none"
                          data-testid="contact-message-input"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#E31837] hover:bg-[#C4122C] text-white py-6 font-bold rounded-sm transition-all duration-300"
                        data-testid="contact-submit-btn"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
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
                  <a href="tel:+16045550123">
                    <Button className="w-full bg-[#E31837] hover:bg-[#C4122C] py-6 font-bold" data-testid="emergency-call-btn">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (604) 555-0123
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Schedule a Meeting */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-[#E31837]" />
                    <h3 className="text-xl font-bold text-zinc-900">Schedule a Meeting</h3>
                  </div>
                  <p className="text-zinc-600 mb-6">
                    Prefer to chat face-to-face? Book a free 30-minute consultation with our team.
                  </p>
                  {/* GHL Booking Integration Placeholder */}
                  <div id="ghl-booking-placeholder" className="border-2 border-dashed border-zinc-200 rounded-sm p-8 text-center">
                    <p className="text-zinc-500 text-sm">
                      Booking calendar will be displayed here
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-zinc-200" data-testid="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83359.92089458045!2d-122.6912!3d49.1044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d38e62e1b6f1%3A0x5007e2ec6e0da1b3!2sLangley%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ayvant Location - Langley, BC"
        ></iframe>
      </section>

      {/* GHL Live Chat Widget Placeholder */}
      <div 
        id="ghl-chat-widget-placeholder" 
        className="fixed bottom-6 right-6 z-50"
        data-testid="chat-widget-placeholder"
      >
        {/* GHL Chat Widget will be injected here */}
        <div className="w-14 h-14 bg-[#E31837] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#C4122C] transition-colors">
          <MessageSquare className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
