import mongoose from 'mongoose';

export const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log('Already connected to the database.');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
       mongoose.connection.on('connected', () => {
            console.log('Connected to the database.');
        });
    } catch (err) {
        console.log('Mongoose connection error:', err);
    }
};
