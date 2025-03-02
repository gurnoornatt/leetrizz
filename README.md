# LeetRizz

LeetRizz is a platform where you can practice and improve your texting skills in a fun, competitive environment. Think of it as LeetCode, but for your "rizz" (charm or ability to attract a romantic partner through conversation).

## Project Structure

This repository contains the LeetRizz application in the `leetrizz` directory. The application consists of:

- A Next.js frontend
- A Python Flask backend for the leaderboard functionality

## Getting Started

### Option 1: Using the Convenience Script

The easiest way to run both the frontend and backend servers is to use the provided script:

```bash
./dev.sh
```

This will start both the Next.js frontend and Flask backend simultaneously.

### Option 2: Running Servers Manually

#### Frontend

To run the frontend server:

```bash
cd leetrizz
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

#### Backend

To run the backend server:

1. Install the required Python packages:

```bash
cd leetrizz/backend
pip install -r requirements.txt
```

2. Start the Flask server:

```bash
python app.py
```

The backend will be available at [http://localhost:5000](http://localhost:5000).

## Features

- Practice your "rizz" skills with 40 different text scenarios
- Scenarios are categorized by difficulty and type
- Get feedback on your responses with a complexity rating
- Compete on the leaderboard with a ranked competitive system
- Choose between light and dark mode

## Learn More

For more details about the application, check out the README in the `leetrizz` directory. 