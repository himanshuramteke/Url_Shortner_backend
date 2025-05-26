import express from 'express';
import { connectDB } from './config/dbConfig.js';
import { FRONTEND_URL, PORT } from './config/serverConfig.js';
import apiRouter from './routes/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { attachUser } from './utils/attachUser.js';
import { errorHandler } from './utils/errorHandler.js';

const app = express();

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser);
app.use(errorHandler);

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});