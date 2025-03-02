from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
import random
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# File to store leaderboard data
LEADERBOARD_FILE = 'leaderboard.json'

# Funny Gen Z usernames
GEN_Z_USERNAMES = [
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
]

# Initialize leaderboard if it doesn't exist
def init_leaderboard():
    if not os.path.exists(LEADERBOARD_FILE):
        # Generate random leaderboard entries
        leaderboard = {
            "global_rankings": [
                {
                    "name": username,
                    "score": random.randint(50, 700),
                    "last_updated": datetime.now().isoformat()
                } for username in random.sample(GEN_Z_USERNAMES, 10)
            ],
            "users": {}  # Store individual user data
        }
        
        # Sort by score
        leaderboard["global_rankings"] = sorted(
            leaderboard["global_rankings"], 
            key=lambda x: x["score"], 
            reverse=True
        )
        
        # Calculate ranks
        for i, entry in enumerate(leaderboard["global_rankings"]):
            entry["rank"] = get_rank(entry["score"])
        
        # Save to file
        with open(LEADERBOARD_FILE, 'w') as f:
            json.dump(leaderboard, f)
        
        return leaderboard
    
    # Load existing leaderboard
    with open(LEADERBOARD_FILE, 'r') as f:
        return json.load(f)

# Get rank based on score
def get_rank(score):
    if score < 0:
        return "Bronze"
    elif score < 50:
        return "Silver"
    elif score < 100:
        return "Gold"
    elif score < 200:
        return "Platinum"
    elif score < 350:
        return "Diamond"
    elif score < 500:
        return "Master"
    else:
        return "Grandmaster"

# Get leaderboard
@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    leaderboard = init_leaderboard()
    return jsonify(leaderboard)

# Update user score
@app.route('/api/score', methods=['POST'])
def update_score():
    data = request.json
    user_id = data.get('user_id')
    score_change = data.get('score_change', 0)
    
    if not user_id:
        return jsonify({"error": "User ID is required"}), 400
    
    leaderboard = init_leaderboard()
    
    # Get or create user
    if user_id not in leaderboard["users"]:
        leaderboard["users"][user_id] = {
            "name": user_id,
            "score": 0,
            "scenarios_completed": 0,
            "last_updated": datetime.now().isoformat()
        }
    
    # Update user score
    user = leaderboard["users"][user_id]
    user["score"] += score_change
    user["scenarios_completed"] += 1 if score_change != 0 else 0
    user["last_updated"] = datetime.now().isoformat()
    user["rank"] = get_rank(user["score"])
    
    # Check if user is in global rankings
    user_in_rankings = False
    for i, entry in enumerate(leaderboard["global_rankings"]):
        if entry["name"] == user_id:
            entry["score"] = user["score"]
            entry["rank"] = user["rank"]
            entry["last_updated"] = user["last_updated"]
            user_in_rankings = True
            break
    
    # Add user to global rankings if not present
    if not user_in_rankings:
        leaderboard["global_rankings"].append({
            "name": user_id,
            "score": user["score"],
            "rank": user["rank"],
            "last_updated": user["last_updated"]
        })
    
    # Sort global rankings by score
    leaderboard["global_rankings"] = sorted(
        leaderboard["global_rankings"], 
        key=lambda x: x["score"], 
        reverse=True
    )
    
    # Save updated leaderboard
    with open(LEADERBOARD_FILE, 'w') as f:
        json.dump(leaderboard, f)
    
    return jsonify({
        "user": user,
        "global_position": next((i+1 for i, entry in enumerate(leaderboard["global_rankings"]) 
                               if entry["name"] == user_id), None)
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000) 