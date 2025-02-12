import { Request, Response } from 'express';
import { Pedido } from '../models/Pedido';

// Obtener todos los pedidos
export const getPedidos = async (req: Request, res: Response) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pedidos', error });
    }
};

// Crear un nuevo pedido
export const createPedido = async (req: Request, res: Response) => {
    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el pedido', error });
    }
};

// Obtener un pedido por ID
export const getPedidoById = async (req: Request, res: Response) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (pedido) {
            res.json(pedido);
        } else {
            res.status(404).json({ message: 'Pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pedido', error });
    }
};

// Actualizar un pedido
export const updatePedido = async (req: Request, res: Response) => {
    try {
        const [updated] = await Pedido.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPedido = await Pedido.findByPk(req.params.id);
            res.json(updatedPedido);
        } else {
            res.status(404).json({ message: 'Pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el pedido', error });
    }
};

// Eliminar un pedido
export const deletePedido = async (req: Request, res: Response) => {
    try {
        const deleted = await Pedido.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Pedido eliminado' });
        } else {
            res.status(404).json({ message: 'Pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pedido', error });
    }
};