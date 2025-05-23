import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const MONGO_URI = process.env.MONGO_URI;

export const APP_URL = process.env.APP_URL;