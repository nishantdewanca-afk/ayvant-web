import { Link } from 'react-router-dom';
import { 
  MapPin, Users, Heart, Shield, Award, Clock,
  ArrowRight, CheckCircle, Phone, Target
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Human-First Approach',
      description: 'We believe technology should serve people, not the other way around. We explain things in plain English, respect your time, and treat you like a partner – not just a client.',
    },
    {
      icon: Shield,
      title: 'Security Without Compromise',
      description: 'Your data protection isn\'t negotiable. We implement robust security measures that protect your clients\' sensitive information without making your life harder.',
    },
    {
      icon: Target,
      title: 'Local Expertise',
      description: 'We\'re not a faceless national company. We\'re based right here in Langley, and we understand the unique needs of Vancouver and Lower Mainland businesses.',
    },
    {
      icon: Clock,
      title: 'Responsive & Reliable',
      description: 'When you have a problem, you need answers now – not tomorrow. Our team responds quickly because we know your business depends on it.',
    },
  ];

  const team = [
    {
      name: 'The Leadership Team',
      role: 'Founded by IT Veterans',
      description: 'Our founders bring decades of combined experience in IT support and cybersecurity, with a particular focus on professional services firms.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
    },
    {
      name: 'Support Engineers',
      role: 'Your Daily IT Partners',
      description: 'Our support team isn\'t just technically skilled – they\'re great communicators who genuinely enjoy helping people solve problems.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    },
    {
      name: 'Security Specialists',
      role: 'Your Digital Guardians',
      description: 'Our cybersecurity experts stay ahead of the latest threats, ensuring your business is protected against evolving risks.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
    },
  ];

  const milestones = [
    { year: 'Founded', description: 'Started with a mission to provide human-centered IT support to local businesses.' },
    { year: 'Growth', description: 'Expanded our team and services to meet growing demand from professional service firms.' },
    { year: 'Today', description: 'Trusted by dozens of law firms, accounting practices, and professional service businesses across the Lower Mainland.' },
  ];

  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-24 md:py-32" data-testid="about-hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E31837]/10 border border-[#E31837]/30 rounded-sm text-[#E31837] text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              About Ayvant
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Real People.
              <span className="text-[#E31837]"> Real Support.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              We're not your typical IT company. We're a team of real people who genuinely care about helping 
              local businesses stay secure and productive. Based in Langley, serving Vancouver and the Lower Mainland 
              with the kind of IT support you actually want to call.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white" data-testid="our-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Why We Started Ayvant
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  We've all been there – stuck on hold with IT support, listening to someone read from a script 
                  who clearly doesn't understand (or care about) your actual problem. We started Ayvant because 
                  we believed there had to be a better way.
                </p>
                <p>
                  Our founders spent years working in IT for large corporations before realizing that small and 
                  medium-sized businesses deserved the same level of expertise and attention – but with a personal touch.
                </p>
                <p>
                  Today, we're proud to serve dozens of law firms, accounting practices, and professional service 
                  businesses across Vancouver and the Lower Mainland. We've built our reputation on doing what we 
                  say we'll do, explaining things clearly, and being there when you need us.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-zinc-100 rounded-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80" 
                alt="Ayvant Team" 
                className="relative rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-zinc-50" data-testid="our-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              These aren't just words on a wall – they're the principles that guide every interaction 
              we have with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="border-0 shadow-md hover:shadow-lg transition-shadow" data-testid={`value-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-sm bg-[#E31837]/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-[#E31837]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-2">{value.title}</h3>
                      <p className="text-zinc-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-white" data-testid="our-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              The People Behind Ayvant
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We're a small but mighty team of IT professionals who genuinely love what we do. 
              When you work with Ayvant, you work with real people who know your name.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow" data-testid={`team-${index}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-1">{member.name}</h3>
                  <p className="text-[#E31837] font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-zinc-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-zinc-900" data-testid="location-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Our Location</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proudly Serving the Lower Mainland
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                Based in Langley, British Columbia, we serve businesses throughout Vancouver, Surrey, Burnaby, 
                Richmond, and the entire Lower Mainland region. We're local, we're accessible, and we're always 
                just a phone call away.
              </p>
              <div className="flex items-center gap-3 text-zinc-300 mb-6">
                <MapPin className="w-6 h-6 text-[#E31837]" />
                <span>Serving Vancouver & Lower Mainland from Langley and Surrey</span>
              </div>
              <div className="space-y-3 text-zinc-400 text-sm mb-6">
                <p><strong className="text-white">Langley Office:</strong> 20627 Fraser Hwy, Langley, BC V3A 4G4</p>
                <p><strong className="text-white">Surrey Office:</strong> 2677 192 St. Suite 102, Surrey, BC V3S 3X1</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Langley', 'Coquitlam'].map((city) => (
                  <span key={city} className="px-4 py-2 bg-zinc-800 rounded-sm text-zinc-300 text-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-zinc-800 rounded-sm overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83359.92089458045!2d-122.6912!3d49.1044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d38e62e1b6f1%3A0x5007e2ec6e0da1b3!2sLangley%2C%20BC!5e0!3m2!1sen!2sca!4v1635000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ayvant Location - Langley, BC"
                  className="grayscale"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white" data-testid="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Why Ayvant?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'No long-term contracts required',
              'Local team, not overseas call centers',
              'Plain English, no tech jargon',
              'Proactive monitoring included',
              'Flat-rate pricing, no surprises',
              'Fast response times guaranteed',
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-sm" data-testid={`differentiator-${index}`}>
                <CheckCircle className="w-5 h-5 text-[#E31837] flex-shrink-0" />
                <span className="text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E31837]" data-testid="about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work with a Team That Actually Cares?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's have a conversation about your IT needs. No pressure, no jargon – just honest advice 
            from people who want to see your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-[#E31837] hover:bg-zinc-100 px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1" data-testid="about-cta-primary">
                <Phone className="mr-2 w-5 h-5" />
                Get in Touch
              </Button>
            </Link>
            <Link to="/cybersecurity">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#E31837] px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300" data-testid="about-cta-secondary">
                View Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
