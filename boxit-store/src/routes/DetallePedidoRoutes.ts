import express from 'express';
import {
    getDetallesPedido,
    createDetallePedido,
    getDetallePedidoById,
    updateDetallePedido,
    deleteDetallePedido
} from '../controllers/DetallePedidoController';
import { validateDetallePedido } from '../validators/DetallePedidoValidator';

const router = express.Router();

router.get('/detalles-pedido', getDetallesPedido);
router.post('/detalles-pedido', validateDetallePedido, createDetallePedido);
router.get('/detalles-pedido/:id', getDetallePedidoById);
router.put('/detalles-pedido/:id', validateDetallePedido, updateDetallePedido);
router.delete('/detalles-pedido/:id', deleteDetallePedido);

export default router;