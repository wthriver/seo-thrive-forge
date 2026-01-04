import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - WebThriver",
    "description": "Privacy Policy of WebThriver - Your trusted custom web development company",
    "url": "https://webthriver.com/privacy-policy"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEOHead
        title="Privacy Policy - WebThriver | Custom Web Development Company"
        description="Read WebThriver's Privacy Policy. Learn how we protect your personal information and data. Your privacy is our priority as your trusted custom web development partner."
        keywords="privacy policy, webthriver privacy, data protection, custom web development company privacy, data security"
        canonical="https://webthriver.com/privacy-policy"
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
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-slate-500">Last Updated: January 1, 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Introduction
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  WebThriver ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our custom web development, e-commerce, digital marketing, and other services.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you have any questions or concerns about our privacy practices, please contact us at info@webthriver.com.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-green-600" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Personal Information</h3>
                    <p className="leading-relaxed">When you contact us through our website, we may collect personal details including your name, email address, phone number, company information, and any other information you voluntarily provide in our contact forms or communications.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Project Information</h3>
                    <p className="leading-relaxed">For custom web development and other services, we collect information about your project requirements, specifications, timelines, budgets, and any relevant business details needed to deliver our services effectively.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Technical Information</h3>
                    <p className="leading-relaxed">We automatically collect technical data such as IP address, browser type, device information, operating system, and usage statistics to improve our website performance and user experience.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Communications</h3>
                    <p className="leading-relaxed">We store emails, chat messages, and other communications with you for project management, quality assurance, and to improve our customer service.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-purple-600" />
                  How We Use Your Information
                </h2>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To provide, maintain, and improve our custom web development, e-commerce, mobile app development, UI/UX design, digital marketing, and software development services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To process project requests, quotations, and deliver agreed-upon services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To communicate with you about your projects, provide updates, and respond to inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To send you marketing communications, newsletters, and updates about our services (with your consent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To analyze usage patterns and improve our website and service offerings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>To comply with legal obligations and protect our rights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-red-600" />
                  Data Security
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>SSL/TLS encryption for data transmission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Secure storage and access controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Regular security audits and updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Employee training on data protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Third-party security assessments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sharing Your Information */}
            <Card className="border-l-4 border-l-yellow-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Sharing Your Information</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Service Providers:</strong> With trusted third parties who assist us in operating our website, conducting business, or servicing you (e.g., hosting, analytics, payment processors)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Business Transfers:</strong> In connection with any merger, sale of assets, financing, or acquisition of all or a portion of our business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Legal Requirements:</strong> When required by law, to protect our rights, prevent fraud, or ensure safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>With Your Consent:</strong> With your explicit consent for other purposes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-l-4 border-l-indigo-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Your Rights</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>Access:</strong> Request a copy of your personal information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>Correction:</strong> Request correction of inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>Opt-out:</strong> Opt out of marketing communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>Data Portability:</strong> Receive a copy of your data in a structured, machine-readable format</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>Objection:</strong> Object to processing of your personal information</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-l-4 border-l-pink-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Cookies and Tracking</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. Cookies are small files stored on your device that help us understand your preferences and improve our services.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality and performance of our website. We use both session cookies (temporary) and persistent cookies (stored until you delete them) for legitimate purposes.
                </p>
              </CardContent>
            </Card>

            {/* Third-Party Links */}
            <Card className="border-l-4 border-l-teal-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Third-Party Websites</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our website may contain links to third-party websites not operated by us. We are not responsible for the content, privacy policies, or practices of these external sites. We encourage you to review the privacy statements of any third-party websites you visit.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="border-l-4 border-l-orange-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Children's Privacy</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="border-l-4 border-l-cyan-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Changes to This Privacy Policy</h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-4 opacity-90">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;
