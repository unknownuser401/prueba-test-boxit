import { body, validationResult } from 'express-validator';

export const validateDetallePedido = [
    body('pedido_id').isInt().withMessage('El ID del pedido debe ser un número entero'),
    body('producto_id').isInt().withMessage('El ID del producto debe ser un número entero'),
    body('cantidad').isInt({ min: 1 }).withMessage('La cantidad debe ser un número entero positivo'),
    body('precio_unitario').isDecimal().withMessage('El precio unitario debe ser un número decimal')
];