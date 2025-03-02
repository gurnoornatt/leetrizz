import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Navbar */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold font-mono text-[#00FF00]">LeetRizz</span>
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#00FFFF]">
          Level Up Your Rizz Game
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
          Practice your texting skills, get instant feedback, and climb the leaderboard to become the ultimate Rizz Master.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-medium text-lg px-8 py-6">
            <Link href="/app">Start Practicing</Link>
          </Button>
          <Button variant="outline" className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10 font-medium text-lg px-8 py-6">
            <Link href="/leaderboard">View Leaderboard</Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-4xl font-bold text-[#00FF00] mb-2">40+</div>
            <div className="text-gray-300">Unique Scenarios</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-4xl font-bold text-[#00FF00] mb-2">7</div>
            <div className="text-gray-300">Skill Ranks</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="text-4xl font-bold text-[#00FF00] mb-2">1000+</div>
            <div className="text-gray-300">Active Players</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#00FFFF]">Features</span> that set you apart
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#00FF00] transition-colors group">
            <div className="w-12 h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FF00]/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Real Scenarios</h3>
            <p className="text-gray-400">Practice with 40+ real-world texting scenarios across different categories and difficulty levels.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#00FF00] transition-colors group">
            <div className="w-12 h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FF00]/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m6.8 14-3.5 2"/><path d="m20.7 16-3.5-2"/><path d="M6.8 10 3.3 8"/><path d="m20.7 8-3.5 2"/><path d="m9 22 3-8 3 8"/><path d="M8 22h8"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Complexity Rating</h3>
            <p className="text-gray-400">Get instant feedback on your responses with our unique O-notation complexity rating system.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#00FF00] transition-colors group">
            <div className="w-12 h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FF00]/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Competitive Ranking</h3>
            <p className="text-gray-400">Climb from Bronze to Grandmaster as you improve your skills and compete with others globally.</p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#00FF00] transition-colors group">
            <div className="w-12 h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FF00]/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Dark Mode</h3>
            <p className="text-gray-400">Toggle between light and dark mode for the perfect texting environment, day or night.</p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#00FF00] transition-colors group">
            <div className="w-12 h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FF00]/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Global Leaderboard</h3>
            <p className="text-gray-400">See how you stack up against other players with our real-time global leaderboard system.</p>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#00FF00] transition-colors group">
            <div className="w-12 h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FF00]/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Gen Z Approved</h3>
            <p className="text-gray-400">Stay current with modern texting slang, emojis, and communication styles that actually work.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-12 rounded-2xl border border-gray-700 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to level up your texting game?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of others who are mastering the art of modern communication.
          </p>
          <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-medium text-lg px-8 py-6">
            <Link href="/app">Start Rizzing Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl font-bold font-mono text-[#00FF00]">LeetRizz</span>
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

