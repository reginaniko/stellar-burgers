# Stellar Burgers – Automated Test Environment & CI/CD Demo Project

**Live Test Environment:** https://reginaniko.github.io/stellar-burgers/  
**Repository:** https://github.com/reginaniko/stellar-burgers
 
A production-deployed React application serving as a stable, public test environment for my automation projects (Selenium, Cypress, API).
Backed by a fully configured CI/CD pipeline, automated testing workflow, coverage reporting, and HTML test report deployments.

## CI/CD Status

[![Jest Tests](https://github.com/reginaniko/stellar-burgers/actions/workflows/jest-report.yml/badge.svg)](https://github.com/reginaniko/stellar-burgers/actions/workflows/jest-report.yml)
![Jest Coverage](https://img.shields.io/badge/coverage-~83%25-brightgreen)

### View Latest Jest Report

➡️ https://reginaniko.github.io/stellar-burgers/test-report/

This report is automatically generated and deployed with the production site on every push to main.

## Test Automation Overview

This project includes a complete automated testing setup built for CI environments:

TODO

## CI/CD Pipeline (GitHub Actions)

A real-world multi-step CI/CD pipeline powers this project:

TODO

- Tests & Reports Workflow
- GitHub Pages Deployment Workflow
Triggered on push to main.

Steps:

npm ci

npm test (regenerates HTML report)

npm run build

Copies HTML report → dist/test-report/

Deploys dist/ to GitHub Pages

Results:

Application deployed to /

HTML Report deployed to /test-report/

- Secrets & Environment Management:

TODO

## Application Overview
A space-themed burger builder app designed for automation testing.

Primary flows:

- Ingredient browsing (API-driven)

- Drag & drop constructor

- Order creation + status updates

- Authentication and protected routes

- React Router-based navigation

Provides a wide range of testing scenarios:

- Dynamic UI behavior

- API interaction

- Async logic

- Client-side routing

- State management

## Tech Stack

| Category                 | Technologies                                                                        |
| -------------------------| ----------------------------------------------------------------------------------- |
| **Automation**           | QA	Jest, JUnit, HTML Reports, Coverage (V8), Cypress (WIP)                          |
| **CI/CD**                | GitHub Actions, Pages Deploy, Secrets, Artifacts                                    |
| **Frontend**             | React 18, Redux Toolkit, React Router v6                                            |
| **Languages**            | TypeScript, JavaScript                                                              |
| **Build Tooling**        | AWebpack 5, Babel                                                                   |
| **Hosting**              | GitHub Pages (HTTPS, auto-deployed)                                                 |


## Project Structure

```stellar-burgers/
├── .github/
│   └── workflows/
│       ├── jest-report.yml        # CI: Jest tests + reports
│       └── pages-deploy.yml       # CI/CD: build + deploy + HTML report
├── reports/                       # HTML & JUnit test reports (Jest)
├── coverage/                      # Coverage output (CI + local)
├── src/                           # Application source code
├── dist/                          # Production build (CI generated)
├── package.json
├── webpack.config.js
└── README.md
```

## Scripts

- npm start - Run development server
- npm run build - Generate production build (dist/)
- npm test - Run Jest tests (HTML + JUnit + coverage)
- npm run cypress - Open Cypress Test Runner (UI)


## Deployment

- Trigger: Push to main branch
- Pipeline: GitHub Actions → npm ci → npm run build → publish dist/ → GitHub Pages deploy
- Live Application: https://reginaniko.github.io/stellar-burgers/
- HTML Test Report: https://reginaniko.github.io/stellar-burgers/test-report/
- Uptime: 100% (GitHub-hosted, no maintenance required)


### Maintained by Regina Nikogosian

Automation Tester | E2E Testing | CI/CD
