export class Movie {
    #id;
    #title;
    #director;
    #releaseYear;
    #genre;


    // Método constructor para inicializar las propiedades del objeto Movie
    constructor(id, title, director, releaseYear, genre) {
        this.#id = id;
        this.#title = title;
        this.#director = director;
        this.#releaseYear = releaseYear;
        this.#genre = genre;
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
        this.#title = newTitle;
    }

    set director(newDirector) {
        this.#director = newDirector;
    }

    set releaseYear(newReleaseYear) {
        this.#releaseYear = newReleaseYear;
    }

    set genre(newGenre) {
        this.#genre = newGenre;
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
            throw new Error("Invalid data for creating a movie");
        }
    }

    

}