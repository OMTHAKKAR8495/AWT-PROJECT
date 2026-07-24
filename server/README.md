# 🍃 CareerMatch AI - Express & MongoDB Backend Server

This directory contains the production-ready Node.js, Express.js, and MongoDB backend for **CareerMatch AI**.

---

## 🛠️ Tech Stack & Dependencies
- **Runtime & Server**: Node.js, Express.js, TypeScript
- **Database**: MongoDB (Mongoose ORM)
- **PDF Extraction**: `pdf-parse`
- **File Uploads**: `multer`
- **Email Service**: `nodemailer`

---

## 🚀 Quick Start Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Environment (`server/.env`)
Create or edit `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/careermatch_ai_db
CLIENT_URL=http://localhost:5173
```

### 3. Run MongoDB Locally or via Docker
- **Local MongoDB**: `mongod --dbpath /usr/local/var/mongodb`
- **Docker MongoDB**: `docker run -d -p 27017:27017 --name careermatch-mongo mongo:latest`

### 4. Start Development Server
```bash
npm run dev
```
Server starts on **http://localhost:5000**

---

## 📡 API Endpoints Reference

### Candidate Management (`/api/candidates`)
- `POST /api/candidates/upload`: Upload PDF/DOCX resume file or text payload -> Parses resume & saves record in MongoDB.
- `GET /api/candidates`: Retrieve all saved candidates from MongoDB database.
- `GET /api/candidates/:id`: Retrieve single candidate profile by MongoDB ID.
- `PATCH /api/candidates/:id`: Update candidate details (Name, Email, Title) in MongoDB.
- `DELETE /api/candidates/:id`: Delete candidate document from MongoDB.

### Company Job Openings (`/api/jobs`)
- `GET /api/jobs`: List available job roles from MongoDB.
- `POST /api/jobs`: Create new company job role in MongoDB.

### Health Check
- `GET /api/health`: Server health check endpoint.
