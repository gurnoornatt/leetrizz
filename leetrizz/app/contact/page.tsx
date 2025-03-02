import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
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

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#00FFFF]">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full rounded-md bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 p-2"
                  />
                </div>
                
                <Button className="w-full bg-[#00FF00] hover:bg-[#00DD00] text-black font-medium">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
                <p className="text-gray-300 mb-6">
                  Have questions, feedback, or just want to say hello? We'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00FF00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00FF00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-400">support@leetrizz.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00FF00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Location</h3>
                      <p className="text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">Connect With Us</h2>
                <p className="text-gray-300 mb-6">
                  Follow us on social media for the latest updates, tips, and community highlights.
                </p>
                
                <div className="flex items-center gap-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center hover:bg-[#00FF00]/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center hover:bg-[#00FF00]/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center hover:bg-[#00FF00]/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M15 8v8a4 4 0 0 1-4 4"/><path d="M9 12V2h6"/></svg>
                  </a>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center hover:bg-[#00FF00]/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" x2="9.17" y1="4.93" y2="9.17"/><line x1="14.83" x2="19.07" y1="14.83" y2="19.07"/><line x1="14.83" x2="19.07" y1="9.17" y2="4.93"/><line x1="14.83" x2="18.36" y1="9.17" y2="5.64"/><line x1="4.93" x2="9.17" y1="19.07" y2="14.83"/></svg>
                  </a>
                </div>
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
            <Link href="/contact" className="text-[#00FF00] hover:text-[#00DD00] text-sm transition-colors">
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