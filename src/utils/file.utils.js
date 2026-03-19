import fs from 'fs/promises';
import path from 'path';
import { InternalServerError } from './errors.utils.js';


export class FileUtils {

    static async pathEnsure(pathFile) {
        const dir = path.dirname(pathFile);
        await fs.mkdir(dir, { recursive: true });
    }

    static async readFile(pathFile) {
        try {
            const data = await fs.readFile(pathFile, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            if (error.code === 'ENOENT') return false;

            console.error('[Error] Error al leer el archivo:', error);
            throw new InternalServerError(`[Error] Error crítico al leer ${pathFile}`, error);
        }
    }

    static async writeFile(pathFile, data) {
        try {
            await fs.writeFile(pathFile, JSON.stringify(data, null, 2), 'utf-8');
        } catch (error) {
            console.error('[Error] Error al escribir el archivo:', error);
            throw new InternalServerError(`[Error] Error crítico al escribir ${pathFile}`, error);
        }
    }
}