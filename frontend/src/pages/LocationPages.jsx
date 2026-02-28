import { Link } from 'react-router-dom';
import { 
  MapPin, Shield, Server, Phone, CheckCircle, ArrowRight,
  Scale, Calculator, Clock, Users, Headphones, Monitor,
  Lock, FileCheck, CloudCog
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

// Location page data for SEO optimization
const locationData = {
  vancouver: {
    city: 'Vancouver',
    region: 'Downtown Vancouver, West End, Kitsilano, and surrounding areas',
    description: 'Vancouver\'s bustling business district is home to countless law firms and accounting practices. From the high-rises of downtown to the professional offices along Broadway, we understand the unique IT challenges facing Vancouver\'s legal and financial professionals.',
    neighborhoods: ['Downtown', 'Yaletown', 'Gastown', 'West End', 'Kitsilano', 'Mount Pleasant'],
    lawFirmFocus: 'Vancouver law firms handle everything from corporate mergers to family law, requiring secure document management, reliable video conferencing for client meetings, and bulletproof data protection. We help firms like yours stay compliant with Law Society of BC requirements while maximizing billable hours.',
    accountantFocus: 'Tax season in Vancouver means your accounting firm can\'t afford downtime. Our proactive IT support ensures your tax software, practice management tools, and client portals run smoothly – especially when deadlines are looming.',
  },
  surrey: {
    city: 'Surrey',
    region: 'Surrey Central, Guildford, Newton, Cloverdale, and South Surrey',
    description: 'Surrey is one of BC\'s fastest-growing cities, and its professional services sector is booming. With our office conveniently located at 2677 192 St., we\'re right in the heart of Surrey\'s business community, ready to support your firm\'s IT needs.',
    neighborhoods: ['Surrey Central', 'Guildford', 'Newton', 'Cloverdale', 'South Surrey', 'Fleetwood'],
    lawFirmFocus: 'Surrey\'s legal community is diverse, serving everyone from immigrants starting new lives to businesses navigating commercial disputes. Your IT infrastructure should be as reliable as your legal advice – and that\'s where we come in.',
    accountantFocus: 'From small bookkeeping practices to mid-sized CPA firms, Surrey\'s accounting professionals need IT partners who understand the demands of financial services. We ensure your QuickBooks, Sage, and CaseWare systems run without a hitch.',
  },
  langley: {
    city: 'Langley',
    region: 'Langley City, Walnut Grove, Willoughby, and Fort Langley',
    description: 'Langley is our home base, with our main office at 20627 Fraser Hwy. We\'ve built deep relationships with local businesses and understand the close-knit professional community here. When you work with Ayvant, you\'re working with your neighbors.',
    neighborhoods: ['Langley City', 'Walnut Grove', 'Willoughby', 'Murrayville', 'Fort Langley', 'Brookswood'],
    lawFirmFocus: 'Langley\'s law firms often serve clients across the Fraser Valley, requiring secure remote access and reliable communication tools. We help you stay connected with clients and colleagues, whether you\'re in the office or working from home.',
    accountantFocus: 'Many Langley accounting firms serve local businesses and agricultural operations. We understand your unique needs, from farm accounting software to seasonal workload spikes during tax season.',
  },
  burnaby: {
    city: 'Burnaby',
    region: 'Metrotown, Brentwood, Edmonds, and North Burnaby',
    description: 'Burnaby\'s strategic location between Vancouver and the eastern suburbs makes it a hub for professional services. From the towers of Metrotown to the professional parks along Canada Way, we support businesses throughout this dynamic city.',
    neighborhoods: ['Metrotown', 'Brentwood', 'Edmonds', 'Lougheed', 'North Burnaby', 'Burnaby Heights'],
    lawFirmFocus: 'Burnaby law firms benefit from lower overhead than downtown Vancouver while maintaining easy access to courts and clients. We help you leverage technology to compete with larger firms, providing enterprise-level IT support at a price that makes sense.',
    accountantFocus: 'With SFU nearby and a strong business community, Burnaby accountants serve diverse clients. Our IT solutions help you manage multiple client engagements efficiently while keeping sensitive financial data secure.',
  },
  richmond: {
    city: 'Richmond',
    region: 'Richmond Centre, Steveston, Ironwood, and Bridgeport',
    description: 'Richmond\'s unique position as a gateway city means many law firms and accounting practices serve international clients. We understand the technology needs of firms working across time zones and cultures.',
    neighborhoods: ['Richmond Centre', 'Steveston', 'Ironwood', 'Bridgeport', 'West Cambie', 'East Richmond'],
    lawFirmFocus: 'Immigration law is a specialty in Richmond, requiring secure handling of sensitive personal documents and reliable communication with clients worldwide. Our IT solutions help immigration lawyers manage cases efficiently and securely.',
    accountantFocus: 'Richmond\'s accounting firms often work with international businesses and require systems that can handle multi-currency, cross-border transactions. We ensure your accounting software and communication tools meet these complex needs.',
  },
  coquitlam: {
    city: 'Coquitlam',
    region: 'Coquitlam Centre, Port Coquitlam, Burke Mountain, and Westwood Plateau',
    description: 'The Tri-Cities area is growing rapidly, and so is its professional services sector. We provide comprehensive IT support to law firms and accounting practices throughout Coquitlam, Port Coquitlam, and Port Moody.',
    neighborhoods: ['Coquitlam Centre', 'Burke Mountain', 'Westwood Plateau', 'Austin Heights', 'Maillardville', 'Como Lake'],
    lawFirmFocus: 'Coquitlam\'s law firms serve a growing population with diverse legal needs. From real estate transactions to family law matters, your IT infrastructure needs to support efficient case management and secure client communication.',
    accountantFocus: 'As Coquitlam grows, so does the demand for accounting services. We help local CPA firms scale their IT infrastructure to meet growing client demand without sacrificing security or reliability.',
  },
  'port-moody': {
    city: 'Port Moody',
    region: 'Port Moody, Anmore, and Belcarra',
    description: 'Port Moody may be smaller than its neighbors, but its professional services sector punches above its weight. We provide personalized IT support that matches the community-focused approach Port Moody businesses are known for.',
    neighborhoods: ['Inlet Centre', 'Newport Village', 'Heritage Mountain', 'Glenayre', 'College Park', 'Suter Brook'],
    lawFirmFocus: 'Port Moody law firms often pride themselves on personalized service. We mirror that approach with IT support that treats you like a partner, not a ticket number.',
    accountantFocus: 'Small to mid-sized accounting practices in Port Moody need IT solutions that are right-sized for their needs. We provide enterprise-level protection without enterprise-level complexity or cost.',
  },
  delta: {
    city: 'Delta',
    region: 'Ladner, Tsawwassen, and North Delta',
    description: 'Delta\'s three distinct communities – Ladner, Tsawwassen, and North Delta – each have unique character, but they share a need for reliable, professional IT support. We serve businesses throughout the municipality.',
    neighborhoods: ['Ladner', 'Tsawwassen', 'North Delta', 'Boundary Bay', 'Sunbury', 'Annacis Island'],
    lawFirmFocus: 'Delta\'s law firms serve a diverse client base, from agricultural operations to ferry-commuting Tsawwassen residents. We ensure your IT infrastructure supports your practice wherever your clients are.',
    accountantFocus: 'From farm accounting in Ladner to retail businesses in Tsawwassen, Delta\'s accountants serve unique clients. Our IT solutions are flexible enough to support your diverse client base.',
  },
  abbotsford: {
    city: 'Abbotsford',
    region: 'Downtown Abbotsford, Clearbrook, and McMillan',
    description: 'Abbotsford is the hub of the Fraser Valley, and its professional services sector is essential to the region\'s economy. We extend our reach to support law firms and accounting practices in BC\'s fifth-largest city.',
    neighborhoods: ['Downtown', 'Clearbrook', 'McMillan', 'Auguston', 'Eagle Mountain', 'Historic Downtown'],
    lawFirmFocus: 'Abbotsford law firms serve clients from Chilliwack to Langley, requiring reliable IT that works from anywhere. We help you stay connected with clients and courts across the Fraser Valley.',
    accountantFocus: 'Agricultural accounting is a specialty in Abbotsford. We understand the unique software needs of farm accounting and ensure your systems handle the complexities of agricultural business.',
  },
  chilliwack: {
    city: 'Chilliwack',
    region: 'Downtown Chilliwack, Sardis, Vedder, and Promontory',
    description: 'Chilliwack\'s professional services community serves the entire eastern Fraser Valley. While we\'re based in Langley, we provide the same responsive, personalized IT support to Chilliwack businesses that our local clients enjoy.',
    neighborhoods: ['Downtown', 'Sardis', 'Vedder', 'Promontory', 'Garrison Crossing', 'Fairfield Island'],
    lawFirmFocus: 'Chilliwack law firms are often the only legal presence for miles. We ensure your IT infrastructure is reliable enough to serve clients who depend on you.',
    accountantFocus: 'Seasonal businesses, agricultural operations, and growing families all need accountants in Chilliwack. We make sure your IT supports your diverse practice without requiring a trip to the city for service.',
  },
};

const commonTools = {
  lawFirm: [
    { name: 'Clio', description: 'Practice management and billing' },
    { name: 'PCLaw', description: 'Legal accounting software' },
    { name: 'Microsoft 365', description: 'Email, documents, and collaboration' },
    { name: 'Adobe Acrobat', description: 'Document management and e-signatures' },
    { name: 'NetDocuments', description: 'Secure document storage' },
    { name: 'Zoom/Teams', description: 'Client video conferencing' },
  ],
  accounting: [
    { name: 'QuickBooks', description: 'Client accounting' },
    { name: 'Sage 50/300', description: 'Business accounting' },
    { name: 'CaseWare', description: 'Audit and financial reporting' },
    { name: 'TaxCycle', description: 'Canadian tax preparation' },
    { name: 'Xero', description: 'Cloud accounting' },
    { name: 'CRA My Business', description: 'Tax filing and compliance' },
  ],
};

export const LocationPage = ({ locationKey }) => {
  const location = locationData[locationKey];
  
  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div data-testid={`location-page-${locationKey}`}>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E31837]/10 border border-[#E31837]/30 rounded-sm text-[#E31837] text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              {location.city}, BC
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              IT Support in {location.city}
              <span className="text-[#E31837]"> for Law Firms & Accountants</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-[#E31837] hover:bg-[#C4122C] text-white px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1">
                  Get a Free IT Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+16042392090">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-zinc-900 px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300">
                  <Phone className="mr-2 w-5 h-5" />
                  (604) 239-2090
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local IT Support Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#E31837] font-semibold tracking-wide uppercase mb-3">Local Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Why {location.city} Businesses Choose Local IT Support
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                When your systems go down, you need someone who can be there – not tomorrow, not in a few hours, but now. 
                That's the advantage of working with a local IT partner who understands your business and your community.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'On-Site When Needed', desc: `We can be at your ${location.city} office quickly when remote support isn't enough.` },
                  { title: 'Local Relationships', desc: 'We understand the professional community and compliance requirements in BC.' },
                  { title: 'Same Timezone Support', desc: 'No overseas call centers – just real people who work when you work.' },
                  { title: 'Community Investment', desc: `We're invested in the success of ${location.city}'s professional services community.` },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#E31837] flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{item.title}</h4>
                      <p className="text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-50 p-8 rounded-sm">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Areas We Serve in {location.city}</h3>
              <div className="grid grid-cols-2 gap-3">
                {location.neighborhoods.map((hood) => (
                  <div key={hood} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E31837]" />
                    <span className="text-zinc-700">{hood}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Law Firms */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-8 h-8 text-[#E31837]" />
                <p className="text-[#E31837] font-semibold tracking-wide uppercase">For Law Firms</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                IT Support Built for {location.city} Law Practices
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                {location.lawFirmFocus}
              </p>
              <h3 className="text-xl font-bold text-white mb-4">Software We Support</h3>
              <div className="grid grid-cols-2 gap-4">
                {commonTools.lawFirm.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-[#E31837]" />
                    <div>
                      <span className="font-medium">{tool.name}</span>
                      <p className="text-xs text-zinc-500">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-[#E31837] mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Client Data Protection</h4>
                  <p className="text-zinc-400">Solicitor-client privilege demands the highest level of data security. We implement encryption, access controls, and monitoring to protect your clients' sensitive information.</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <FileCheck className="w-10 h-10 text-[#E31837] mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Law Society Compliance</h4>
                  <p className="text-zinc-400">We help you meet Law Society of BC technology requirements, from trust accounting to client communication records.</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <Clock className="w-10 h-10 text-[#E31837] mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Maximize Billable Hours</h4>
                  <p className="text-zinc-400">Every minute spent on IT issues is a minute you're not billing. Our proactive support minimizes disruptions so you can focus on your practice.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Accountants */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <Lock className="w-10 h-10 text-[#E31837] mb-4" />
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">Financial Data Security</h4>
                  <p className="text-zinc-600">Your clients trust you with their financial lives. We implement robust security measures to protect tax returns, financial statements, and sensitive business data.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <CloudCog className="w-10 h-10 text-[#E31837] mb-4" />
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">Cloud Accounting Support</h4>
                  <p className="text-zinc-600">Whether you're using QuickBooks Online, Xero, or transitioning to the cloud, we ensure smooth integration and reliable access.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <Monitor className="w-10 h-10 text-[#E31837] mb-4" />
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">Tax Season Ready</h4>
                  <p className="text-zinc-600">We prepare your systems for peak season, ensuring your tax software, CRA connections, and client portals are ready when you need them most.</p>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-8 h-8 text-[#E31837]" />
                <p className="text-[#E31837] font-semibold tracking-wide uppercase">For Accountants</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                IT Support for {location.city} Accounting Firms
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                {location.accountantFocus}
              </p>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Software We Support</h3>
              <div className="grid grid-cols-2 gap-4">
                {commonTools.accounting.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 text-zinc-700">
                    <CheckCircle className="w-5 h-5 text-[#E31837]" />
                    <div>
                      <span className="font-medium">{tool.name}</span>
                      <p className="text-xs text-zinc-500">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Sleep Better Knowing Your IT is Handled
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Running a law firm or accounting practice is stressful enough. You shouldn't have to worry about 
              ransomware, data breaches, or whether your systems will work when you need them. That's our job.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E31837]/10 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-[#E31837]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">24/7 Monitoring</h3>
              <p className="text-zinc-600">We watch your systems around the clock, catching and fixing issues before they impact your business.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E31837]/10 flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-[#E31837]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Responsive Support</h3>
              <p className="text-zinc-600">When you have a problem, you get a real person who knows your business – not a ticket number.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E31837]/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-[#E31837]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Strategic Partnership</h3>
              <p className="text-zinc-600">We're not just fixing problems – we're helping your practice grow with technology that works for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#E31837]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Better IT Support in {location.city}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the law firms and accounting practices across {location.city} who've made the switch to Ayvant. 
            Your first consultation is free – let's talk about what's keeping you up at night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-[#E31837] hover:bg-zinc-100 px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:-translate-y-1">
                Get Your Free Assessment
              </Button>
            </Link>
            <a href="tel:+16042392090">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#E31837] px-8 py-6 text-lg font-bold rounded-sm transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                (604) 239-2090
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">We Also Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(locationData)
              .filter(([key]) => key !== locationKey)
              .map(([key, data]) => (
                <Link
                  key={key}
                  to={`/it-support-${key}`}
                  className="px-4 py-2 bg-zinc-800 hover:bg-[#E31837] rounded-sm text-zinc-300 hover:text-white transition-colors text-sm"
                >
                  IT Support in {data.city}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Export individual page components
export const ITSupportVancouver = () => <LocationPage locationKey="vancouver" />;
export const ITSupportSurrey = () => <LocationPage locationKey="surrey" />;
export const ITSupportLangley = () => <LocationPage locationKey="langley" />;
export const ITSupportBurnaby = () => <LocationPage locationKey="burnaby" />;
export const ITSupportRichmond = () => <LocationPage locationKey="richmond" />;
export const ITSupportCoquitlam = () => <LocationPage locationKey="coquitlam" />;
export const ITSupportPortMoody = () => <LocationPage locationKey="port-moody" />;
export const ITSupportDelta = () => <LocationPage locationKey="delta" />;
export const ITSupportAbbotsford = () => <LocationPage locationKey="abbotsford" />;
export const ITSupportChilliwack = () => <LocationPage locationKey="chilliwack" />;
