import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

export class DetallePedido extends Model {
    public id!: number;
    public pedido_id!: number;
    public producto_id!: number;
    public cantidad!: number;
    public precio_unitario!: number;

    // Método estático para inicializar el modelo
    public static initialize(sequelize: any) {
        DetallePedido.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            pedido_id: { type: DataTypes.INTEGER, allowNull: false },
            producto_id: { type: DataTypes.INTEGER, allowNull: false },
            cantidad: { type: DataTypes.INTEGER, allowNull: false },
            precio_unitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
        }, { sequelize, modelName: 'DetallePedido' });
    }
}