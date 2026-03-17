import express from 'express';
import dataRouter from './routes/routes.js';

const app = express();

app.use(express.json());

app.use('/api/v1', dataRouter);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
})