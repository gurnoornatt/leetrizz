import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
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
          <Link href="/faq" className="text-[#00FF00] hover:text-[#00DD00] transition-colors">
            FAQ
          </Link>
          <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-medium">
            <Link href="/app">Start Rizzing</Link>
          </Button>
        </div>
      </nav>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#00FFFF]">
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-6 text-gray-300">
            {/* FAQ Item */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-white">What is LeetRizz?</h3>
              <p>
                LeetRizz is a platform where you can practice and improve your texting skills in a fun, 
                competitive environment. Think of it as LeetCode, but for your "rizz" (charm or ability to 
                attract a romantic partner through conversation).
              </p>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-white">Is LeetRizz free to use?</h3>
              <p>
                Yes! LeetRizz is completely free during our beta phase. We may introduce premium features 
                in the future, but our core functionality will always remain free.
              </p>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-white">How does the ranking system work?</h3>
              <p>
                Our ranking system is based on the points you earn from your responses. As you practice and 
                improve, you'll climb through seven ranks: Bronze, Silver, Gold, Platinum, Diamond, Master, 
                and Grandmaster. Each rank has specific point thresholds, and your global position is determined 
                by your total score compared to other users.
              </p>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-white">What does the "complexity" rating mean?</h3>
              <p>
                We use a playful rating system inspired by algorithmic complexity notation (O notation) to 
                evaluate your responses. Ratings range from "O(no Rizz)" (needs improvement) to "O(n log n)" 
                (excellent). Each rating corresponds to different point values that contribute to your overall 
                score and ranking.
              </p>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-white">Are the scenarios based on real conversations?</h3>
              <p>
                Yes! Our scenarios are inspired by real-world texting situations across different categories 
                like "Just Met," "First Date," "Situationship," and more. We've designed them to cover a wide 
                range of common texting scenarios you might encounter in modern dating.
              </p>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-white">How is my response evaluated?</h3>
              <p>
                Currently, our evaluation is primarily based on response length and content patterns. We're 
                working on more sophisticated natural language processing to provide even more accurate feedback 
                in the future. The goal is to help you understand what makes a response engaging and effective.
              </p>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-white">Can I use LeetRizz on mobile?</h3>
              <p>
                Absolutely! LeetRizz is fully responsive and works great on mobile devices. Practice your texting 
                skills anytime, anywhere.
              </p>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-white">How can I give feedback or suggest new features?</h3>
              <p>
                We love hearing from our users! You can reach out to us through our <Link href="/contact" className="text-[#00FF00] hover:text-[#00DD00] underline">contact page</Link> or 
                connect with us on social media. Your feedback helps us improve LeetRizz for everyone.
              </p>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-white">Will more scenarios be added in the future?</h3>
              <p>
                Definitely! We're constantly working on adding new scenarios across different categories and 
                difficulty levels. If you have suggestions for specific scenarios you'd like to see, let us know!
              </p>
            </div>
            
            {/* FAQ Item */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-white">Is my data private?</h3>
              <p>
                We take privacy seriously. Your responses and personal information are kept confidential and are 
                only used to improve your experience on LeetRizz. For more details, please check our <Link href="/privacy" className="text-[#00FF00] hover:text-[#00DD00] underline">privacy policy</Link>.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Still have questions?</h3>
              <p className="mb-6">
                We're here to help! Reach out to us through our contact page and we'll get back to you as soon as possible.
              </p>
              <div className="flex justify-center">
                <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-medium px-8 py-4 mr-4">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button className="bg-transparent border border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10 font-medium px-8 py-4">
                  <Link href="/app">Try LeetRizz Now</Link>
                </Button>
              </div>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M15 8v8a4 4 0 0 1-4 4"/><path d="M9 12V2h6"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 