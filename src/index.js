import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { connectDB } from './config/dbConfig.js';
import { FRONTEND_URL, PORT } from './config/serverConfig.js';
import { redirectFromShortUrl } from './controllers/shortUrl.controller.js';
import { attachUser } from './utils/attachUser.js';
import { errorHandler } from './utils/errorHandler.js';
import authRoutes from './routes/auth.js';
import shortUrlRoutes from './routes/shortUrl.js';
import userRoutes from './routes/user.js';

const app = express();

connectDB();

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser);

app.use('/api/auth', authRoutes);
app.use('/api/shortUrl', shortUrlRoutes);
app.use('/api/user', userRoutes);
app.get('/:id', redirectFromShortUrl);

app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT || 3000, () => {
        console.log(`Server is running on port ${PORT || 3000}`);
    });
}

export default app;