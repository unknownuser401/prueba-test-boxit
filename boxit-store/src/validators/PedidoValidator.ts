import { body, validationResult } from 'express-validator';

export const validatePedido = [
    body('usuario_id').isInt().withMessage('El ID del usuario debe ser un número entero'),
    body('total').isDecimal().withMessage('El total debe ser un número decimal')
];