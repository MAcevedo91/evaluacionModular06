import express from 'express';
import appRouter from './routes/index.js';

const app = express();

app.use(express.json());

app.use('/api/v1', appRouter);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
})