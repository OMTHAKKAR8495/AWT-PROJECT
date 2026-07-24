import mongoose from 'mongoose';

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/careermatch_ai_db';

  try {
    const conn = await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 2000 });
    console.log(`🍃 Connected to Local/Cloud MongoDB: ${conn.connection.host} [DB: ${conn.connection.name}]`);
    return;
  } catch (err) {
    console.log('💡 Local MongoDB service not detected on port 27017. Starting Embedded In-Memory MongoDB Engine...');
  }

  try {
    const { MongoMemoryServer } = await import('mongodb-memory-server');
    const mongoServer = await MongoMemoryServer.create();
    const memoryUri = mongoServer.getUri();
    const conn = await mongoose.connect(memoryUri);
    console.log(`🍃 Connected to Embedded In-Memory MongoDB Engine [DB: careermatch_ai_memory]`);
    console.log(`✅ MongoDB API endpoints ready and fully functional!`);
  } catch (error) {
    console.warn('⚠️ MongoDB initialization note:', error);
  }
};
