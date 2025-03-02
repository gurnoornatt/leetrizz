// This is a custom build script for Vercel
const { execSync } = require('child_process');

console.log('Starting custom Vercel build script...');
console.log('Moving to leetrizz directory...');
process.chdir('./leetrizz');

console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Building Next.js app...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Build completed successfully!'); 