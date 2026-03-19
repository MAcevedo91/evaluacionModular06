import { validatorError } from './errors.utils.js';

const  REGEX_PATRON = {
    title: /^[a-zA-ZáéíóúÁÉÍÓÚñÑäëïöüÄËÏÖÜ\s]+$/,
    date: /^[0-2]{1}[0-9]{3}$/
}

export class Validate {

    static validateTitle(title, fieldName) {
        if (!title.trim() || typeof title !== 'string') throw new validatorError(`El campo ${fieldName} es obligatorio y debe ser una cadena de texto.`);

        if (!REGEX_PATRON.title.test(title.trim())) throw new validatorError(`El campo ${fieldName} solo puede contener letras y espacios.`);
            
    }

    static validateReleaseYear(releaseYear, fieldName) {
        if (!releaseYear.trim() || typeof releaseYear !== 'string') throw new validatorError(`El campo ${fieldName} es obligatorio y debe ser una cadena de texto.`);

        if (!REGEX_PATRON.date.test(releaseYear.trim())) throw new validatorError(`El campo ${fieldName} debe ser un año válido de 4 dígitos.`);

        return releaseYear.trim();
    }
}