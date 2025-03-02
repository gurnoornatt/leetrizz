#!/bin/bash

# This script runs both the frontend and backend servers for the LeetRizz application

echo "Starting LeetRizz application..."
echo "Frontend will be available at: http://localhost:3000"
echo "Backend will be available at: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Start the backend
echo "Starting Python backend..."
cd leetrizz/backend
python app.py &
BACKEND_PID=$!
cd ../..

# Start the frontend
echo "Starting Next.js frontend..."
cd leetrizz
npm run dev &
FRONTEND_PID=$!
cd ..

# Function to handle exit
function cleanup {
  echo "Shutting down servers..."
  kill $BACKEND_PID
  kill $FRONTEND_PID
  exit
}

# Trap SIGINT (Ctrl+C) and call cleanup
trap cleanup SIGINT

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID 