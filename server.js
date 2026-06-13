{
  "name": "greensource-backend",
  "version": "1.0.0",
  "description": "GreenSource — green coffee marketplace with Google sign-in + Stripe subscriptions",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "engines": { "node": ">=18" },
  "dependencies": {
    "better-sqlite3": "^11.3.0",
    "cookie-session": "^2.1.0",
    "express": "^4.21.0",
    "google-auth-library": "^9.14.0",
    "stripe": "^16.12.0"
  }
}
