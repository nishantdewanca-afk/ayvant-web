import { Link } from 'react-router-dom';
import { 
  Lightbulb, Target, TrendingUp, Layers, 
  ArrowRight, CheckCircle, Phone, BarChart3,
  Cog, Building2, RefreshCw, FileText
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function ITConsulting() {
  const services = [
    {
      icon: Target,
      title: 'IT Strategy & Planning',
      description: 'Technology should serve your business goals – not the other way around. We help you develop a technology roadmap that aligns with where you want your firm to be in 3, 5, or 10 years.',
      features: [
        'Business-IT alignment assessment',
        'Technology roadmap development',
        'Budget planning & optimization',
        'Vendor evaluation & selection',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Digital Transformation',
      description: 'Ready to modernize your practice? We guide you through adopting new technologies – from cloud migration to workflow automation – in a way that makes sense for your team.',
      features: [
        'Cloud readiness assessment',
        'Process automation',
        'Legacy system modernization',
        'Change management support',
      ],
    },
    {
      icon: Cog,
      title: 'Infrastructure Planning',
      description: 'Whether you\'re opening a new office, expanding, or just need to upgrade aging equipment, we design IT infrastructure that scales with your growth.',
      features: [
        'Network architecture design',
        'Server & storage planning',
        'Disaster recovery planning',
        'Capacity planning',
      ],
    },
    {
      icon: FileText,
      title: 'Compliance Consulting',
      description: 'Navigating regulatory requirements can be overwhelming. We help you understand what\'s required and implement the technical controls to stay compliant.',
      features: [
        'PIPEDA compliance',
        'Law Society requirements',
        'CPA Canada guidelines',
        'Security policy development',
      ],
    },
  ];

  const engagementTypes = [
    {
      title: 'One-Time Assessment',
      description: 'Need a second opinion or outside perspective? We\'ll evaluate your current IT setup and provide actionable recommendations.',
      icon: BarChart3,
    },
    {
      title: 'Project-Based Consulting',
      description: 'Have a specific initiative – like a cloud migration or new office setup? We\'ll guide you through from planning to implementation.',
      icon: Layers,
    },
    {
      title: 'Virtual CIO Services',
      description: 'Get strategic IT leadership without the full-time executive salary. We become your trusted technology advisor on an ongoing basis.',
      icon: Building2,
    },
  ];

  const consultingProcess = [
    {
      step: '01',
      title: 'Listen',
      description: 'We start by understanding your business – your goals, challenges, and how technology fits into your daily operations.',
    },
    {
      step: '02',
      title: 'Analyze',
      description: 'We evaluate your current technology environment, identifying strengths, weaknesses, and opportunities for improvement.',
    },
    {
      step: '03',
      title: 'Recommend',
      description: 'We present clear, prioritized recommendations with realistic timelines and budgets – no fluff, no upselling.',
    },
    {
      step: '04',
      title: 'Support',
      description: 'Whether you implement our recommendations yourself or need our help, we\'re here to ensure success.',
    },
  ];

  return (
    <div data-testid="it-consulting-page">
      {/* Hero Section */}
      <section className="relative bg-white py-24 md:py-32" data-testid="consulting-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-sm text-zinc-700 text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4 text-[#E31837]" />
                IT Consulting Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight mb-6">
                Strategic IT Guidance for
                <span className="text-[#E31837]"> Growing Firms</span>
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                Not sure if you're getting the most from your technology investments? Wondering if there's a better way? 
                Our IT consulting services help you make smart technology decisions that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-[#E31837] hover:bg-[#C4122C] text-white px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1" data-testid="consulting-cta-primary">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-[#E31837]/5 rounded-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80" 
                alt="IT Consulting Strategy" 
                className="relative rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Consulting */}
      <section className="py-20 bg-zinc-50" data-testid="why-consulting">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Why IT Consulting?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Technology Decisions Are Business Decisions
            </h2>
            <p className="text-lg text-zinc-600">
              The right technology can transform your practice – improving efficiency, reducing costs, and enabling growth. 
              The wrong choices can drain resources and hold you back. We help you get it right.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-sm shadow-sm">
              <TrendingUp className="w-12 h-12 text-[#E31837] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Reduce Costs</h3>
              <p className="text-zinc-600">Eliminate wasteful spending and invest in technology that delivers real ROI.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-sm shadow-sm">
              <Target className="w-12 h-12 text-[#E31837] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Strategic Focus</h3>
              <p className="text-zinc-600">Align technology investments with your business goals and growth plans.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-sm shadow-sm">
              <Lightbulb className="w-12 h-12 text-[#E31837] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Expert Guidance</h3>
              <p className="text-zinc-600">Get unbiased advice from consultants who understand professional services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" data-testid="consulting-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Consulting Services
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From high-level strategy to hands-on implementation support, we offer a range of consulting services 
              to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md" data-testid={`consulting-service-${index}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-sm bg-zinc-100 group-hover:bg-[#E31837] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-[#E31837] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-zinc-600">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-[#E31837] flex-shrink-0" />
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

      {/* Engagement Types */}
      <section className="py-24 bg-zinc-900" data-testid="engagement-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Engagement Options</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Ways to Work Together
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Whether you need a one-time assessment or ongoing strategic guidance, we offer engagement models to fit your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementTypes.map((type, index) => (
              <Card key={type.title} className="bg-zinc-800 border-zinc-700 hover:border-[#E31837] transition-colors duration-300" data-testid={`engagement-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-zinc-700 flex items-center justify-center mb-6">
                    <type.icon className="w-8 h-8 text-[#E31837]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-zinc-400">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white" data-testid="consulting-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Our consulting process is straightforward and focused on delivering actionable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {consultingProcess.map((item, index) => (
              <div key={item.title} className="relative" data-testid={`process-${index}`}>
                <div className="text-6xl font-black text-zinc-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600">{item.description}</p>
                {index < consultingProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-zinc-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E31837]" data-testid="consulting-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Talk About Your Technology Strategy
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you have a specific challenge or just want a fresh perspective on your IT, 
            we're here to help. Our initial consultation is always free.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#E31837] hover:bg-zinc-100 px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1" data-testid="consulting-bottom-cta">
              <Phone className="mr-2 w-5 h-5" />
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
