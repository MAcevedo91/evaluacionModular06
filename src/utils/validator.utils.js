

const  REGEX_PATRON = {
    title: /^[a-zA-ZáéíóúÁÉÍÓÚñÑäëïöüÄËÏÖÜ\s]+$/,
    date: /^[0-2]{1}[0-9]{3}$/
}

export class Validate {

    static validateTitle(title, fieldName) {
        if (!title.trim() || typeof title !== 'string') throw new validatorError(`El campo ${fieldName} es obligatorio y debe ser una cadena de texto.`);

        if (!REGEX_PATRON.title.test(title.trim())) throw new validatorError(`El campo ${fieldName} solo puede contener letras y espacios.`);
            
    }

    static validateReleaseYear(releaseYear, fielName) {
        if (!date.trim() || typeof date !== 'string') throw new validatorError(`El campo ${fielName} es obligatorio y debe ser una cadena de texto.`);

        if (!REGEX_PATRON.date.test(date.trim())) throw new validatorError(`El campo ${fielName} debe ser un año válido de 4 dígitos.`);

        return date.trim();
    }
}