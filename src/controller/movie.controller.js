import { MovieService } from '../service/movie.service.js';

export class MovieController {

    static async createMovie(req, res, next) {
        try {
            const data = await MovieService.createMovie(req.body);
            res.status(201).json({
                message: 'Movie created successfully',
                code: 201,
                data,
            });       
        } catch (error) {
            next(error);
        }
    }
}