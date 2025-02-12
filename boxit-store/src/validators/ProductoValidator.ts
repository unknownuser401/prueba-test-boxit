import { body, validationResult } from 'express-validator';

export const validateProducto = [
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('precio').isDecimal().withMessage('El precio debe ser un número decimal'),
    body('stock').isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),
    body('categoria').optional().isString().withMessage('La categoría debe ser un texto')
];