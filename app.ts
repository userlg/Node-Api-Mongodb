import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './routes';

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api',router);

export default app;