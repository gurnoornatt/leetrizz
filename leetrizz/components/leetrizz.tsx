"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUp, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { getLeaderboard, updateScore } from "@/lib/api"

// Types
type Difficulty = "Easy" | "Medium" | "Hard" | "Expert"
type Category = "All" | "Caught Cheating" | "Just Met" | "First Date" | "Situationship" | "Breakup" | "Ghosted"
type Complexity = "O(no Rizz)" | "O(1)" | "O(n)" | "O(n log n)" | "O(n²)"
type Rank = "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond" | "Master" | "Grandmaster"

interface TextScenario {
  id: string
  name: string
  difficulty: Difficulty
  category: Category
  message: string
}

interface GradeResult {
  complexity: Complexity
  feedback: string
  emojis: string[]
}

// Sample data
const sampleTexts: TextScenario[] = [
  // Female scenarios
  {
    id: "1",
    name: "Sara",
    difficulty: "Easy",
    category: "Just Met",
    message: "Hey, I saw you at the party last night. You seemed cool.",
  },
  {
    id: "2",
    name: "Becky",
    difficulty: "Hard",
    category: "Breakup",
    message: "I think we need to take a break.",
  },
  {
    id: "3",
    name: "Jessica",
    difficulty: "Medium",
    category: "Situationship",
    message: "So what are we exactly?",
  },
  {
    id: "4",
    name: "Emma",
    difficulty: "Medium",
    category: "First Date",
    message: "I had a really good time tonight.",
  },
  {
    id: "5",
    name: "Ashley",
    difficulty: "Hard",
    category: "Caught Cheating",
    message: "Who was that girl I saw you with yesterday?",
  },
  {
    id: "6",
    name: "Taylor",
    difficulty: "Expert",
    category: "Ghosted",
    message: "Hey, sorry I disappeared for two weeks. Been busy.",
  },
  {
    id: "7",
    name: "Zoe",
    difficulty: "Easy",
    category: "Just Met",
    message: "Your friend gave me your number. Hope that's okay?",
  },
  {
    id: "8",
    name: "Olivia",
    difficulty: "Medium",
    category: "First Date",
    message: "Where should we meet tomorrow?",
  },
  {
    id: "9",
    name: "Mia",
    difficulty: "Hard",
    category: "Situationship",
    message: "My friends keep asking if you're my boyfriend lol",
  },
  {
    id: "10",
    name: "Sophia",
    difficulty: "Medium",
    category: "Just Met",
    message: "Ur the one with the fire playlist at the gym right?",
  },
  {
    id: "11",
    name: "Ava",
    difficulty: "Expert",
    category: "Caught Cheating",
    message: "I saw your Snap location at her place last night. Wanna explain?",
  },
  {
    id: "12",
    name: "Isabella",
    difficulty: "Hard",
    category: "Ghosted",
    message: "Wow you're alive? It's been a month since you left me on read",
  },
  {
    id: "13",
    name: "Lily",
    difficulty: "Medium",
    category: "First Date",
    message: "That restaurant was mid tbh. Wanna try somewhere else next time?",
  },
  {
    id: "14",
    name: "Chloe",
    difficulty: "Easy",
    category: "Just Met",
    message: "We matched on Hinge! Your dog is so cute btw",
  },
  {
    id: "15",
    name: "Grace",
    difficulty: "Hard",
    category: "Breakup",
    message: "I think we should see other people... it's not you it's me fr",
  },
  {
    id: "16",
    name: "Ella",
    difficulty: "Medium",
    category: "Situationship",
    message: "My parents want to meet you... is that weird?",
  },
  {
    id: "17",
    name: "Scarlett",
    difficulty: "Expert",
    category: "Caught Cheating",
    message: "Your ex just DMed me screenshots of y'all texting yesterday",
  },
  {
    id: "18",
    name: "Victoria",
    difficulty: "Hard",
    category: "Ghosted",
    message: "I thought we vibed and then you just dipped? Not cool",
  },
  {
    id: "19",
    name: "Madison",
    difficulty: "Easy",
    category: "First Date",
    message: "That movie was fire. Your taste is actually valid",
  },
  {
    id: "20",
    name: "Aria",
    difficulty: "Medium",
    category: "Just Met",
    message: "I stole your number from the group chat, don't be mad lol",
  },
  
  // Male scenarios
  {
    id: "41",
    name: "Ethan",
    difficulty: "Easy",
    category: "Just Met",
    message: "Hey, my friend pointed you out at the party. Thought I'd say hi.",
  },
  {
    id: "42",
    name: "Noah",
    difficulty: "Hard",
    category: "Breakup",
    message: "I've been thinking about us and I'm not sure this is working anymore.",
  },
  {
    id: "43",
    name: "Liam",
    difficulty: "Medium",
    category: "Situationship",
    message: "So are we exclusive or are we still seeing other people?",
  },
  {
    id: "44",
    name: "Mason",
    difficulty: "Medium",
    category: "First Date",
    message: "Last night was fun. We should do it again sometime.",
  },
  {
    id: "45",
    name: "Jacob",
    difficulty: "Hard",
    category: "Caught Cheating",
    message: "My friend saw you with that guy from your class. What's going on?",
  },
  {
    id: "46",
    name: "William",
    difficulty: "Expert",
    category: "Ghosted",
    message: "Hey stranger, sorry I've been MIA. Life's been crazy lately.",
  },
  {
    id: "47",
    name: "James",
    difficulty: "Easy",
    category: "Just Met",
    message: "Got your number from Alex. Hope that's cool?",
  },
  {
    id: "48",
    name: "Benjamin",
    difficulty: "Medium",
    category: "First Date",
    message: "Any preferences for dinner tomorrow? I know a few good spots.",
  },
  {
    id: "49",
    name: "Lucas",
    difficulty: "Hard",
    category: "Situationship",
    message: "My boys keep asking about you. What should I tell them?",
  },
  {
    id: "50",
    name: "Henry",
    difficulty: "Medium",
    category: "Just Met",
    message: "Aren't you the one who always has the fire workout playlists?",
  },
  {
    id: "51",
    name: "Alexander",
    difficulty: "Expert",
    category: "Caught Cheating",
    message: "I saw you were at that party with your ex. What's that about?",
  },
  {
    id: "52",
    name: "Daniel",
    difficulty: "Hard",
    category: "Ghosted",
    message: "Thought you fell off the face of the earth. It's been weeks.",
  },
  {
    id: "53",
    name: "Matthew",
    difficulty: "Medium",
    category: "First Date",
    message: "That place was kinda mid. I know somewhere better for next time.",
  },
  {
    id: "54",
    name: "Jackson",
    difficulty: "Easy",
    category: "Just Met",
    message: "We matched on Tinder! Your travel pics are dope btw",
  },
  {
    id: "55",
    name: "Sebastian",
    difficulty: "Hard",
    category: "Breakup",
    message: "I think we need some space... It's not you, just need to focus on myself rn",
  },
  {
    id: "56",
    name: "Jack",
    difficulty: "Medium",
    category: "Situationship",
    message: "My family keeps asking about you... getting kinda awkward tbh",
  },
  {
    id: "57",
    name: "Aiden",
    difficulty: "Expert",
    category: "Caught Cheating",
    message: "Someone sent me screenshots of your convo with your ex. Wanna explain?",
  },
  {
    id: "58",
    name: "Owen",
    difficulty: "Hard",
    category: "Ghosted",
    message: "Thought we had a connection and then you ghosted. What happened?",
  },
  {
    id: "59",
    name: "Gabriel",
    difficulty: "Easy",
    category: "First Date",
    message: "That movie was actually pretty good. Your choice was solid.",
  },
  {
    id: "60",
    name: "Carter",
    difficulty: "Medium",
    category: "Just Met",
    message: "Found you through mutual friends. Hope you don't mind me reaching out.",
  },
  
  // Continue with the rest of the original female scenarios
  {
    id: "21",
    name: "Layla",
    difficulty: "Hard",
    category: "Situationship",
    message: "My ex wants to get back together... idk what to do",
  },
  {
    id: "22",
    name: "Zara",
    difficulty: "Expert",
    category: "Breakup",
    message: "I can't do this anymore. You're too toxic for my mental health",
  },
  {
    id: "23",
    name: "Natalie",
    difficulty: "Medium",
    category: "First Date",
    message: "My roommate thinks you're cute. Should I be worried? 👀",
  },
  {
    id: "24",
    name: "Haley",
    difficulty: "Hard",
    category: "Caught Cheating",
    message: "Why is your profile still on Tinder? My friend just saw it",
  },
  {
    id: "25",
    name: "Audrey",
    difficulty: "Easy",
    category: "Just Met",
    message: "You're the one who spilled your drink on me at the club right? 😂",
  },
  {
    id: "26",
    name: "Brooklyn",
    difficulty: "Medium",
    category: "Ghosted",
    message: "Guess who's back from the dead? Sorry for ghosting, life's been crazy",
  },
  {
    id: "27",
    name: "Leah",
    difficulty: "Hard",
    category: "Situationship",
    message: "I think I'm catching feelings... that wasn't supposed to happen",
  },
  {
    id: "28",
    name: "Aaliyah",
    difficulty: "Expert",
    category: "Breakup",
    message: "I'm moving to LA for my dream job. Long distance isn't my thing",
  },
  {
    id: "29",
    name: "Kylie",
    difficulty: "Medium",
    category: "First Date",
    message: "My ex was at the same restaurant. That was so awkward lmao",
  },
  {
    id: "30",
    name: "Jade",
    difficulty: "Hard",
    category: "Caught Cheating",
    message: "You told me you were with the boys but you were tagged at a party with her",
  },
  {
    id: "31",
    name: "Riley",
    difficulty: "Easy",
    category: "Just Met",
    message: "Your TikTok came up on my FYP. The algorithm knows I think you're cute",
  },
  {
    id: "32",
    name: "Autumn",
    difficulty: "Medium",
    category: "Ghosted",
    message: "I thought you died or something. It's been weeks since you texted back",
  },
  {
    id: "33",
    name: "Violet",
    difficulty: "Hard",
    category: "Situationship",
    message: "I saw you with someone else at the mall. Are we exclusive or nah?",
  },
  {
    id: "34",
    name: "Bella",
    difficulty: "Expert",
    category: "Breakup",
    message: "We need to talk. This situationship isn't giving what it's supposed to give",
  },
  {
    id: "35",
    name: "Stella",
    difficulty: "Medium",
    category: "First Date",
    message: "My bestie wants to double date next time. You down?",
  },
  {
    id: "36",
    name: "Maya",
    difficulty: "Hard",
    category: "Caught Cheating",
    message: "Why did you like all her pics from 2 years ago? Seems sus",
  },
  {
    id: "37",
    name: "Willow",
    difficulty: "Easy",
    category: "Just Met",
    message: "We have the same vibe check on Spotify. That's literally a sign",
  },
  {
    id: "38",
    name: "Ivy",
    difficulty: "Medium",
    category: "Ghosted",
    message: "You left me on delivered for a week and now you wanna talk? Interesting",
  },
  {
    id: "39",
    name: "Delilah",
    difficulty: "Hard",
    category: "Situationship",
    message: "My friends say I should stop wasting time with you. Are they right?",
  },
  {
    id: "40",
    name: "Piper",
    difficulty: "Expert",
    category: "Breakup",
    message: "I think we should just be friends. The vibe is off lately",
  },
]

// Mock grading function
const gradeResponse = (response: string, scenario: TextScenario): GradeResult => {
  // This would be replaced with actual backend logic
  const length = response.length

  if (length < 10) {
    return {
      complexity: "O(no Rizz)",
      feedback: "Bruh, put some effort in 💀",
      emojis: ["💀", "👎", "🤦‍♂️"],
    }
  } else if (length < 30) {
    return {
      complexity: "O(1)",
      feedback: "Mid rizz, you can do better",
      emojis: ["😐", "👀", "🫤"],
    }
  } else if (length < 60) {
    return {
      complexity: "O(n)",
      feedback: "Not bad, they might respond",
      emojis: ["👍", "😏", "✨"],
    }
  } else if (length < 100) {
    return {
      complexity: "O(n log n)",
      feedback: "You just saved the vibe 👑",
      emojis: ["🔥", "👑", "💯"],
    }
  } else {
    return {
      complexity: "O(n²)",
      feedback: "Whoa, too much text. Keep it simple",
      emojis: ["📚", "🧐", "⚠️"],
    }
  }
}

// Get category color
const getCategoryColor = (category: Category) => {
  switch (category) {
    case "Just Met":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
    case "First Date":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
    case "Situationship":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100"
    case "Caught Cheating":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
    case "Breakup":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
    case "Ghosted":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
  }
}

// Get complexity color
const getComplexityColor = (complexity: Complexity) => {
  switch (complexity) {
    case "O(no Rizz)":
      return "text-red-500 dark:text-red-400"
    case "O(1)":
      return "text-orange-500 dark:text-orange-400"
    case "O(n)":
      return "text-yellow-500 dark:text-yellow-400"
    case "O(n log n)":
      return "text-green-500 dark:text-green-400"
    case "O(n²)":
      return "text-blue-500 dark:text-blue-400"
  }
}

// Get score for complexity
const getComplexityScore = (complexity: Complexity): number => {
  switch (complexity) {
    case "O(no Rizz)":
      return -10
    case "O(1)":
      return 5
    case "O(n)":
      return 10
    case "O(n log n)":
      return 25
    case "O(n²)":
      return 15 // Less than O(n log n) since it's "too much text"
    default:
      return 0
  }
}

// Get rank based on score
const getRank = (score: number): Rank => {
  if (score < 0) return "Bronze"
  if (score < 50) return "Silver"
  if (score < 100) return "Gold"
  if (score < 200) return "Platinum"
  if (score < 350) return "Diamond"
  if (score < 500) return "Master"
  return "Grandmaster"
}

// Get rank color
const getRankColor = (rank: Rank): string => {
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
  }
}

export default function LeetRizz() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")
  const [selectedText, setSelectedText] = useState<TextScenario | null>(null)
  const [userResponse, setUserResponse] = useState("")
  const [submittedResponse, setSubmittedResponse] = useState("")
  const [showGrade, setShowGrade] = useState(false)
  const [grade, setGrade] = useState<GradeResult | null>(null)
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [score, setScore] = useState(0)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [leaderboardData, setLeaderboardData] = useState<any[]>([])
  const [username, setUsername] = useState<string>("You")
  const [isEditingUsername, setIsEditingUsername] = useState<boolean>(false)
  const [tempUsername, setTempUsername] = useState<string>("You")
  const [globalPosition, setGlobalPosition] = useState<number | null>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Get current rank
  const currentRank = getRank(score)

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  // Fetch leaderboard data
  const fetchLeaderboard = async () => {
    try {
      // Try to fetch from the backend
      const response = await getLeaderboard().catch(() => null);
      
      if (response) {
        // If we got a response from the backend, use it
        const rankings = response.global_rankings.map((entry: any) => ({
          name: entry.name,
          rank: entry.rank,
          score: entry.score
        }));
        
        setLeaderboardData(rankings);
        
        // Find user's position
        const userEntry = rankings.find((entry: any) => entry.name === username);
        if (userEntry) {
          const position = rankings.indexOf(userEntry) + 1;
          setGlobalPosition(position);
        }
      } else {
        // Fallback to mock data if backend is not available
        const mockLeaderboardData = [
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
        ]
        
        setLeaderboardData(mockLeaderboardData)
        
        // Simulate user position
        const userEntry = { name: username, rank: currentRank, score: score }
        const combinedData = [...mockLeaderboardData, userEntry]
        const sortedData = combinedData.sort((a, b) => b.score - a.score)
        const position = sortedData.findIndex(entry => entry.name === username) + 1
        setGlobalPosition(position)
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error)
    }
  }

  // Update score on backend
  const updateScoreOnBackend = async (scoreChange: number) => {
    try {
      // Try to update score on backend
      const response = await updateScore(username, scoreChange).catch(() => null);
      
      if (response) {
        // If we got a response, update the global position
        setGlobalPosition(response.global_position);
      }
      
      // Refresh the leaderboard
      fetchLeaderboard()
    } catch (error) {
      console.error("Error updating score:", error)
    }
  }

  // Load leaderboard data when component mounts or when score changes
  useEffect(() => {
    fetchLeaderboard()
  }, [score, currentRank])

  // Filter texts by category
  const filteredTexts =
    selectedCategory === "All" ? sampleTexts : sampleTexts.filter((text) => text.category === selectedCategory)

  // Handle text selection
  const handleSelectText = (text: TextScenario) => {
    setSelectedText(text)
    setSubmittedResponse("")
    setShowGrade(false)
  }

  // Handle response submission
  const handleSubmit = () => {
    if (!userResponse.trim() || !selectedText) return

    setSubmittedResponse(userResponse)
    const result = gradeResponse(userResponse, selectedText)
    setGrade(result)
    setShowGrade(true)

    // Update score based on complexity
    const scoreChange = getComplexityScore(result.complexity)
    setScore((prevScore) => prevScore + scoreChange)
    
    // Update score on backend
    updateScoreOnBackend(scoreChange)

    setUserResponse("")
  }

  // Handle retry
  const handleRetry = () => {
    setSubmittedResponse("")
    setShowGrade(false)
  }

  // Handle next
  const handleNext = () => {
    const currentIndex = filteredTexts.findIndex((t) => t.id === selectedText?.id)
    const nextIndex = (currentIndex + 1) % filteredTexts.length
    setSelectedText(filteredTexts[nextIndex])
    setSubmittedResponse("")
    setShowGrade(false)
  }

  // Scroll to bottom of chat when new messages appear
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [chatEndRef]) //Corrected dependency

  // Handle username change
  const handleUsernameChange = () => {
    if (tempUsername.trim()) {
      setUsername(tempUsername)
      setIsEditingUsername(false)
      // Refresh leaderboard with new username
      fetchLeaderboard()
    }
  }

  return (
    <div className={`flex flex-col h-screen ${theme === "dark" ? "dark" : ""}`}>
      {/* Top Bar */}
      <header className="h-[60px] bg-background border-b flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold font-mono text-[#00FF00]">LeetRizz</h1>
          <div className="flex items-center gap-1 bg-secondary px-3 py-1 rounded-full">
            <span className="text-sm font-medium">Score:</span>
            <span
              className={cn(
                "font-mono font-bold",
                score > 0 ? "text-[#34C759]" : score < 0 ? "text-[#FF3B30]" : "text-gray-500",
              )}
            >
              {score}
            </span>
          </div>
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${getRankColor(currentRank)}`}>
            <span className="text-sm font-medium">{currentRank}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative">
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setShowLeaderboard(!showLeaderboard)} className="relative">
            <Trophy className="h-5 w-5" />
            <span className="sr-only">Leaderboard</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Categories and Text Selection */}
        <div className={`${showLeaderboard ? "hidden md:flex" : "flex"} flex-col w-full md:w-[30%] border-r bg-background`}>
          {/* Category Filters */}
          <div className="h-[100px] overflow-x-auto flex items-center p-2 border-b">
            <div className="flex gap-2">
              {["All", "Just Met", "First Date", "Situationship", "Caught Cheating", "Breakup", "Ghosted"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category as Category)}
                    className={cn(
                      "px-3 py-2 rounded-full text-sm whitespace-nowrap transition-all hover:scale-105",
                      selectedCategory === category
                        ? `${getCategoryColor(category as Category)} font-bold shadow-md`
                        : "bg-secondary text-secondary-foreground",
                    )}
                  >
                    {category}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Text List */}
          <div className="flex-1 overflow-y-auto">
            {filteredTexts.map((text) => (
              <div
                key={text.id}
                onClick={() => handleSelectText(text)}
                className={cn(
                  "h-[80px] flex items-center p-3 border-l-[5px] cursor-pointer hover:bg-[#E5F0FF] dark:hover:bg-blue-950/30 transition-colors",
                  selectedText?.id === text.id
                    ? "border-[#00FF00] shadow-md"
                    : getCategoryColor(text.category).replace("bg-", "border-").replace("text-", "").replace("dark:", "").split(" ")[0],
                )}
              >
                <div className="mr-3">
                  <div className="h-12 w-12 rounded-full bg-secondary dark:bg-secondary/80 flex items-center justify-center">
                    <span className="font-bold text-lg">{text.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <div className="font-medium truncate">{text.name}</div>
                    <div className="text-xs text-muted-foreground">3:45 PM</div>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <span
                      className={cn(
                        "text-xs px-1.5 py-0.5 rounded-full",
                        text.difficulty === "Easy"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : text.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                          : text.difficulty === "Hard"
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
                      )}
                    >
                      {text.difficulty}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{text.message}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Chat */}
        <div className={`flex-1 flex flex-col ${showLeaderboard ? "w-full md:w-[40%]" : "w-full md:w-[70%]"} bg-[#F5F5F5] dark:bg-gray-900`}>
          {/* Chat Header */}
          {selectedText ? (
            <div className="h-[60px] border-b flex items-center justify-between px-4 bg-background dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-bold">{selectedText.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-medium">{selectedText.name}</h3>
                  <div className="flex items-center gap-1">
                    <span
                      className={cn(
                        "text-xs px-2 py-0.5 rounded-full",
                        selectedText.difficulty === "Easy"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : selectedText.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                          : selectedText.difficulty === "Hard"
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
                      )}
                    >
                      {selectedText.difficulty}
                    </span>
                    <span
                      className={cn(
                        "text-xs px-2 py-0.5 rounded-full",
                        getCategoryColor(selectedText.category),
                      )}
                    >
                      {selectedText.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-[60px] border-b flex items-center px-4 bg-background dark:bg-gray-800">
              <h3 className="font-medium">Select a conversation to start</h3>
            </div>
          )}

          {/* Chat Messages */}
          {selectedText ? (
            <div className="flex-1 overflow-y-auto p-4">
              <div className="max-w-[70%] bg-[#007AFF] text-white p-3 rounded-2xl rounded-tl-sm mb-2 dark:bg-blue-700">
                <div className="font-medium mb-1">{selectedText.name}</div>
                <div>{selectedText.message}</div>
                <div className="text-xs text-white/70 mt-1">3:45 PM</div>
              </div>

              {submittedResponse && (
                <div className="max-w-[70%] bg-[#34C759] text-white p-3 rounded-2xl rounded-tr-sm mb-2 ml-auto dark:bg-green-700">
                  <div>{submittedResponse}</div>
                  <div className="text-xs text-white/70 mt-1 text-right">3:46 PM</div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-4">
                <h2 className="text-xl font-bold mb-2">Select a text to respond to</h2>
                <p className="text-muted-foreground">Choose from the list on the left to start practicing your rizz</p>
              </div>
            </div>
          )}

          {/* Input Area */}
          {selectedText && (
            <div className="p-4 bg-background dark:bg-gray-800 border-t">
              <div className="relative">
                <Input
                  value={userResponse}
                  onChange={(e) => setUserResponse(e.target.value)}
                  placeholder="Drop your rizz here..."
                  className="pr-12 rounded-full border-gray-300 dark:border-gray-700"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit()
                    }
                  }}
                />
                <Button
                  size="icon"
                  className={cn(
                    "absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full",
                    !userResponse.trim() ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed" : "bg-[#34C759] dark:bg-green-700",
                  )}
                  disabled={!userResponse.trim()}
                  onClick={handleSubmit}
                >
                  <ArrowUp className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Grade Popup */}
        {showGrade && grade && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
            <div className="bg-background rounded-xl w-[300px] p-6 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h3 className="text-lg font-mono font-bold mb-4">Rizz Complexity</h3>
              <div className={cn("text-4xl font-mono font-bold mb-4 text-center", getComplexityColor(grade.complexity))}>
                {grade.complexity}
              </div>
              <div className="text-center mb-4">
                <span
                  className={cn(
                    "inline-block px-3 py-1 rounded-full font-mono text-sm",
                    getComplexityScore(grade.complexity) > 0
                      ? "bg-[#34C759]/10 text-[#34C759] dark:bg-green-900/50 dark:text-green-400"
                      : "bg-[#FF3B30]/10 text-[#FF3B30] dark:bg-red-900/50 dark:text-red-400",
                  )}
                >
                  {getComplexityScore(grade.complexity) > 0 ? "+" : ""}
                  {getComplexityScore(grade.complexity)} points
                </span>
              </div>
              <p className="text-foreground italic mb-4 text-center">{grade.feedback}</p>
              <div className="text-2xl text-center mb-6">
                {grade.emojis.map((emoji, i) => (
                  <span key={i} className="mx-1">
                    {emoji}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={handleRetry}>
                  Retry
                </Button>
                <Button className="flex-1 bg-[#34C759] hover:bg-[#2A9E48] dark:bg-green-700 dark:hover:bg-green-800" onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Optional Leaderboard Panel */}
        {showLeaderboard && (
          <div className="flex flex-col w-full md:w-[30%] border-r bg-background">
            <div className="p-4 border-b">
              <h2 className="text-lg font-bold">Ranked Leaderboard</h2>
              <p className="text-sm text-muted-foreground">Compete with others to reach the top!</p>
            </div>
            <div className="p-4">
              <div className="mb-6">
                <h3 className="text-md font-semibold mb-2">Your Stats</h3>
                <div className="bg-secondary p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Username:</span>
                    {isEditingUsername ? (
                      <div className="flex items-center gap-1">
                        <Input
                          value={tempUsername}
                          onChange={(e) => setTempUsername(e.target.value)}
                          className="h-7 w-32 text-sm"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleUsernameChange()
                            }
                          }}
                        />
                        <Button size="sm" className="h-7 px-2" onClick={handleUsernameChange}>
                          Save
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{username}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => {
                            setTempUsername(username)
                            setIsEditingUsername(true)
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Current Rank:</span>
                    <span className={`px-2 py-1 rounded ${getRankColor(currentRank)}`}>{currentRank}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Total Score:</span>
                    <span className="font-mono font-bold">{score}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Scenarios Completed:</span>
                    <span className="font-mono">{Math.floor(score / 10)}</span>
                  </div>
                  {globalPosition && (
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm">Global Position:</span>
                      <span className="font-mono font-bold">#{globalPosition}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <h3 className="text-md font-semibold mb-2">Global Rankings</h3>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {[...leaderboardData, { name: username, rank: currentRank, score: score }]
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 10)
                  .map((player, index) => (
                    <div 
                      key={player.name} 
                      className={cn(
                        "flex justify-between items-center p-2 rounded-md",
                        player.name === username ? "border-2 border-primary" : "bg-secondary",
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono w-6 text-center">{index + 1}</span>
                        <span className={player.name === username ? "font-bold" : ""}>{player.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">{player.score}</span>
                        <span className={`px-2 py-0.5 text-xs rounded ${getRankColor(player.rank as Rank)}`}>
                          {player.rank}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
              
              <div className="mt-6 p-3 bg-secondary rounded-lg">
                <h3 className="text-sm font-semibold mb-2">Rank Requirements</h3>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Bronze:</span>
                    <span>&lt; 0 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Silver:</span>
                    <span>0-49 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gold:</span>
                    <span>50-99 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platinum:</span>
                    <span>100-199 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diamond:</span>
                    <span>200-349 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Master:</span>
                    <span>350-499 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grandmaster:</span>
                    <span>500+ points</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

