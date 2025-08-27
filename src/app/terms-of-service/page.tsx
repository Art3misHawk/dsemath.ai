import { CheckCircle, Shield, AlertTriangle, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Header />
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <LastUpdated />
          <Introduction />
          <AcceptanceOfTerms />
          <ServiceDescription />
          <UserAccounts />
          <PaymentTerms />
          <UserConduct />
          <IntellectualProperty />
          <PrivacyPolicy />
          <ServiceAvailability />
          <LimitationOfLiability />
          <Termination />
          <ChangesToTerms />
          <ContactInformation />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
      <p className="text-xl text-gray-600">
        Please read these terms carefully before using dsemath.ai
      </p>
    </div>
  );
}

function LastUpdated() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-center space-x-2">
        <AlertTriangle className="w-5 h-5 text-blue-600" />
        <span className="font-semibold text-blue-800">Last Updated: August 27, 2025</span>
      </div>
    </div>
  );
}

function Introduction() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
      <p className="text-gray-600 leading-relaxed">
        Welcome to dsemath.ai ("we," "our," or "us"). These Terms of Service ("Terms") govern your 
        use of our AI-powered mathematics learning platform, including our website, mobile applications, 
        and all related services (collectively, the "Service"). By accessing or using our Service, 
        you agree to be bound by these Terms.
      </p>
    </section>
  );
}

function AcceptanceOfTerms() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Acceptance of Terms</h2>
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          By creating an account, accessing, or using dsemath.ai, you acknowledge that you have read, 
          understood, and agree to be bound by these Terms and our Privacy Policy.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="text-yellow-800 font-medium">Important:</p>
              <p className="text-yellow-700">
                If you are under 18 years old, you must have your parent or guardian's permission 
                to use our Service and they must agree to these Terms on your behalf.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceDescription() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Service Description</h2>
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          dsemath.ai provides an AI-powered mathematics learning platform specifically designed for 
          Hong Kong DSE (Diploma of Secondary Education) Mathematics preparation. Our services include:
        </p>
        <ul className="space-y-2 ml-6">
          {[
            "AI-generated practice questions tailored to your learning level",
            "Comprehensive question bank with 10,000+ curated DSE Math questions", 
            "Progress tracking and performance analytics",
            "Personalized study recommendations",
            "Community features and peer learning tools"
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function UserAccounts() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">4. User Accounts</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Account Creation</h3>
          <p className="text-gray-600 leading-relaxed">
            To access certain features of our Service, you must create an account. You agree to provide 
            accurate, current, and complete information during registration and to update such information 
            as necessary.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Account Security</h3>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account credentials and for 
            all activities that occur under your account. You must notify us immediately of any unauthorized 
            use of your account.
          </p>
        </div>
      </div>
    </section>
  );
}

function PaymentTerms() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Payment Terms</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Subscription Plans</h3>
          <p className="text-gray-600 leading-relaxed">
            We offer various subscription plans with different features and pricing. All prices are 
            displayed in Hong Kong Dollars (HKD) and include applicable taxes.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Billing and Renewals</h3>
          <p className="text-gray-600 leading-relaxed">
            Subscriptions automatically renew unless cancelled before the renewal date. You can cancel 
            your subscription at any time through your account settings.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Refund Policy</h3>
          <p className="text-gray-600 leading-relaxed">
            We offer a 14-day money-back guarantee for new subscribers. Refund requests must be submitted 
            within 14 days of your initial purchase.
          </p>
        </div>
      </div>
    </section>
  );
}

function UserConduct() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">6. User Conduct</h2>
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          You agree not to use our Service for any unlawful purpose or in any way that could harm 
          dsemath.ai, its users, or any third party. Prohibited activities include:
        </p>
        <ul className="space-y-2 ml-6">
          {[
            "Sharing your account credentials with others",
            "Attempting to reverse engineer or copy our AI algorithms",
            "Using the Service to cheat on actual DSE examinations",
            "Uploading malicious content or attempting to hack our systems",
            "Violating any applicable laws or regulations"
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IntellectualProperty() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Intellectual Property</h2>
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          All content, features, and functionality of dsemath.ai, including but not limited to text, 
          graphics, logos, AI algorithms, and software, are owned by us and are protected by international 
          copyright, trademark, and other intellectual property laws.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-blue-800 font-medium">Your Rights:</p>
              <p className="text-blue-700">
                You retain ownership of any original content you create using our platform, but you 
                grant us a license to use such content to improve our Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyPolicy() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Privacy Policy</h2>
      <p className="text-gray-600 leading-relaxed">
        Your privacy is important to us. Please review our{" "}
        <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
          Privacy Policy
        </Link>
        , which also governs your use of the Service and is incorporated into these Terms by reference.
      </p>
    </section>
  );
}

function ServiceAvailability() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Service Availability</h2>
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          We strive to provide reliable access to our Service, but we cannot guarantee 100% uptime. 
          The Service may be temporarily unavailable due to maintenance, updates, or technical issues.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We reserve the right to modify, suspend, or discontinue any part of the Service at any time 
          with reasonable notice to users.
        </p>
      </div>
    </section>
  );
}

function LimitationOfLiability() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Limitation of Liability</h2>
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          To the maximum extent permitted by law, dsemath.ai shall not be liable for any indirect, 
          incidental, special, consequential, or punitive damages, including without limitation, loss 
          of profits, data, use, goodwill, or other intangible losses.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
            <div>
              <p className="text-red-800 font-medium">Important Disclaimer:</p>
              <p className="text-red-700">
                dsemath.ai is a study aid and practice tool. We do not guarantee specific academic 
                results or DSE scores. Your academic performance depends on many factors beyond our Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Termination() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Termination</h2>
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Either party may terminate your access to the Service at any time. You may terminate by 
          cancelling your subscription and deleting your account. We may terminate or suspend your 
          access if you violate these Terms.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Upon termination, your right to use the Service will cease immediately, but provisions 
          regarding intellectual property, privacy, and limitation of liability will survive.
        </p>
      </div>
    </section>
  );
}

function ChangesToTerms() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Changes to Terms</h2>
      <p className="text-gray-600 leading-relaxed">
        We may update these Terms from time to time. We will notify you of any material changes by 
        posting the new Terms on this page and updating the "Last Updated" date. Your continued use 
        of the Service after such changes constitutes acceptance of the new Terms.
      </p>
    </section>
  );
}

function ContactInformation() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Information</h2>
      <div className="bg-gray-50 rounded-lg p-6">
        <p className="text-gray-600 leading-relaxed mb-4">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">Email: dsemathai20@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">Location: Hong Kong</span>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
