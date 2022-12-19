import express, { Response, Request, NextFunction } from 'express';
import routes from './routes'
import dbInit from './db/init'



dbInit();

const app = express();
app.use(express.json());
app.use(express.urlencoded());


app.use('/api', routes)

app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({ data: 'main page' });
});



export default app;