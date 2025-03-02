#!/bin/bash

# Start the backend
echo "Starting Python backend..."
cd backend
python app.py &
BACKEND_PID=$!
cd ..

# Start the frontend
echo "Starting Next.js frontend..."
npm run dev &
FRONTEND_PID=$!

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