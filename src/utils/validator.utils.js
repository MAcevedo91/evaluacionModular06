import { ValidatorError } from './errors.utils.js';

const  REGEX_PATRON = {
    title: /^[a-zA-ZáéíóúÁÉÍÓÚñÑäëïöüÄËÏÖÜ\s&]+$/,
    date: /^[1-2][0-9]{3}$/
}

export class Validate {

    static validateTitle(title, fieldName) {
        if (typeof title !== 'string' || !title.trim()) throw new ValidatorError(`El campo ${fieldName} es obligatorio y debe ser una cadena de texto.`);

        if (!REGEX_PATRON.title.test(title.trim())) throw new ValidatorError(`El campo ${fieldName} solo puede contener letras y espacios.`);

        return title.trim();
    }

    static validateReleaseYear(releaseYear, fieldName) {
        const yearStr = String(releaseYear);
        if (!yearStr || (typeof releaseYear !== 'string' && typeof releaseYear !== 'number')) throw new ValidatorError(`El campo ${fieldName} es obligatorio y debe ser un número o texto.`);

        if (!REGEX_PATRON.date.test(yearStr.trim())) throw new ValidatorError(`El campo ${fieldName} debe ser un año válido de 4 dígitos.`);

        return yearStr.trim();
    }
}