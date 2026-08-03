import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import candidateRoutes from './routes/candidateRoutes';
import jobRoutes from './routes/jobRoutes';

dotenv.config();

const app = express();
let PORT = Number(process.env.PORT) || 5001;

// Connect to MongoDB Database
connectDB();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Welcome Route
app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: '🚀 CareerMatch AI Express + MongoDB Backend Server is online!',
    endpoints: {
      health: '/api/health',
      candidates: '/api/candidates',
      jobs: '/api/jobs'
    },
    timestamp: new Date()
  });
});

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'CareerMatch AI MongoDB Express Server', timestamp: new Date() });
});

// API Routes
app.use('/api/candidates', candidateRoutes);
app.use('/api/jobs', jobRoutes);

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server Error:', err);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

function startServer(port: number) {
  const server = app.listen(port, () => {
    console.log(`🚀 CareerMatch AI Express + MongoDB Server running on http://localhost:${port}`);
    console.log(`📡 Candidates API: http://localhost:${port}/api/candidates`);
    console.log(`📡 Jobs API:       http://localhost:${port}/api/jobs`);
  });

  server.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${port} is occupied by another process. Trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server Listen Error:', err);
    }
  });
}

startServer(PORT);
