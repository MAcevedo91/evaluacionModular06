import { Router } from 'express';
import { MovieController } from '../controller/movie.controller.js';

const router = Router();

router.post("/", MovieController.createMovie);

export default router;