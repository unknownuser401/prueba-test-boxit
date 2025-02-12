import { Request, Response } from 'express';
import { Producto } from '../models/Producto';

export const getProductos = async (req: Request, res: Response) => {
    const productos = await Producto.findAll();
    res.json(productos);
};

export const createProducto = async (req: Request, res: Response) => {
    const producto = await Producto.create(req.body);
    res.json(producto);
};