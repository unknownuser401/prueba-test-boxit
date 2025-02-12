import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

export class Producto extends Model {
    public id!: number;
    public nombre!: string;
    public precio!: number;
    public stock!: number;
    public categoria!: string;

    // Método estático para inicializar el modelo
    public static initialize(sequelize: any) {
        Producto.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nombre: { type: DataTypes.STRING, allowNull: false },
            precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
            stock: { type: DataTypes.INTEGER, allowNull: false },
            categoria: { type: DataTypes.STRING }
        }, { sequelize, modelName: 'Producto' });
    }
}