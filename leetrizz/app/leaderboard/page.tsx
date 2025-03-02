import Link from "next/link"
import { Button } from "@/components/ui/button"

// Mock leaderboard data
const leaderboardData = [
  { name: "RizzLord420", rank: "Grandmaster", score: 650 },
  { name: "DownBadBro", rank: "Master", score: 480 },
  { name: "NoCapFr", rank: "Diamond", score: 320 },
  { name: "SheeshMaster", rank: "Platinum", score: 190 },
  { name: "YeetKing", rank: "Gold", score: 85 },
  { name: "VibeCheck101", rank: "Silver", score: 45 },
  { name: "SimplyGoated", rank: "Grandmaster", score: 550 },
  { name: "MainCharacter", rank: "Diamond", score: 280 },
  { name: "TikTokTherapist", rank: "Platinum", score: 150 },
  { name: "BussinBehavior", rank: "Gold", score: 75 },
  { name: "SussyBaka", rank: "Silver", score: 30 },
  { name: "ChillPillz", rank: "Bronze", score: -5 },
  { name: "CringeLord", rank: "Gold", score: 65 },
  { name: "SlayQueen", rank: "Platinum", score: 145 },
  { name: "BasedGigaChad", rank: "Diamond", score: 250 },
  { name: "RatioPapi", rank: "Silver", score: 40 },
  { name: "FitCheck247", rank: "Gold", score: 95 },
  { name: "SkibidiGyatt", rank: "Bronze", score: -15 },
  { name: "RizzlerSupreme", rank: "Master", score: 420 },
  { name: "IcedOutFr", rank: "Platinum", score: 180 }
]

// Get rank color
const getRankColor = (rank: string): string => {
  switch (rank) {
    case "Bronze":
      return "bg-amber-700 text-white"
    case "Silver":
      return "bg-gray-300 text-gray-800"
    case "Gold":
      return "bg-yellow-400 text-yellow-900"
    case "Platinum":
      return "bg-cyan-200 text-cyan-900"
    case "Diamond":
      return "bg-blue-500 text-white"
    case "Master":
      return "bg-purple-600 text-white"
    case "Grandmaster":
      return "bg-gradient-to-r from-red-500 to-purple-600 text-white"
    default:
      return "bg-gray-500 text-white"
  }
}

export default function LeaderboardPage() {
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

      {/* Leaderboard Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#00FFFF]">
            Global Leaderboard
          </h1>
          
          <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 mb-8">
            <p className="text-gray-300 mb-4">
              The LeetRizz global leaderboard showcases the top players from around the world. 
              Climb the ranks by practicing your texting skills and earning points for your responses.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-700"></span>
                <span className="text-sm">Bronze</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                <span className="text-sm">Silver</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="text-sm">Gold</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-200"></span>
                <span className="text-sm">Platinum</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="text-sm">Diamond</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-600"></span>
                <span className="text-sm">Master</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-purple-600"></span>
                <span className="text-sm">Grandmaster</span>
              </div>
            </div>
          </div>
          
          {/* Leaderboard Table */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 bg-black/20 font-medium">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-5">Player</div>
              <div className="col-span-3">Rank</div>
              <div className="col-span-3 text-right">Score</div>
            </div>
            
            <div className="max-h-[600px] overflow-y-auto">
              {leaderboardData
                .sort((a, b) => b.score - a.score)
                .map((player, index) => (
                  <div 
                    key={player.name}
                    className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="col-span-1 text-center font-mono text-gray-400">{index + 1}</div>
                    <div className="col-span-5 font-medium">{player.name}</div>
                    <div className="col-span-3">
                      <span className={`px-2 py-1 text-xs rounded ${getRankColor(player.rank)}`}>
                        {player.rank}
                      </span>
                    </div>
                    <div className="col-span-3 text-right font-mono font-bold">{player.score}</div>
                  </div>
                ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to join the competition?</h2>
            <p className="text-gray-300 mb-6">
              Start practicing your texting skills and climb the ranks to become the ultimate Rizz Master.
            </p>
            <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-medium px-8 py-4">
              <Link href="/app">Start Rizzing Now</Link>
            </Button>
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