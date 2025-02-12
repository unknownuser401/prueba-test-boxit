import { Sequelize } from 'sequelize';
import { Producto } from './Producto';
import { Usuario } from './Usuario';
import { Pedido } from './Pedido';
import { DetallePedido } from './DetallePedido';

// Configuración de Sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mssql'
});

// Inicializar modelos
Producto.initialize(sequelize);
Usuario.initialize(sequelize);
Pedido.initialize(sequelize);
DetallePedido.initialize(sequelize);

// Definir relaciones
Usuario.hasMany(Pedido, { foreignKey: 'usuario_id' });
Pedido.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Pedido.hasMany(DetallePedido, { foreignKey: 'pedido_id' });
DetallePedido.belongsTo(Pedido, { foreignKey: 'pedido_id' });

Producto.hasMany(DetallePedido, { foreignKey: 'producto_id' });
DetallePedido.belongsTo(Producto, { foreignKey: 'producto_id' });

// Sincronizar modelos con la base de datos
sequelize.sync()
    .then(() => console.log('Modelos sincronizados con la base de datos'))
    .catch(err => console.error('Error sincronizando modelos:', err));

// Exportar sequelize y los modelos
export { sequelize, Producto, Usuario, Pedido, DetallePedido };