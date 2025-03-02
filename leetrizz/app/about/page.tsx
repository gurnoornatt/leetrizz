import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
          <Link href="/about" className="text-[#00FF00] hover:text-[#00DD00] transition-colors">
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

      {/* About Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#00FFFF]">
            About LeetRizz
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="mb-4">
                LeetRizz was created with a simple mission: to help people level up their texting game in a fun, 
                competitive environment. We believe that communication skills are essential in today's digital world, 
                and we're here to help you master the art of modern conversation.
              </p>
              <p>
                Just like developers practice coding on LeetCode, you can practice your "rizz" on LeetRizz. 
                Our platform provides real-world scenarios, instant feedback, and a competitive ranking system 
                to help you improve your texting skills and confidence.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">The Team</h2>
              <p className="mb-4">
                LeetRizz was founded by a group of Gen Z developers who were tired of seeing their friends struggle 
                with dating app conversations. We combined our love for competitive gaming, coding, and social media 
                to create a platform that makes improving communication skills fun and engaging.
              </p>
              <p>
                Our team consists of developers, UX designers, and content creators who are passionate about 
                building products that help people connect better in the digital age.
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">How It Works</h2>
              <p className="mb-4">
                LeetRizz uses a unique algorithm to evaluate your responses based on length, creativity, and 
                effectiveness. We've analyzed thousands of successful conversations to create our "complexity" 
                rating system, which gives you instant feedback on your responses.
              </p>
              <p className="mb-4">
                Our scenarios are designed to cover a wide range of real-world situations, from first messages 
                to difficult conversations. Each scenario is categorized by difficulty and type, so you can 
                practice specific skills or challenge yourself with harder scenarios.
              </p>
              <p>
                As you improve, you'll climb our global leaderboard and earn ranks from Bronze to Grandmaster. 
                Compete with friends or challenge yourself to reach the top!
              </p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Join the Community</h2>
              <p className="mb-4">
                LeetRizz is more than just a platform—it's a community of people who are committed to improving 
                their communication skills. Share your experiences, learn from others, and grow together.
              </p>
              <p className="mb-4">
                Follow us on social media to stay updated on new features, tips, and community events. We're 
                constantly evolving based on user feedback, so don't hesitate to reach out with suggestions!
              </p>
              <div className="flex justify-center mt-8">
                <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-medium px-8 py-4">
                  <Link href="/app">Start Practicing Now</Link>
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