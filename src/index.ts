import express from 'express';
import { personajeRoute } from './routes/personaje.route';

const port = 3000;
const app = express();

app.use(express.json());

app.get('/', (req: any, res: any) => {
    res.json('ok');
});

app.use('/personaje', personajeRoute);

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});