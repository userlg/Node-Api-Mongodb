import express from 'express';
import morgan from 'morgan';
import cors from 'cors';



import router from './routes';

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api',router);

app.get("/",(req, res) => {
    var message = "<h2>Welcome to this View </h2>"
    console.log(message);
    res.send(message);
});

export default app;