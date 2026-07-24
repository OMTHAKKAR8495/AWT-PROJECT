import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/careermatch_ai_db';
    const conn = await mongoose.connect(mongoUri);
    console.log(`🍃 MongoDB Connected: ${conn.connection.host} [Database: ${conn.connection.name}]`);
  } catch (error) {
    console.warn('⚠️ MongoDB local connection warning:', error);
    console.log('💡 Note: Ensure MongoDB is running locally or set MONGODB_URI in server/.env');
  }
};
