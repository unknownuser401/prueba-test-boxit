import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

export class Usuario extends Model {
    public id!: number;
    public nombre!: string;
    public email!: string;
    public contraseña_hash!: string;

    // Método estático para inicializar el modelo
    public static initialize(sequelize: any) {
        Usuario.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nombre: { type: DataTypes.STRING, allowNull: false },
            email: { type: DataTypes.STRING, allowNull: false, unique: true },
            contraseña_hash: { type: DataTypes.STRING, allowNull: false }
        }, { sequelize, modelName: 'Usuario' });
    }
}