import express from 'express';
import { PORT } from './config/serverConfig.js';

const app = express();

app.get('/ping', (req, res) => {
    return res.json({ message: 'Hello World!' });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})