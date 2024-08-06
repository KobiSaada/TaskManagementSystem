import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Specify the correct path to your .env file
dotenv.config({ path: '../api/config/.env' });


const connectDB = async () => {
    const uri = process.env.MONGO_URI;
  
   
    if (!uri) {
        console.error('The MONGO_URI environment variable is not set.');
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(uri, {
            dbName: 'managementsystem' // specify the name of the database
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error("An unknown error occurred.");
        }
        process.exit(1);
    }
};

export default connectDB;
