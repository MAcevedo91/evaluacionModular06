export class AppError extends Error {
    constructor(message, statusCode, details) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
    }
}

export class ValidatorError extends AppError {
    constructor(message, details) {
        super(message || 'Error de validación', 400, details);
    }
}

export class NotFoundError extends AppError {
    constructor(message, details, entity) {
        super(message || `${entity} Recurso no encontrado`, 404, details);
    }
}

export class MovieError extends AppError {
    constructor(message, details, statusCode) {
        super(message || 'Error relacionado con la película', statusCode || 500, details);
    }
}

export class InternalServerError extends AppError {
    constructor(message, details){
        super(message || 'Error interno de servidor', 500, details)
    }
}