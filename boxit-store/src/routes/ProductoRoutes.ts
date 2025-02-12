import express from 'express';
import { getProductos, createProducto } from '../controllers/ProductoController';
import { validateProducto } from '../validators/ProductoValidator';

const router = express.Router();

router.get('/productos', getProductos);
router.post('/productos', createProducto);

export default router;