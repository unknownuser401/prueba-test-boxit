import { body, validationResult } from 'express-validator';

export const validateUsuario = [
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('email').isEmail().withMessage('El email debe ser válido'),
    body('contraseña_hash').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];