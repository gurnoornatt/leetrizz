import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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

      {/* Terms Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#00FFFF]">
            Terms of Service
          </h1>
          
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mb-8">
            <p className="text-gray-300 mb-4">
              Last Updated: November 15, 2023
            </p>
            <p className="text-gray-300">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the 
              LeetRizz website and application (the "Service") operated by LeetRizz ("us", "we", or "our").
              Your access to and use of the Service is conditioned on your acceptance of and compliance with 
              these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
          </div>
          
          <div className="space-y-8 text-gray-300">
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree 
                with any part of the terms, then you may not access the Service.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">2. Accounts</h2>
              <p className="mb-4">
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. Failure to do so constitutes a breach of the Terms, which may result 
                in immediate termination of your account on our Service.
              </p>
              <p className="mb-4">
                You are responsible for safeguarding the password that you use to access the Service and for 
                any activities or actions under your password, whether your password is with our Service or a 
                third-party service.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon 
                becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">3. Content</h2>
              <p className="mb-4">
                Our Service allows you to post, link, store, share and otherwise make available certain 
                information, text, or other material ("Content"). You are responsible for the Content that 
                you post on or through the Service, including its legality, reliability, and appropriateness.
              </p>
              <p className="mb-4">
                By posting Content on or through the Service, you represent and warrant that: (i) the Content 
                is yours (you own it) or you have the right to use it and grant us the rights and license as 
                provided in these Terms, and (ii) the posting of your Content on or through the Service does 
                not violate the privacy rights, publicity rights, copyrights, contract rights or any other 
                rights of any person.
              </p>
              <p>
                We reserve the right to terminate the account of any user found to be in violation of these terms.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Prohibited Uses</h2>
              <p className="mb-4">
                You agree not to use the Service:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate LeetRizz, a LeetRizz employee, another user, or any other person or entity.</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm LeetRizz or users of the Service or expose them to liability.</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Intellectual Property</h2>
              <p className="mb-4">
                The Service and its original content (excluding Content provided by users), features, and 
                functionality are and will remain the exclusive property of LeetRizz and its licensors. 
                The Service is protected by copyright, trademark, and other laws of both the United States 
                and foreign countries. Our trademarks and trade dress may not be used in connection with 
                any product or service without the prior written consent of LeetRizz.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account immediately, without prior notice or liability, for 
                any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="mb-4">
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate 
                your account, you may simply discontinue using the Service.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive 
                termination, including, without limitation, ownership provisions, warranty disclaimers, 
                indemnity and limitations of liability.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall LeetRizz, nor its directors, employees, partners, agents, suppliers, or 
                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from (i) your access to or use of or inability to access or use the Service; (ii) any 
                conduct or content of any third party on the Service; (iii) any content obtained from the Service; 
                and (iv) unauthorized access, use or alteration of your transmissions or content, whether based 
                on warranty, contract, tort (including negligence) or any other legal theory, whether or not we 
                have been informed of the possibility of such damage.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">8. Disclaimer</h2>
              <p className="mb-4">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" 
                basis. The Service is provided without warranties of any kind, whether express or implied, including, 
                but not limited to, implied warranties of merchantability, fitness for a particular purpose, 
                non-infringement or course of performance.
              </p>
              <p>
                LeetRizz, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will 
                function uninterrupted, secure or available at any particular time or location; b) any errors or 
                defects will be corrected; c) the Service is free of viruses or other harmful components; or d) 
                the results of using the Service will meet your requirements.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">9. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of the United States, 
                without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of 
                those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, 
                the remaining provisions of these Terms will remain in effect.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">10. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material we will try to provide at least 30 days' notice prior to any new 
                terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to 
                be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">11. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>By email: terms@leetrizz.com</li>
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
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#00FF00] hover:text-[#00DD00] text-sm transition-colors">
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