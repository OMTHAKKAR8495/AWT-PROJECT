# Nexus Dynamics - Enterprise Web Portal & AI Resume Analyzer

A unified, high-performance web platform combining an enterprise corporate portal with an AI-powered Resume Analyzer, ATS Evaluation Engine, Company Eligibility Job Matcher, and Interview Practice Studio.

## 🚀 Key Features

- **Enterprise Portal**: Home, About Us, Global Divisions, Careers (200+ jobs with filtering), and Contact Us.
- **AI Resume Analyzer**: PDF/DOCX/TXT resume parsing, candidate name extraction, technical skill extraction, and ATS compatibility scoring.
- **AI Job Matching**: Instant company-specific eligibility decision (`OFFICIALLY ELIGIBLE`, `PARTIALLY ELIGIBLE`, `NEEDS SKILL UPGRADE`) and skill gap analytics.
- **AI Interview Studio**: Role-tailored technical and STAR behavioral interview questions with an interactive live practice mode.
- **Candidate Database**: Searchable local candidate database for managing evaluation records.
- **Multi-Theme Engine**: 5 dynamic color palettes (Electric Violet, Royal Sapphire, Cyber Emerald, Sunset Crimson, Midnight Titanium).
- **Express & MongoDB Backend**: Production-ready REST API backend located in `/server`.

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Running Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/OMTHAKKAR8495/AWT-PROJECT.git
   cd AWT-PROJECT
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Frontend Dev Server**:
   ```bash
   npm run dev
   ```

4. **Start Backend Express & MongoDB Server**:
   ```bash
   npm run server
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Project Structure

```
.
├── server/                     # Backend Express.js & MongoDB Server
├── src/
│   ├── components/             # Reusable UI Components & Modals
│   ├── data/                   # Mock Data, Jobs Database, Sample Resumes
│   ├── pages/                  # Main Page Views (HomePage, ResumeAnalyzer, JobMatches, etc.)
│   ├── types/                  # TypeScript Types & Interfaces
│   ├── utils/                  # PDF Extraction, Resume Parser, Job Matcher, PDF Export
│   ├── App.tsx                 # Main Application Layout & State Management
│   └── index.css               # Design System & Custom CSS Variable Themes
├── index.html
├── package.json
└── vite.config.ts
```
