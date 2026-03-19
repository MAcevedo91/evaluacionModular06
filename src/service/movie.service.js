import { Movie } from '../models/Movie.js';
import { MovieError, NotFoundError } from '../utils/errors.utils.js';
import { FileUtils } from '../utils/file.utils.js';

export class MovieService {

    static #Pathfile = './data/movie.json';

    static async createMovie(movie) {
        try {
            await FileUtils.pathEnsure(this.#Pathfile);
            const movies = await FileUtils.readFile(this.#Pathfile);
            const newMovie = Movie.create(movie);

            if (!movies) {
                const movieData = [newMovie.toJSON()];
                await FileUtils.writeFile(this.#Pathfile, movieData);
                return newMovie.toJSON();
            }
            movies.push(newMovie.toJSON());

            await FileUtils.writeFile(this.#Pathfile, movies);
            return newMovie.toJSON();
        } catch (error) {
            throw new MovieError('Error creating movie', error.massage);
        }
    }

    static async readData() {
        try {
            const moviesRaw = await FileUtils.readFile(this.#Pathfile);
            const movies = moviesRaw.map((movie) => {
                const movieInstance = Movie.create(movie);
                return movieInstance.toJSON();
            });
            return movies;
        } catch (error) {
            throw new MovieError('Error al leer los datos de las películas', error.message);
        }
    }

    static async getById(id) {
        try {
            const data = await FileUtils.readFile(this.#Pathfile);
            const movieFound = data.find((movie) => {
                return movie.id === id;
            });

            if (!movieFound)
                throw new NotFoundError(
                    "Movie not found", 
                    `The movie id ${id} doesn'exist`
                );

            return movieFound;
        } catch (error) {
            throw new MovieError("Error al leer los datos de la película", error.massage);
        }

    }
}