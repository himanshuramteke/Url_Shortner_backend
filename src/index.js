import express from 'express';
import { PORT } from './config/serverConfig.js';
import { connectDB } from './config/dbConfig.js';
import apiRouter from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter) 

// app.get('/:id', async (req, res) => {
//     const {id} = req.params;
//     const url = await urlSchema.findOne({short_url: id})
//     if(url) {
//         res.redirect(url.full_url);
//     } else {
//         res.status(404).send('URL not found');
//     }
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})