import express from 'express';
import { connectDB } from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})