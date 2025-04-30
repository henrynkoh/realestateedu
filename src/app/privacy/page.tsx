import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700">
              At RealEstateEdu, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services. 
              Please read this policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the site.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Register for an account</li>
              <li>Fill out a form</li>
              <li>Use interactive features</li>
              <li>Make a purchase</li>
              <li>Contact customer support</li>
              <li>Otherwise communicate with us</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The types of information we may collect include:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Your name, email address, phone number, and mailing address</li>
              <li>Account credentials, such as your username and password</li>
              <li>Payment information</li>
              <li>Your property preferences and investment goals</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Automatically Collected Information</h2>
            <p className="text-gray-700 mb-4">
              When you access our website, we may automatically collect certain information about your device, 
              including:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages you view</li>
              <li>Time spent on pages</li>
              <li>Links you click</li>
              <li>Other browsing information</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize your experience</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Deliver relevant advertisements</li>
              <li>Communicate with you about products, services, offers, and events</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners with whom we jointly offer products or services</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>In connection with a business transaction such as a merger, sale of assets, or acquisition</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access and update your information through your account settings</li>
              <li>Opt out of marketing communications</li>
              <li>Request deletion of your personal information</li>
              <li>Set browser cookies to alert you when cookies are being sent or to refuse cookies</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal 
              information. However, no method of transmission over the Internet or electronic storage is 
              100% secure, so we cannot guarantee absolute security.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children under 18. If you become aware that a child has provided us 
              with personal information, please contact us.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. The updated version will be indicated by an 
              updated "Last Updated" date. We encourage you to review this privacy policy frequently to be 
              informed of how we are protecting your information.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions or concerns about this privacy policy, please contact us at:
            </p>
            <div className="mt-4">
              <p className="text-gray-700">Email: privacy@realestateedu.com</p>
              <p className="text-gray-700">Phone: (123) 456-7890</p>
              <p className="text-gray-700">
                Address: 123 Real Estate Avenue<br />
                Seattle, WA 98101
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
} 