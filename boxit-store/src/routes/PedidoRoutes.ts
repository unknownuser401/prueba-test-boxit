import express from 'express';
import {
    getPedidos,
    createPedido,
    getPedidoById,
    updatePedido,
    deletePedido
} from '../controllers/PedidoController';
import { validatePedido } from '../validators/PedidoValidator';

const router = express.Router();

router.get('/pedidos', getPedidos);
router.post('/pedidos', validatePedido, createPedido);
router.get('/pedidos/:id', getPedidoById);
router.put('/pedidos/:id', validatePedido, updatePedido);
router.delete('/pedidos/:id', deletePedido);

export default router;