import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { Op, Sequelize } from 'sequelize';
import { Pedido, DetallePedido, Producto, Usuario } from './models';

const app = express();
const server = http.createServer(app); // Crear un servidor HTTP
const io = new Server(server); // Configurar Socket.io

// Middleware para parsear JSON
app.use(express.json());

// Ruta para generar reportes en vivo
app.get('/reportes', async (req, res) => {
    try {
        // Obtener la fecha de hoy
        const hoy = new Date();
        const inicioDelDia = new Date(hoy.setHours(0, 0, 0, 0));
        const finDelDia = new Date(hoy.setHours(23, 59, 59, 999));

        // 1. Calcular el total de ventas del día
        const totalVentas = await Pedido.sum('total', {
            where: {
                fecha: {
                    [Op.between]: [inicioDelDia, finDelDia]
                }
            }
        });

        // 2. Calcular el producto más vendido del día
        const productoMasVendido = await DetallePedido.findOne({
            attributes: [
                'producto_id',
                [Sequelize.fn('SUM', Sequelize.col('cantidad')), 'totalVendido']
            ],
            where: {
                '$Pedido.fecha$': {
                    [Op.between]: [inicioDelDia, finDelDia]
                }
            },
            include: [{ model: Pedido, attributes: [] }],
            group: ['producto_id'],
            order: [[Sequelize.literal('totalVendido'), 'DESC']]
        });

        // Obtener el nombre del producto más vendido
        const producto = await Producto.findByPk(productoMasVendido?.producto_id);

        // 3. Calcular los usuarios con más compras del día
        const usuariosConMasCompras = await Pedido.findAll({
            attributes: [
                'usuario_id',
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'totalCompras']
            ],
            where: {
                fecha: {
                    [Op.between]: [inicioDelDia, finDelDia]
                }
            },
            group: ['usuario_id'],
            order: [[Sequelize.literal('totalCompras'), 'DESC']],
            limit: 5 // Obtener los 5 usuarios con más compras
        });

        // Obtener los nombres de los usuarios con más compras
        const usuarios = await Promise.all(
            usuariosConMasCompras.map(async (pedido) => {
                const usuario = await Usuario.findByPk(pedido.usuario_id);
                return {
                    nombre: usuario?.nombre,
                    totalCompras: pedido.getDataValue('totalCompras')
                };
            })
        );

        // Emitir los reportes a todos los clientes conectados
        io.emit('reportes', {
            totalVentas: totalVentas || 0,
            productoMasVendido: producto?.nombre || 'Ninguno',
            usuariosConMasCompras: usuarios
        });

        // Responder al cliente que hizo la solicitud
        res.json({
            message: 'Reportes generados',
            totalVentas: totalVentas || 0,
            productoMasVendido: producto?.nombre || 'Ninguno',
            usuariosConMasCompras: usuarios
        });
    } catch (error) {
        console.error('Error generando reportes:', error);
        res.status(500).json({ message: 'Error generando reportes', error });
    }
});

// Configurar conexiones de Socket.io
io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado:', socket.id);

    // Manejar la desconexión del cliente
    socket.on('disconnect', () => {
        console.log('Un cliente se ha desconectado:', socket.id);
    });
});

// Iniciar el servidor
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});