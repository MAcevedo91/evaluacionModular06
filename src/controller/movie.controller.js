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

    static async getAllData(req, res, next) {
        try {
            const data = await MovieService.readData();
            res.status(200).json({
                message: "Archivos leídos con éxito",
                statusCode: 200,
                data,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const data = await MovieService.getById(req.params.id);
            res.status(200).json({
                massage: "Archivo leído con éxito",
                statusCode:200,
                data,
            });
        } catch (error) {
            next(error);
        }
    }

    static async udateMovie(req, res, next) {
        try {
            const data = await MovieService.updateMovie(req.params.id, req.body);
            res.status(200).json({
                massage: "Película editada correctamente",
                statusCode: 200,
                data,
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteMovie(req, res, next) {
        try {
            await MovieService.deleteMovie(req.params.id);

            res.status(200).json({
                massage: "Película eliminada correctamente",
                statusCode: 200,
            });
        } catch (error) {
            next(error);
        }
    }
}