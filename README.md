# Nexus Dynamics Global — Enterprise Portal

> Fortune 500 MNC enterprise platform with AI-powered resume analysis, ATS scoring, job matching, interview preparation, and candidate management.

## 📁 Project Structure

```
.
├── Frontend/          # React + TypeScript + Vite web application
├── Backend/           # Node.js + Express REST API + MongoDB
├── MobileApp/         # React Native / Flutter app (coming soon)
├── assets/readme/     # Project images & documentation assets
├── scripts/           # Deployment & utility scripts
├── .gitignore
├── README.md
└── render.yaml        # Render.com deployment config
```

## 🚀 Quick Start

### Frontend
```bash
cd Frontend
npm install
npm run dev          # http://localhost:5173
```

### Backend
```bash
cd Backend
npm install
node src/index.js    # http://localhost:5001
```

## ✨ Features

- 🤖 **AI Resume Analyzer** — ATS score, keyword audit, skill gap analysis
- 🎯 **Job Matching Engine** — Company-specific eligibility matrix
- 🎤 **Interview Studio** — Role-specific Q&A practice sessions
- 🗃️ **Candidate Database** — Save, search & email evaluation reports
- 📧 **Email Reports** — Direct API, Gmail Web & native mail client
- 🌍 **Multi-language** — EN, HI, GU, ES, FR, ZH support
- 🎨 **5 Color Themes** — Violet, Sapphire, Emerald, Crimson, Obsidian
- 🌙 **Dark / Light mode**

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Backend | Node.js, Express, MongoDB, Mongoose |
| Email | FormSubmit API, Gmail Web, Nodemailer |
| Deployment | Render.com (`render.yaml`) |

## 📦 Deployment

Configured for **Render.com** — see [`render.yaml`](./render.yaml).
