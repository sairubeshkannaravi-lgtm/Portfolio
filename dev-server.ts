// Development setup script
import { execSync } from 'child_process';

console.log('Setting up development environment...');

// Remove any existing database files
try {
  execSync('del portfolio-dev.db', { stdio: 'inherit' });
  console.log('Removed existing database file');
} catch (error) {
  console.log('No existing database file to remove');
}

// Set environment variables and start the server
const env = {
  ...process.env,
  NODE_ENV: 'development',
  DATABASE_URL: '' // Empty to trigger SQLite fallback
};

console.log('Starting development server with SQLite...');
execSync('npx tsx server/index.ts', { stdio: 'inherit', env });