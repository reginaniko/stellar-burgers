# Stellar Burgers – Production-Deployed Test Environment

**Live Site:** https://reginaniko.github.io/stellar-burgers/  
**Repository:** https://github.com/reginaniko/stellar-burgers  

---

## Project Description

This is a **fully deployed, production-ready React web application** hosted on **GitHub Pages** with **automated CI/CD** via **GitHub Actions**.  

The app is a **space-themed burger builder** that allows users to:
- View ingredients fetched from a live API
- Drag and drop items into a constructor
- Place orders with real-time processing
- Navigate via client-side routing

> **Purpose:** Serves as a **stable, publicly accessible test environment** for **end-to-end automation testing project** (Selenium/Java).


## What I Implemented

| Feature | Implementation |
|-------|----------------|
| **Live Deployment** | Configured GitHub Pages to serve the built app at a public URL |
| **Automated CI/CD Pipeline** | Created `.github/workflows/pages-deploy.yml` to auto-build and deploy on every push |
| **Production Build Output** | Ensured Webpack outputs static files to `dist/` folder |
| **Environment Configuration** | Set `BURGER_API_URL` via GitHub Secrets for secure API access |
| **Client-Side Routing Fix** | Added `"homepage"` field in `package.json` to prevent 404s on refresh |
| **Build Verification** | Validated `npm run build` produces working static assets |


## Tech Stack

| Layer | Technology |
|------|------------|
| **Frontend** | React 18, Redux Toolkit, React Router v6 |
| **Build Tool** | Webpack 5, Babel, TypeScript |
| **UI Components** | `@zlden/react-developer-burger-ui-components` |
| **API** | `https://norma.nomoreparties.space` (public backend) |
| **Hosting** | GitHub Pages (free, HTTPS) |
| **CI/CD** | GitHub Actions |
| **Environment** | `.env` + GitHub Secrets |
| **Testing Framework** | Cypress |


## Project Structure
```stellar-burgers/
├── .github/
│ └── workflows/
│ └── pages-deploy.yml # GitHub Actions CI/CD pipeline
├── public/ # Static assets (favicon, index.html template)
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── services/ # API calls and Redux logic
│ ├── utils/ # Helper functions (burger-api.ts)
│ ├── app/ # Redux store and routing
│ └── index.tsx # Entry point
├── dist/ # Production build output (auto-generated)
├── .env.example # Environment variable template
├── .gitignore
├── package.json # Dependencies, scripts, homepage
├── tsconfig.json
├── webpack.config.js # Build configuration
└── README.md # This file
```

## Scripts

- npm start          # Run development server
- npm run build      # Generate production build (dist/)
- npm test           # Run Jest unit tests
- npm run cypress:open  # Launch Cypress UI


## Deployment

- Trigger: Push to main branch
- Pipeline: GitHub Actions → npm ci → npm run build → deploy dist/
- URL:https://reginaniko.github.io/stellar-burgers/
- Uptime: 100% (GitHub-hosted, no maintenance required)

## Status
CI/CD Pipeline (link)    
Auto-deployed on every commit   

---
### Maintained by Regina Nikogosian        
Automation Tester | E2E Testing | CI/CD 
