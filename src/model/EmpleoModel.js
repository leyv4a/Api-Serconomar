import {getConnection} from './database.js'

export const getAll = async () => {
   try {
    const connection = await getConnection();

     const rows = await connection.query('SELECT * FROM BolsaTrabajo');

     await connection.end();
     return rows;
   } catch (error) {
    console.error('Error en la aplicación:', error);
   }
  };

export const AddItem = async (titulo, descripcion, requisitos, ubicacion, estadoCivil, edad, sexo, escolaridad, cantidad, estado) => {
    try {
        const connection = await getConnection();

        const query = "INSERT INTO BolsaTrabajo (titulo, descripcion, requisitos, ubicacion, estadoCivil, edad, sexo, escolaridad, cantidad, estado) VALUES (?,?,?,?,?,?,?,?,?,?)";

        await connection.query(query, data);
    }catch(error){
        console.log('Error en la aplicación:', error);
    }
}