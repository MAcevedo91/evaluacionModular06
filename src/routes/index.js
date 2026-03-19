import { Router } from 'express';
import routerMovies from './movie.routes.js';

const router = Router();

router.use('/movies', routerMovies);

export default router;