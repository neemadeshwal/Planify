import mongoose from 'mongoose';
import { MONGODB_URL } from '../utils/constants';

async function connectDB() {
  try {
    if (!MONGODB_URL) {
      throw new Error('MONGODB_URL is not defined.');
    }

    const connect = await mongoose.connect(MONGODB_URL);
    console.log('SUCCESSFULLY CONNECTED TO DATABASE ....');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export { connectDB };
