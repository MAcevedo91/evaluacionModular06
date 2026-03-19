import { Router } from 'express';
import { MovieController } from '../controller/movie.controller.js';

const router = Router();

router.post("/", MovieController.createMovie);
router.get("/", MovieController.getAllData);
router.get("/:id/", MovieController.getById);
router.put("/:id", MovieController.udateMovie);
router.delete("/:id", MovieController.deleteMovie);

export default router;