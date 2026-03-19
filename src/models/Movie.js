import  { Validate } from  '../utils/validator.utils.js';
import { MovieError } from '../utils/errors.util';


export class Movie {
    #id;
    #title;
    #director;
    #releaseYear;
    #genre;


    // Método constructor para inicializar las propiedades del objeto Movie
    constructor(id, title, director, releaseYear, genre) {
        this.#id = id;
        this.#title = Validate.validateTitle(title, 'title');
        this.#director = Validate.validateTitle(director, 'director');
        this.#releaseYear = Validate.validateReleaseYear(releaseYear, 'releaseYear');
        this.#genre = Validate.validateTitle(genre, 'genre');
    }
    
    // Getters
    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get director() {
        return this.#director;
    }

    get releaseYear() {
        return this.#releaseYear;
    }

    get genre() {
        return this.#genre;
    }

    // Setters
    set title(newTitle) {
        this.#title = Validate.validateTitle(newTitle, 'title');
    }

    set director(newDirector) {
        this.#director = Validate.validateTitle(newDirector, 'director');
    }

    set releaseYear(newReleaseYear) {
        this.#releaseYear = Validate.validateReleaseYear(newReleaseYear, 'releaseYear');
    }

    set genre(newGenre) {
        this.#genre = Validate.validateTitle(newGenre, 'genre');
    }
    
    // Método toJSON para convertir el objeto Movie a un formato JSON
    toJSON() {
        return {
            id: this.#id,
            title: this.#title,
            director: this.#director,
            releaseYear: this.#releaseYear,
            genre: this.#genre
        }
    }

    static create(data) {
        try {
            const { id, title, director, releaseYear, genre } = data;
            return new Movie(
                id, 
                title, 
                director, 
                releaseYear, 
                genre
            );
        } catch (error) {
            console.log("Error creating movie:", error);
            throw new MovieError("Invalid data for creating a movie", `Error: ${error.message}`);
        }
    }

    

}