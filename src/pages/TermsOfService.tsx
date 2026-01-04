import { Card, CardContent } from "@/components/ui/card";
import { FileText, Shield, AlertCircle, CheckCircle, Users, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const TermsOfService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - WebThriver",
    "description": "Terms of Service of WebThriver - Your trusted custom web development company",
    "url": "https://webthriver.com/terms"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEOHead
        title="Terms of Service - WebThriver | Custom Web Development Company"
        description="Read WebThriver's Terms of Service. Understand the terms and conditions for using our custom web development, e-commerce, and digital marketing services."
        keywords="terms of service, webthriver terms, service agreement, custom web development company terms, legal terms"
        canonical="https://webthriver.com/terms"
        structuredData={structuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <FileText className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-slate-500">Last Updated: January 1, 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Acceptance of Terms */}
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
                  Acceptance of Terms
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  By accessing or using WebThriver's services, including our custom web development, e-commerce development, mobile app development, UI/UX design, digital marketing, and software development services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  WebThriver reserves the right to modify these terms at any time. Continued use of our services after any changes constitutes acceptance of the updated terms. We will notify users of significant changes via email or website notices.
                </p>
              </CardContent>
            </Card>

            {/* Description of Services */}
            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-green-600" />
                  Description of Services
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  WebThriver provides a comprehensive range of digital services including but not limited to:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Custom Web Development:</strong> Designing and developing bespoke websites and web applications using modern technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>E-commerce Development:</strong> Building online stores, payment integration, and inventory management systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Mobile App Development:</strong> Creating native and cross-platform mobile applications for iOS and Android</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>UI/UX Design:</strong> Providing user experience research, interface design, and prototyping services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Digital Marketing:</strong> Offering SEO, PPC advertising, social media marketing, and content marketing strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Software Development:</strong> Developing custom software solutions, CRM systems, ERP implementations, and business automation tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-purple-600" />
                  User Responsibilities
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Provide accurate, current, and complete information when using our services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Maintain the security of your account credentials and notify us immediately of unauthorized access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Use our services only for lawful purposes and in accordance with these terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Respect intellectual property rights and not infringe on copyrights, trademarks, or other proprietary rights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Not attempt to gain unauthorized access to our systems or interfere with service operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Provide timely feedback and cooperate during project development phases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Pay all agreed-upon fees and charges in a timely manner</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-l-4 border-l-yellow-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Intellectual Property Rights</h2>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">WebThriver's Intellectual Property</h3>
                    <p className="leading-relaxed">All content, designs, code, trademarks, logos, and other materials on our website and related to our services, unless otherwise stated, are owned by WebThriver and are protected by intellectual property laws. You may not use, reproduce, or distribute these materials without our express written consent.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Client Intellectual Property</h3>
                    <p className="leading-relaxed">Upon full payment and project completion, all deliverables, custom code, designs, and intellectual property created specifically for you (the "Work Product") become your property. WebThriver retains the right to use generic code, frameworks, and methodologies for other client projects.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Third-Party Components</h3>
                    <p className="leading-relaxed">Some services may incorporate third-party components, libraries, or open-source software. These components remain subject to their respective licenses and terms. We will inform you of any third-party licenses applicable to your project.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="border-l-4 border-l-indigo-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Payment Terms</h2>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Pricing and Quotes</h3>
                    <p className="leading-relaxed">All project quotes are based on requirements specified at the time of quotation. Any changes to project scope may result in additional charges. We provide detailed proposals outlining deliverables, timelines, and costs before project commencement.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Payment Schedule</h3>
                    <p className="leading-relaxed">Payment terms will be specified in your project agreement or contract. Typically, payments are structured as follows: initial deposit to begin work, milestone payments during development, and final payment upon delivery and approval.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Late Payments</h3>
                    <p className="leading-relaxed">Late payments may result in project delays or suspension of services. We reserve the right to charge interest on overdue payments at the maximum rate permitted by applicable law.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Refund Policy</h3>
                    <p className="leading-relaxed">Refunds are handled on a case-by-case basis and depend on the project stage, work completed, and circumstances. Custom development work that has been completed and delivered is generally non-refundable.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Delivery and Acceptance */}
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Project Delivery and Acceptance</h2>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Delivery Standards</h3>
                    <p className="leading-relaxed">We strive to deliver high-quality work that meets industry standards and project requirements. Deliverables will be provided in agreed formats (source code, design files, documentation) as specified in the project scope.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Testing and Quality Assurance</h3>
                    <p className="leading-relaxed">All deliverables undergo internal testing and quality assurance before delivery. We provide a reasonable warranty period to address bugs or issues arising from our development work.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Acceptance Criteria</h3>
                    <p className="leading-relaxed">Projects are considered complete when deliverables meet the agreed specifications and are accepted by you. Acceptance is confirmed through written approval or commencement of use of deliverables.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Revisions and Changes</h3>
                    <p className="leading-relaxed">Reasonable revisions are included in the project scope. Changes beyond the original scope may require change orders with adjusted timelines and costs. We will communicate any scope changes for your approval.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-l-4 border-l-orange-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-3 text-orange-600" />
                  Limitation of Liability
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  To the maximum extent permitted by applicable law, WebThriver shall not be liable for:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Indirect, incidental, special, consequential, or punitive damages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Loss of profits, data, business opportunities, or goodwill</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Downtime, service interruptions, or technical issues beyond our control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Third-party actions or services (hosting providers, payment gateways, etc.)</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Our total liability is limited to the amount paid for the specific service in question. Some jurisdictions do not allow limitations of liability, so these limitations may not apply to you.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-l-4 border-l-pink-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Termination</h2>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">By Client</h3>
                    <p className="leading-relaxed">You may terminate the agreement at any time. Cancellation fees may apply based on work completed and project stage. We will deliver all completed work up to the termination date.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">By WebThriver</h3>
                    <p className="leading-relaxed">We reserve the right to terminate services for non-payment, violation of these terms, or any other reasonable cause. We will provide notice and deliver completed work where applicable.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Effect of Termination</h3>
                    <p className="leading-relaxed">Upon termination, all outstanding fees become immediately due. You will receive deliverables completed and paid for. Ongoing support and maintenance services may be affected.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="border-l-4 border-l-teal-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-teal-600" />
                  Confidentiality
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Both parties agree to maintain confidentiality regarding:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Business information, strategies, and trade secrets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Technical information, code, and methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Client data, customer information, and business relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Project details, specifications, and financial information</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Confidentiality obligations survive termination of these terms. Information may be disclosed only when required by law or with written consent.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-l-4 border-l-cyan-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Governing Law and Dispute Resolution</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  These terms are governed by and construed in accordance with applicable laws. Any disputes arising from these terms or our services shall be resolved through:
                </p>
                <ol className="space-y-3 text-slate-600 list-decimal list-inside">
                  <li>Good faith negotiation between parties</li>
                  <li>Mediation, if negotiation fails</li>
                  <li>Arbitration or litigation in the appropriate jurisdiction, if mediation fails</li>
                </ol>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-4 opacity-90">
                  If you have any questions about these Terms of Service or our services, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Email: info@webthriver.com</p>
                  <p>Website: https://webthriver.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
