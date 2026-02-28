import { Link } from 'react-router-dom';
import { 
  Server, Monitor, Headphones, Clock, Users, 
  CloudCog, HardDrive, Wifi, ArrowRight, CheckCircle,
  Phone, Zap, Shield, Settings
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function ITSupport() {
  const services = [
    {
      icon: Headphones,
      title: 'Help Desk Support',
      description: 'When something goes wrong, you need answers fast. Our friendly support team is just a call or click away, ready to solve problems quickly so you can get back to work.',
      features: ['Phone, email & chat support', 'Remote troubleshooting', 'Same-day response', 'Clear communication'],
    },
    {
      icon: Monitor,
      title: 'Proactive Monitoring',
      description: 'We watch your systems 24/7, catching and fixing small issues before they become big problems. Most of our clients never even notice because we handle things before they feel the impact.',
      features: ['24/7 system monitoring', 'Automated alerts', 'Preventive maintenance', 'Performance optimization'],
    },
    {
      icon: CloudCog,
      title: 'Cloud Services',
      description: 'Whether you\'re moving to the cloud or already there, we make sure your cloud environment is secure, efficient, and working for you – not against you.',
      features: ['Microsoft 365 management', 'Cloud migration', 'Backup & recovery', 'Cost optimization'],
    },
    {
      icon: HardDrive,
      title: 'Hardware Management',
      description: 'From procurement to disposal, we handle the entire lifecycle of your IT equipment. We\'ll make sure you have the right tools, properly configured and maintained.',
      features: ['Equipment procurement', 'Setup & configuration', 'Warranty management', 'Secure disposal'],
    },
    {
      icon: Wifi,
      title: 'Network Management',
      description: 'Your network is the backbone of your business. We design, implement, and maintain networks that are fast, reliable, and secure – because downtime isn\'t an option.',
      features: ['Network design', 'Firewall management', 'Wi-Fi optimization', 'VPN setup'],
    },
    {
      icon: Users,
      title: 'Employee Onboarding',
      description: 'New hire starting Monday? We\'ll have everything ready – email, software, security training – so they can hit the ground running from day one.',
      features: ['Account setup', 'Equipment provisioning', 'Software installation', 'Security training'],
    },
  ];

  const benefits = [
    { icon: Clock, title: 'Less Downtime', description: 'Proactive monitoring means problems are fixed before you notice them.' },
    { icon: Zap, title: 'Predictable Costs', description: 'Flat monthly fee means no surprise bills or budget headaches.' },
    { icon: Shield, title: 'Better Security', description: 'IT support and security work hand-in-hand to protect your business.' },
    { icon: Settings, title: 'Focus on Your Work', description: 'Let us handle the tech so you can focus on serving your clients.' },
  ];

  const supportLevels = [
    {
      title: 'Essential Support',
      description: 'Perfect for small firms who need reliable IT support without the overhead.',
      features: [
        'Business hours help desk',
        'Remote support',
        'Monthly system health checks',
        'Email & phone support',
        'Basic monitoring',
      ],
      cta: 'Best for 1-10 employees',
    },
    {
      title: 'Professional Support',
      description: 'Our most popular option for growing firms who need comprehensive IT management.',
      features: [
        'Extended hours support',
        'Proactive monitoring 24/7',
        'Unlimited remote support',
        'Quarterly business reviews',
        'Priority response times',
        'Security updates included',
      ],
      cta: 'Best for 10-50 employees',
      highlight: true,
    },
    {
      title: 'Enterprise Support',
      description: 'Full-service IT department for firms with complex needs and compliance requirements.',
      features: [
        '24/7/365 support',
        'Dedicated account manager',
        'On-site support included',
        'Strategic IT planning',
        'Compliance management',
        'Custom SLAs',
      ],
      cta: 'Best for 50+ employees',
    },
  ];

  return (
    <div data-testid="it-support-page">
      {/* Hero Section */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden" data-testid="support-hero">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-sm text-zinc-700 text-sm font-medium mb-6">
                <Server className="w-4 h-4 text-[#E31837]" />
                IT Support Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight mb-6">
                IT Support That
                <span className="text-[#E31837]"> Actually Works</span> for You
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                Tired of waiting on hold? Frustrated by tech talk you don't understand? We're different. 
                Our IT support is built around your business – responsive, reliable, and refreshingly human.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-[#E31837] hover:bg-[#C4122C] text-white px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1" data-testid="support-cta-primary">
                    Get IT Support Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80" 
                alt="IT Support Team" 
                className="rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-zinc-900" data-testid="benefits-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center" data-testid={`benefit-${index}`}>
                <benefit.icon className="w-8 h-8 text-[#E31837] mx-auto mb-3" />
                <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-zinc-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-zinc-50" data-testid="support-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Complete IT Support Services
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From daily troubleshooting to strategic planning, we handle all aspects of your IT 
              so you can focus on what you do best – serving your clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md" data-testid={`support-service-${index}`}>
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-sm bg-zinc-100 group-hover:bg-[#E31837] flex items-center justify-center mb-4 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-[#E31837] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-[#E31837]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-24 bg-white" data-testid="support-plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Support Plans</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Choose the Right Level of Support
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Every business is different. We offer flexible support plans that grow with you, 
              so you only pay for what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((plan, index) => (
              <Card 
                key={plan.title} 
                className={`relative ${plan.highlight ? 'ring-2 ring-[#E31837] shadow-xl scale-105' : 'border border-zinc-200'}`}
                data-testid={`support-plan-${index}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E31837] text-white px-4 py-1 rounded-sm text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                  <p className="text-zinc-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#E31837] flex-shrink-0" />
                        <span className="text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-center text-zinc-500 mb-4">{plan.cta}</p>
                  <Link to="/contact">
                    <Button 
                      className={`w-full py-6 font-bold rounded-sm ${
                        plan.highlight 
                          ? 'bg-[#E31837] hover:bg-[#C4122C] text-white' 
                          : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-50" data-testid="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Getting Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Switching IT Providers is Easier Than You Think
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Worried about the transition? Don't be. We've done this hundreds of times, and we make it seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Discovery Call', description: 'We learn about your business, your pain points, and your goals. No sales pitch – just honest conversation.' },
              { step: '2', title: 'Assessment', description: 'We evaluate your current setup and provide a clear recommendation – even if it\'s to stay with your current provider.' },
              { step: '3', title: 'Onboarding', description: 'We handle the technical transition with zero downtime. Your team won\'t skip a beat.' },
              { step: '4', title: 'Ongoing Support', description: 'You get a dedicated team who knows your business inside and out. Real support, real people.' },
            ].map((item, index) => (
              <div key={item.title} className="text-center" data-testid={`step-${index}`}>
                <div className="w-16 h-16 mx-auto rounded-full bg-[#E31837] flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900" data-testid="support-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience IT Support Done Right?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Let's start with a conversation. Tell us about your business, your frustrations, and your goals. 
            We'll give you honest advice – no strings attached.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#E31837] hover:bg-[#C4122C] text-white px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1" data-testid="support-bottom-cta">
                <Phone className="mr-2 w-5 h-5" />
                Schedule a Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
