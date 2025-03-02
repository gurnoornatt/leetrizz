import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Navbar */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-2xl font-bold font-mono text-[#00FF00] hover:text-[#00DD00] transition-colors">LeetRizz</span>
          </Link>
          <span className="bg-[#00FF00] text-black px-2 py-0.5 text-xs rounded-md font-mono">BETA</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
            FAQ
          </Link>
          <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-medium">
            <Link href="/app">Start Rizzing</Link>
          </Button>
        </div>
      </nav>

      {/* Privacy Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#00FFFF]">
            Privacy Policy
          </h1>
          
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mb-8">
            <p className="text-gray-300 mb-4">
              Last Updated: November 15, 2023
            </p>
            <p className="text-gray-300">
              At LeetRizz, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our platform. Please read this policy 
              carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>
          
          <div className="space-y-8 text-gray-300">
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-2 text-white">Personal Data</h3>
              <p className="mb-4">
                When you create an account, we may collect personally identifiable information, such as your:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Username</li>
                <li>Email address</li>
                <li>Profile information you choose to provide</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2 text-white">Usage Data</h3>
              <p className="mb-4">
                We may also collect information on how the service is accessed and used. This usage data may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Your computer's Internet Protocol address (e.g., IP address)</li>
                <li>Browser type and version</li>
                <li>Pages of our service that you visit</li>
                <li>Time and date of your visit</li>
                <li>Time spent on those pages</li>
                <li>Response data you provide in scenarios</li>
                <li>Other diagnostic data</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To calculate your score and rank on the leaderboard</li>
                <li>To improve our response evaluation algorithms</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Security</h2>
              <p className="mb-4">
                The security of your data is important to us, but remember that no method of transmission over 
                the Internet or method of electronic storage is 100% secure. While we strive to use commercially 
                acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information 
                when you enter, submit, or access your personal information. All user data is stored in secure 
                databases protected by multiple layers of security.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Retention</h2>
              <p className="mb-4">
                We will retain your personal information only for as long as is necessary for the purposes 
                set out in this Privacy Policy. We will retain and use your information to the extent necessary 
                to comply with our legal obligations, resolve disputes, and enforce our policies.
              </p>
              <p>
                If you wish to request that we delete your data, you can contact us at privacy@leetrizz.com.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our service and hold 
                certain information. Cookies are files with a small amount of data which may include an 
                anonymous unique identifier.
              </p>
              <p className="mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
              <p>
                Examples of cookies we use:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Session Cookies:</strong> We use session cookies to operate our service.</li>
                <li><strong>Preference Cookies:</strong> We use preference cookies to remember your preferences and settings.</li>
                <li><strong>Security Cookies:</strong> We use security cookies for security purposes.</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Third-Party Services</h2>
              <p className="mb-4">
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>To facilitate our service</li>
                <li>To provide the service on our behalf</li>
                <li>To perform service-related services</li>
                <li>To assist us in analyzing how our service is used</li>
              </ul>
              <p>
                These third parties have access to your personal information only to perform these tasks on 
                our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Children's Privacy</h2>
              <p className="mb-4">
                Our service does not address anyone under the age of 13. We do not knowingly collect personally 
                identifiable information from children under 13. If you are a parent or guardian and you are 
                aware that your child has provided us with personal data, please contact us. If we become aware 
                that we have collected personal data from children without verification of parental consent, 
                we take steps to remove that information from our servers.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date at the top of this 
                Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this 
                Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>By email: privacy@leetrizz.com</li>
                <li>By visiting the <Link href="/contact" className="text-[#00FF00] hover:text-[#00DD00] underline">contact page</Link> on our website</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Link href="/">
              <span className="text-xl font-bold font-mono text-[#00FF00] hover:text-[#00DD00] transition-colors">LeetRizz</span>
            </Link>
            <span className="text-gray-500 text-sm">© 2023</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[#00FF00] hover:text-[#00DD00] text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </Link>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 0 8a4 4 0 0 0 0-8z"/><path d="M15 8a4 4 0 1 0 0-8a4 4 0 0 0 0 8z"/><path d="M15 8v8a4 4 0 0 1-4 4"/><path d="M9 12V2h6"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 