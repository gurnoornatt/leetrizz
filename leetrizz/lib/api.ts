// API client for connecting to the serverless API

// Base URL for API calls - will use relative paths in production
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3000/api';

// Get leaderboard data
export async function getLeaderboard() {
  try {
    const response = await fetch(`${API_BASE_URL}/leaderboard`);
    if (!response.ok) {
      throw new Error('Failed to fetch leaderboard');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    throw error;
  }
}

// Update user score
export async function updateScore(userId: string, scoreChange: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/score`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        score_change: scoreChange,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update score');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error updating score:', error);
    throw error;
  }
} 