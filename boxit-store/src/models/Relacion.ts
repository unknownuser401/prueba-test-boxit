import { Usuario } from './Usuario';
import { Pedido } from './Pedido';
import { DetallePedido } from './DetallePedido';
import { Producto } from './Producto';

// Relación: Un Usuario tiene muchos Pedidos
Usuario.hasMany(Pedido, { foreignKey: 'usuario_id' });
Pedido.belongsTo(Usuario, { foreignKey: 'usuario_id' });

// Relación: Un Pedido tiene muchos DetallePedido
Pedido.hasMany(DetallePedido, { foreignKey: 'pedido_id' });
DetallePedido.belongsTo(Pedido, { foreignKey: 'pedido_id' });

// Relación: Un Producto está en muchos DetallePedido
Producto.hasMany(DetallePedido, { foreignKey: 'producto_id' });
DetallePedido.belongsTo(Producto, { foreignKey: 'producto_id' });