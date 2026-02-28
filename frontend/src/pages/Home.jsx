import { Link } from 'react-router-dom';
import { 
  Shield, Server, Users, ArrowRight, CheckCircle, 
  Lock, Activity, Monitor, Phone, ChevronRight,
  Scale, Calculator, Plane, Building2, Star, Quote
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business from evolving cyber threats with our comprehensive security solutions. From threat detection to compliance, we\'ve got you covered.',
      link: '/cybersecurity',
      highlight: true,
    },
    {
      icon: Server,
      title: 'IT Support',
      description: 'Reliable, responsive IT support that keeps your business running smoothly. Our team becomes an extension of yours, ready whenever you need us.',
      link: '/it-support',
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic technology guidance to help your business grow. We align your IT infrastructure with your business goals for maximum impact.',
      link: '/it-consulting',
    },
  ];

  const industries = [
    { icon: Scale, name: 'Law Firms', description: 'Secure client data and meet compliance requirements' },
    { icon: Calculator, name: 'Accounting Firms', description: 'Protect financial data and ensure regulatory compliance' },
    { icon: Plane, name: 'Immigration Firms', description: 'Safeguard sensitive immigration documents and client records' },
    { icon: Building2, name: 'Professional Services', description: 'Tailored IT solutions for your unique business needs' },
  ];

  const whyChooseUs = [
    { title: 'Local Expertise', description: 'Based in Langley, we understand the unique needs of Vancouver and Lower Mainland businesses.' },
    { title: '24/7 Support', description: 'Cyber threats don\'t sleep, and neither does our emergency support team.' },
    { title: 'Proactive Approach', description: 'We prevent problems before they happen, saving you time and money.' },
    { title: 'Human-First Service', description: 'Real people who speak your language, not tech jargon.' },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Partner, Mitchell & Associates Law',
      content: 'Ayvant transformed our approach to cybersecurity. Their team took the time to understand our firm\'s specific needs and implemented solutions that actually make sense for how lawyers work. We sleep better knowing our client data is protected.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Managing Director, Chen Accounting Group',
      content: 'After a close call with a phishing attack, we needed an IT partner we could trust. Ayvant\'s response was immediate, and their ongoing support has been exceptional. They\'re not just vendors – they\'re part of our team.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Owner, Global Immigration Services',
      content: 'The transition to Ayvant was seamless. Their team is always available, always professional, and they explain everything in terms I can understand. Our IT headaches are a thing of the past.',
      rating: 5,
    },
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E31837]/10 border border-[#E31837]/30 rounded-sm text-[#E31837] text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Trusted by Law Firms & Accounting Practices
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
                Your Business Deserves
                <span className="text-[#E31837]"> Rock-Solid</span> IT Security
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8 max-w-xl">
                We help law firms, accountants, and professional service businesses in Vancouver and the Lower Mainland 
                stay secure, compliant, and running smoothly. Because you have better things to worry about than IT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-[#E31837] hover:bg-[#C4122C] text-white px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-testid="hero-cta-primary">
                    Get Your Free Security Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/cybersecurity">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-zinc-900 px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300" data-testid="hero-cta-secondary">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in stagger-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#E31837]/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80" 
                  alt="Cybersecurity Protection" 
                  className="relative rounded-sm shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              From protecting your data to keeping your systems running, we provide everything your business needs to thrive in today's digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  service.highlight ? 'ring-2 ring-[#E31837]' : ''
                }`}
                data-testid={`service-card-${index}`}
              >
                {service.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#E31837]"></div>
                )}
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-sm flex items-center justify-center mb-6 ${
                    service.highlight ? 'bg-[#E31837]' : 'bg-zinc-100 group-hover:bg-[#E31837]'
                  } transition-colors duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.highlight ? 'text-white' : 'text-zinc-700 group-hover:text-white'} transition-colors duration-300`} />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-[#E31837] font-semibold hover:gap-3 gap-2 transition-all duration-300"
                    data-testid={`service-link-${index}`}
                  >
                    Learn More <ChevronRight className="w-5 h-5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-zinc-50" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Why Ayvant?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                IT Support That Actually Understands Your Business
              </h2>
              <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                We're not your typical IT company. We're a team of real people who genuinely care about your business's success. 
                We take the time to understand how you work, what keeps you up at night, and how technology can make your life easier.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={item.title} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-6 h-6 rounded-full bg-[#E31837] flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{item.title}</h4>
                      <p className="text-zinc-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#E31837]/5 rounded-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" 
                alt="Professional team meeting" 
                className="relative rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white" data-testid="industries-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Who We Serve</p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Tailored Solutions for Your Industry
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              We specialize in supporting professional service businesses across Vancouver and the Lower Mainland, 
              understanding the unique challenges and compliance requirements of each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry.name}
                className="group p-8 bg-zinc-50 rounded-sm hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-zinc-200"
                data-testid={`industry-card-${index}`}
              >
                <div className="w-12 h-12 rounded-sm bg-white group-hover:bg-[#E31837] flex items-center justify-center mb-4 transition-colors duration-300 shadow-sm">
                  <industry.icon className="w-6 h-6 text-[#E31837] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{industry.name}</h3>
                <p className="text-zinc-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-900" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what business owners across Vancouver have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="bg-zinc-800 border-zinc-700 hover:border-[#E31837] transition-colors duration-300"
                data-testid={`testimonial-card-${index}`}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#E31837] text-[#E31837]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#E31837] mb-4" />
                  <p className="text-zinc-300 leading-relaxed mb-6">"{testimonial.content}"</p>
                  <div className="border-t border-zinc-700 pt-4">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E31837] relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's have a conversation about your IT needs. No pressure, no jargon – just honest advice from people who care about your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-[#E31837] hover:bg-zinc-100 px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-testid="cta-primary">
                <Phone className="mr-2 w-5 h-5" />
                Schedule a Free Consultation
              </Button>
            </Link>
            <a href="tel:+16045550123">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#E31837] px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300" data-testid="cta-secondary">
                Call (604) 555-0123
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
