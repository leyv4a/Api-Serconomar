import mysql from'promise-mysql';
import dotenv from 'dotenv';
dotenv.config();

const Connection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
});

export const getConnection = async () =>{
    return await Connection;
}
//  default getConnection;
