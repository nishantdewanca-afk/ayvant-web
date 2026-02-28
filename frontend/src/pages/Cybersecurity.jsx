import { Link } from 'react-router-dom';
import { 
  Shield, Lock, AlertTriangle, Eye, FileCheck, 
  Server, Mail, Users, ArrowRight, CheckCircle,
  Phone, ShieldCheck, Zap, Clock
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function Cybersecurity() {
  const threats = [
    { icon: Mail, title: 'Phishing Attacks', description: 'Sophisticated email scams targeting your employees and clients' },
    { icon: Lock, title: 'Ransomware', description: 'Malicious software that can lock you out of your own data' },
    { icon: AlertTriangle, title: 'Data Breaches', description: 'Unauthorized access to sensitive client information' },
    { icon: Users, title: 'Insider Threats', description: 'Security risks from within your organization' },
  ];

  const services = [
    {
      icon: Shield,
      title: 'Security Assessments',
      description: 'We thoroughly analyze your current security posture, identify vulnerabilities, and provide a clear roadmap to strengthen your defenses. No technical jargon – just actionable insights.',
      features: ['Vulnerability scanning', 'Penetration testing', 'Risk analysis', 'Compliance review'],
    },
    {
      icon: Eye,
      title: '24/7 Threat Monitoring',
      description: 'Our team keeps watch around the clock, detecting and responding to threats before they can cause damage. When something suspicious happens, we\'re on it immediately.',
      features: ['Real-time monitoring', 'Immediate response', 'Threat intelligence', 'Incident reporting'],
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Your client data is your responsibility – and ours. We implement encryption, access controls, and backup systems to keep sensitive information safe and recoverable.',
      features: ['Data encryption', 'Access management', 'Secure backups', 'Data loss prevention'],
    },
    {
      icon: FileCheck,
      title: 'Compliance Management',
      description: 'Whether it\'s PIPEDA, law society requirements, or industry standards, we help you stay compliant without the headache. We handle the technical details so you can focus on your practice.',
      features: ['PIPEDA compliance', 'Industry standards', 'Audit preparation', 'Policy development'],
    },
    {
      icon: Mail,
      title: 'Email Security',
      description: 'Email is the #1 attack vector for businesses. We protect your inbox with advanced filtering, employee training, and rapid response protocols for suspicious activity.',
      features: ['Spam filtering', 'Phishing protection', 'Email encryption', 'Security training'],
    },
    {
      icon: Server,
      title: 'Endpoint Protection',
      description: 'Every device connected to your network is a potential entry point. We secure laptops, desktops, mobile devices, and servers with enterprise-grade protection.',
      features: ['Antivirus/antimalware', 'Device management', 'Patch management', 'Remote wipe capability'],
    },
  ];

  const stats = [
    { value: '43%', label: 'of cyberattacks target small businesses' },
    { value: '$200K', label: 'average cost of a data breach for SMBs' },
    { value: '60%', label: 'of small businesses close within 6 months of an attack' },
    { value: '24/7', label: 'our monitoring and response coverage' },
  ];

  return (
    <div data-testid="cybersecurity-page">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-24 md:py-32" data-testid="cyber-hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E31837]/10 border border-[#E31837]/30 rounded-sm text-[#E31837] text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Cybersecurity Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Protect What Matters Most: 
              <span className="text-[#E31837]"> Your Client Data</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              In today's world, a single breach can destroy years of client trust. We provide comprehensive cybersecurity 
              solutions designed specifically for professional service firms in Vancouver and the Lower Mainland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-[#E31837] hover:bg-[#C4122C] text-white px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1" data-testid="cyber-cta-primary">
                  Get a Security Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-zinc-50" data-testid="threat-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">The Reality</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Cyber Threats Are Closer Than You Think
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Professional service firms are prime targets for cybercriminals. The sensitive data you handle – client finances, 
              legal documents, personal information – is exactly what attackers want.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {threats.map((threat, index) => (
              <Card key={threat.title} className="border-l-4 border-l-[#E31837] hover:shadow-lg transition-shadow" data-testid={`threat-card-${index}`}>
                <CardContent className="p-6">
                  <threat.icon className="w-10 h-10 text-[#E31837] mb-4" />
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{threat.title}</h3>
                  <p className="text-zinc-600 text-sm">{threat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-white rounded-sm shadow-sm" data-testid={`stat-${index}`}>
                <p className="text-3xl md:text-4xl font-black text-[#E31837] mb-2">{stat.value}</p>
                <p className="text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" data-testid="cyber-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We don't believe in one-size-fits-all security. Our solutions are tailored to the unique needs 
              of law firms, accounting practices, and professional service businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md" data-testid={`cyber-service-${index}`}>
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

      {/* How We Work */}
      <section className="py-24 bg-zinc-900" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Protect Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', icon: Eye, title: 'Assess', description: 'We thoroughly evaluate your current security posture and identify vulnerabilities.' },
              { step: '02', icon: ShieldCheck, title: 'Plan', description: 'We create a customized security roadmap based on your specific needs and budget.' },
              { step: '03', icon: Zap, title: 'Implement', description: 'We deploy security solutions with minimal disruption to your daily operations.' },
              { step: '04', icon: Clock, title: 'Monitor', description: 'We provide ongoing monitoring, updates, and support to keep you protected.' },
            ].map((item, index) => (
              <div key={item.title} className="text-center" data-testid={`process-step-${index}`}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-zinc-800 flex items-center justify-center border-2 border-[#E31837]">
                    <item.icon className="w-8 h-8 text-[#E31837]" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#E31837] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E31837]" data-testid="cyber-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Wait for a Breach to Take Security Seriously
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's talk about your security needs. Our assessments are thorough, our recommendations are practical, 
            and our first conversation is always free.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#E31837] hover:bg-zinc-100 px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1" data-testid="cyber-bottom-cta">
              <Phone className="mr-2 w-5 h-5" />
              Schedule Your Free Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
