import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/careermatch_ai_db';
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000 // Quick 3s timeout for clean logging
    });
    console.log(`🍃 MongoDB Connected: ${conn.connection.host} [Database: ${conn.connection.name}]`);
  } catch (error) {
    console.log('⚠️ MongoDB is waiting for local connection (127.0.0.1:27017).');
    console.log('💡 To start MongoDB on Mac, run: brew services start mongodb-community');
    console.log('💡 Or set your MongoDB Atlas URI in server/.env (MONGODB_URI=mongodb+srv://...)');
  }
};
