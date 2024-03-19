import mysql from'promise-mysql';
import dotenv from 'dotenv';
dotenv.config();


const config = {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
};

export const getConnection = async () => {
    try {
        const connection = await mysql.createConnection(config);
        console.log('Conexión exitosa a la base de datos');
        return connection;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};
