import express from 'express';
import {
    getUsuarios,
    createUsuario,
    getUsuarioById,
    updateUsuario,
    deleteUsuario
} from '../controllers/UsuarioController';
import { validateUsuario } from '../validators/UsuarioValidator';

const router = express.Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios', validateUsuario, createUsuario);
router.get('/usuarios/:id', getUsuarioById);
router.put('/usuarios/:id', validateUsuario, updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

export default router;