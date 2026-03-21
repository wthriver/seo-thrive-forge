import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import HardLink from '@/components/HardLink';
import {
  Database,
  Cloud,
  Wifi,
  WifiOff,
  Package,
  Users,
  ShoppingCart,
  UserCog,
  BarChart3,
  Shield,
  RefreshCw,
  Zap,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  Monitor,
  Smartphone,
  Table2,
  Layers,
  TrendingUp,
  FileSpreadsheet,
  Download
} from 'lucide-react';

const SheetERP = () => {
  const features = [
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock levels, manage warehouses, automate reordering, and get real-time visibility into your inventory across all locations.",
      color: "blue"
    },
    {
      icon: Users,
      title: "CRM",
      description: "Manage customer relationships, track interactions, automate follow-ups, and build lasting connections with your clients.",
      color: "purple"
    },
    {
      icon: ShoppingCart,
      title: "Sales Management",
      description: "Streamline your sales pipeline, generate quotes, process orders, and track performance with powerful analytics.",
      color: "green"
    },
    {
      icon: UserCog,
      title: "HR Management",
      description: "Handle employee records, attendance, payroll, leave management, and performance tracking all in one place.",
      color: "orange"
    }
  ];

  const capabilities = [
    {
      icon: Cloud,
      title: "Google Sheets Integration",
      description: "All your data seamlessly syncs with Google Sheets. Access, analyze, and share your business data with the familiar spreadsheet interface you love.",
      color: "blue"
    },
    {
      icon: Wifi,
      title: "Online Mode",
      description: "Full functionality when connected. Real-time sync, instant updates, and collaborative access for your entire team.",
      color: "green"
    },
    {
      icon: WifiOff,
      title: "Offline Mode",
      description: "Keep working even without internet. Data syncs automatically when you're back online. Never miss a beat in your business operations.",
      color: "purple"
    },
    {
      icon: Monitor,
      title: "Desktop App",
      description: "Native desktop experience for Windows and Mac. Fast performance, system notifications, and offline-first architecture.",
      color: "indigo"
    },
    {
      icon: RefreshCw,
      title: "Auto Sync",
      description: "Changes sync automatically across all devices. Your data is always up-to-date, whether you're on desktop, tablet, or mobile.",
      color: "cyan"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is stored in your own Google Sheets. You own it, control it, and can export it anytime. Bank-level security by default.",
      color: "emerald"
    }
  ];

  const workflowSteps = [
    { step: 1, title: "Connect Google Account", description: "Sign in with your Google account and authorize Sheet ERP" },
    { step: 2, title: "Create Spreadsheets", description: "Sheet ERP automatically creates organized spreadsheets for each module" },
    { step: 3, title: "Start Managing", description: "Use the intuitive interface or work directly in Google Sheets" },
    { step: 4, title: "Access Anywhere", description: "View and edit data from any device through our app or Google Sheets" }
  ];

  const stats = [
    { value: "100%", label: "Data Ownership", icon: Database },
    { value: "0", label: "Monthly Fees", icon: Zap },
    { value: "24/7", label: "Availability", icon: Clock },
    { value: "∞", label: "Scalability", icon: TrendingUp }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200", gradient: "from-green-500 to-green-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200", gradient: "from-orange-500 to-orange-600" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200", gradient: "from-indigo-500 to-indigo-600" },
      cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200", gradient: "from-cyan-500 to-cyan-600" },
      emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200", gradient: "from-emerald-500 to-emerald-600" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEOHead
        title="Sheet ERP - Free Google Sheets-Based ERP System | Inventory, CRM, Sales, HR"
        description="Transform your business with Sheet ERP - the free, online/offline desktop app that stores all data in Google Sheets. Manage inventory, CRM, sales, and HR without monthly fees."
        keywords="sheet ERP, Google Sheets ERP, free ERP software, inventory management, CRM, sales management, HR management, offline ERP, desktop ERP app"
        canonical="https://webthriver.com/sheet-erp"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <FileSpreadsheet className="w-4 h-4" />
              Powered by Google Sheets
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Sheet ERP
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-600 mb-6 leading-relaxed max-w-3xl mx-auto">
              The <span className="font-semibold text-blue-600">free</span> ERP system that stores all your data in{' '}
              <span className="font-semibold text-indigo-600">Google Sheets</span>
            </p>
            
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
              Inventory Management • CRM • Sales • HR — All working online & offline as a beautiful desktop app
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
               <a href="https://github.com/wthriver/sheet-erp/releases/download/v1.0.1/Sheet.ERP.Setup.1.0.0.exe" download>
    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6 h-auto">
      <Download className="w-5 h-5 mr-2" />
      Download for Windows
    </Button>
  </a>
              <HardLink to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2">
                  Contact Sales
                </Button>
              </HardLink>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No Monthly Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Online & Offline</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Google Sheets Backend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Complete ERP Features
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to run your business efficiently, all stored securely in Google Sheets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              return (
                <Card key={index} className={`${colors.border} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <CardContent className="p-8">
                    <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                      <feature.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Get started in minutes with your Google Sheets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {workflowSteps.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-slate-600" />
                )}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Built for Modern Business
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The best of both worlds — powerful ERP features with the simplicity of Google Sheets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((cap, index) => {
              const colors = getColorClasses(cap.color);
              return (
                <Card key={index} className={`${colors.border} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <CardContent className="p-6">
                    <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <cap.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{cap.title}</h3>
                    <p className="text-slate-600 text-sm">{cap.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Sheet ERP Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Sheet ERP?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Unlike traditional ERP systems that lock you into expensive subscriptions and proprietary databases, Sheet ERP gives you complete control over your data.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">No Vendor Lock-in</h3>
                    <p className="text-blue-100">Your data is in Google Sheets — export anytime, move anywhere</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Familiar Interface</h3>
                    <p className="text-blue-100">Use our app or directly edit in Google Sheets — your choice</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Zero Cost</h3>
                    <p className="text-blue-100">No monthly fees, no hidden charges, no tiered pricing</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Truly Portable</h3>
                    <p className="text-blue-100">Desktop app for offline work, web access anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <Table2 className="w-8 h-8" />
                  <div>
                    <div className="font-bold">Your Data Structure</div>
                    <div className="text-sm text-blue-200">Organized in Google Sheets</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {["📦 Inventory", "👥 CRM", "🛒 Sales", "👤 HR"].map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-blue-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Sheet ERP to manage their operations efficiently — without expensive subscriptions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="https://github.com/wthriver/sheet-erp/releases/download/v1.0.1/Sheet.ERP.Setup.1.0.0.exe" download>
    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6 h-auto">
      <Download className="w-5 h-5 mr-2" />
      Download for Windows
    </Button>
  </a>
              <HardLink to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2">
                  Get Started Free
                </Button>
              </HardLink>
            </div>

            <p className="text-sm text-slate-500 mt-6">
              Available for Windows and Mac • No credit card required
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SheetERP;
