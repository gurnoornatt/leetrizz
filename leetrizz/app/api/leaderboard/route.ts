import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fsPromises } from 'fs';

// In-memory storage for production (Vercel)
let inMemoryLeaderboard: Leaderboard | null = null;

// File to store leaderboard data (for development)
const LEADERBOARD_FILE = path.join(process.cwd(), 'leaderboard.json');

// Define types
type Rank = "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond" | "Master" | "Grandmaster";

interface LeaderboardEntry {
  name: string;
  score: number;
  rank?: Rank;
  last_updated: string;
}

interface Leaderboard {
  global_rankings: LeaderboardEntry[];
  users: Record<string, LeaderboardEntry & { scenarios_completed?: number }>;
}

// Funny Gen Z usernames
const GEN_Z_USERNAMES = [
  "RizzLord420", 
  "DownBadBro", 
  "NoCapFr", 
  "SheeshMaster", 
  "YeetKing", 
  "VibeCheck101", 
  "SimplyGoated", 
  "MainCharacter", 
  "TikTokTherapist", 
  "BussinBehavior", 
  "SussyBaka", 
  "ChillPillz", 
  "CringeLord", 
  "SlayQueen", 
  "BasedGigaChad", 
  "RatioPapi", 
  "FitCheck247", 
  "SkibidiGyatt", 
  "RizzlerSupreme", 
  "IcedOutFr"
];

// Get rank based on score
function getRank(score: number): Rank {
  if (score < 0) {
    return "Bronze";
  } else if (score < 50) {
    return "Silver";
  } else if (score < 100) {
    return "Gold";
  } else if (score < 200) {
    return "Platinum";
  } else if (score < 350) {
    return "Diamond";
  } else if (score < 500) {
    return "Master";
  } else {
    return "Grandmaster";
  }
}

// Create a new leaderboard with random data
function createNewLeaderboard(): Leaderboard {
  // Generate random leaderboard entries
  const leaderboard: Leaderboard = {
    "global_rankings": [
      ...GEN_Z_USERNAMES.slice(0, 10).map(username => ({
        "name": username,
        "score": Math.floor(Math.random() * 650) + 50,
        "last_updated": new Date().toISOString()
      }))
    ],
    "users": {}
  };
  
  // Sort by score
  leaderboard.global_rankings = leaderboard.global_rankings.sort(
    (a, b) => b.score - a.score
  );
  
  // Calculate ranks
  leaderboard.global_rankings.forEach(entry => {
    entry.rank = getRank(entry.score);
  });
  
  return leaderboard;
}

// Initialize leaderboard
async function initLeaderboard(): Promise<Leaderboard> {
  // For production (Vercel), use in-memory storage
  if (process.env.NODE_ENV === 'production') {
    if (!inMemoryLeaderboard) {
      inMemoryLeaderboard = createNewLeaderboard();
    }
    return inMemoryLeaderboard;
  }
  
  // For development, try to use file storage
  try {
    await fsPromises.access(LEADERBOARD_FILE);
    const data = await fsPromises.readFile(LEADERBOARD_FILE, 'utf8');
    return JSON.parse(data) as Leaderboard;
  } catch (error) {
    const newLeaderboard = createNewLeaderboard();
    
    // Save to file (only in development)
    try {
      await fsPromises.writeFile(LEADERBOARD_FILE, JSON.stringify(newLeaderboard, null, 2));
    } catch (writeError) {
      console.error('Error writing leaderboard file:', writeError);
    }
    
    return newLeaderboard;
  }
}

// GET handler for leaderboard
export async function GET() {
  try {
    const leaderboard = await initLeaderboard();
    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard' },
      { status: 500 }
    );
  }
} 