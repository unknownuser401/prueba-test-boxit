import { Request, Response } from 'express';
import { DetallePedido } from '../models/DetallePedido';

// Obtener todos los detalles de pedido
export const getDetallesPedido = async (req: Request, res: Response) => {
    try {
        const detalles = await DetallePedido.findAll();
        res.json(detalles);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los detalles de pedido', error });
    }
};

// Crear un nuevo detalle de pedido
export const createDetallePedido = async (req: Request, res: Response) => {
    try {
        const detalle = await DetallePedido.create(req.body);
        res.status(201).json(detalle);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el detalle de pedido', error });
    }
};

// Obtener un detalle de pedido por ID
export const getDetallePedidoById = async (req: Request, res: Response) => {
    try {
        const detalle = await DetallePedido.findByPk(req.params.id);
        if (detalle) {
            res.json(detalle);
        } else {
            res.status(404).json({ message: 'Detalle de pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el detalle de pedido', error });
    }
};

// Actualizar un detalle de pedido
export const updateDetallePedido = async (req: Request, res: Response) => {
    try {
        const [updated] = await DetallePedido.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedDetalle = await DetallePedido.findByPk(req.params.id);
            res.json(updatedDetalle);
        } else {
            res.status(404).json({ message: 'Detalle de pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el detalle de pedido', error });
    }
};

// Eliminar un detalle de pedido
export const deleteDetallePedido = async (req: Request, res: Response) => {
    try {
        const deleted = await DetallePedido.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Detalle de pedido eliminado' });
        } else {
            res.status(404).json({ message: 'Detalle de pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el detalle de pedido', error });
    }
};