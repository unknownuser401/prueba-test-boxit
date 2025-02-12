import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

export class Pedido extends Model {
    public id!: number;
    public usuario_id!: number;
    public fecha!: Date;
    public total!: number;

    // Método estático para inicializar el modelo
    public static initialize(sequelize: any) {
        Pedido.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            usuario_id: { type: DataTypes.INTEGER, allowNull: false },
            fecha: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
            total: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
        }, { sequelize, modelName: 'Pedido' });
    }
}