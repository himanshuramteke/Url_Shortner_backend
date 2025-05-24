import express from 'express';
import { connectDB } from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})