This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Frontend

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend (Optional)

The app includes a Python backend for the leaderboard functionality. To run it:

1. Install the required Python packages:

```bash
cd backend
pip install -r requirements.txt
```

2. Start the Flask server:

```bash
python app.py
```

The backend will run on [http://localhost:5000](http://localhost:5000).

### Running Both Together

For convenience, you can use the provided script to run both the frontend and backend together:

```bash
./dev.sh
```

## Features

- Practice your "rizz" skills with 40 different text scenarios
- Scenarios are categorized by difficulty and type
- Get feedback on your responses with a complexity rating
- Compete on the leaderboard with a ranked competitive system
- Choose between light and dark mode

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
