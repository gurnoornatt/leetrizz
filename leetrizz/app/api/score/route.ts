import { NextRequest, NextResponse } from 'next/server';
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

interface ScoreUpdateRequest {
  user_id: string;
  score_change: number;
}

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

// Get leaderboard data
async function getLeaderboard(): Promise<Leaderboard> {
  // For production (Vercel), use in-memory storage
  if (process.env.NODE_ENV === 'production') {
    if (!inMemoryLeaderboard) {
      inMemoryLeaderboard = {
        global_rankings: [],
        users: {}
      };
    }
    return inMemoryLeaderboard;
  }
  
  // For development, try to use file storage
  try {
    await fsPromises.access(LEADERBOARD_FILE);
    const data = await fsPromises.readFile(LEADERBOARD_FILE, 'utf8');
    return JSON.parse(data) as Leaderboard;
  } catch (error) {
    // If file doesn't exist, create an empty leaderboard
    const emptyLeaderboard: Leaderboard = {
      global_rankings: [],
      users: {}
    };
    
    try {
      await fsPromises.writeFile(LEADERBOARD_FILE, JSON.stringify(emptyLeaderboard, null, 2));
    } catch (writeError) {
      console.error('Error writing leaderboard file:', writeError);
    }
    
    return emptyLeaderboard;
  }
}

// Save leaderboard to file (only in development)
async function saveLeaderboard(leaderboard: Leaderboard): Promise<void> {
  // In production, just update the in-memory leaderboard
  if (process.env.NODE_ENV === 'production') {
    inMemoryLeaderboard = leaderboard;
    return;
  }
  
  // In development, save to file
  try {
    await fsPromises.writeFile(LEADERBOARD_FILE, JSON.stringify(leaderboard, null, 2));
  } catch (error) {
    console.error('Error saving leaderboard to file:', error);
  }
}

// POST handler for updating score
export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as ScoreUpdateRequest;
    const { user_id, score_change } = data;
    
    if (!user_id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }
    
    const leaderboard = await getLeaderboard();
    
    // Get or create user
    if (!leaderboard.users[user_id]) {
      leaderboard.users[user_id] = {
        name: user_id,
        score: 0,
        scenarios_completed: 0,
        last_updated: new Date().toISOString()
      };
    }
    
    // Update user score
    const user = leaderboard.users[user_id];
    user.score += score_change;
    user.scenarios_completed = (user.scenarios_completed || 0) + (score_change !== 0 ? 1 : 0);
    user.last_updated = new Date().toISOString();
    user.rank = getRank(user.score);
    
    // Check if user is in global rankings
    let userInRankings = false;
    for (let i = 0; i < leaderboard.global_rankings.length; i++) {
      if (leaderboard.global_rankings[i].name === user_id) {
        leaderboard.global_rankings[i].score = user.score;
        leaderboard.global_rankings[i].rank = user.rank;
        leaderboard.global_rankings[i].last_updated = user.last_updated;
        userInRankings = true;
        break;
      }
    }
    
    // Add user to global rankings if not present
    if (!userInRankings) {
      leaderboard.global_rankings.push({
        name: user_id,
        score: user.score,
        rank: user.rank,
        last_updated: user.last_updated
      });
    }
    
    // Sort global rankings by score
    leaderboard.global_rankings.sort((a, b) => b.score - a.score);
    
    // Save updated leaderboard
    await saveLeaderboard(leaderboard);
    
    // Find user's global position
    const globalPosition = leaderboard.global_rankings.findIndex(entry => entry.name === user_id) + 1;
    
    return NextResponse.json({
      user,
      global_position: globalPosition || null
    });
  } catch (error) {
    console.error('Error updating score:', error);
    return NextResponse.json(
      { error: 'Failed to update score' },
      { status: 500 }
    );
  }
} 