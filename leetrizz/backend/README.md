# LeetRizz Backend

This is a simple Flask backend for the LeetRizz application that handles the leaderboard functionality.

## Setup

1. Make sure you have Python 3.8+ installed
2. Install the required packages:

```bash
pip install -r requirements.txt
```

## Running the Backend

Start the Flask server:

```bash
python app.py
```

The server will run on http://localhost:5000

## API Endpoints

### GET /api/leaderboard

Returns the current leaderboard data.

Example response:
```json
{
  "global_rankings": [
    {
      "name": "RizzLord420",
      "score": 650,
      "rank": "Grandmaster",
      "last_updated": "2023-09-01T12:34:56.789Z"
    },
    ...
  ],
  "users": {
    "user123": {
      "name": "user123",
      "score": 75,
      "rank": "Gold",
      "scenarios_completed": 5,
      "last_updated": "2023-09-01T12:34:56.789Z"
    },
    ...
  }
}
```

### POST /api/score

Updates a user's score.

Request body:
```json
{
  "user_id": "user123",
  "score_change": 10
}
```

Example response:
```json
{
  "user": {
    "name": "user123",
    "score": 85,
    "rank": "Gold",
    "scenarios_completed": 6,
    "last_updated": "2023-09-01T12:34:56.789Z"
  },
  "global_position": 5
}
``` 