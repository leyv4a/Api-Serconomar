import {getConnection} from './database.js'

export const getAll = async () => {
   try {
    const connection = await getConnection();

     const rows = await connection.query('SELECT * FROM BolsaTrabajo');

     await connection.end();
     return rows;
   } catch (error) {
    const now = new Date();
    console.error(now.toLocaleString()+ ' Error en la aplicación:', error);
   }
  };

export const AddItem = async (titulo, descripcion, requisitos, ubicacion, estadoCivil, edad, sexo, escolaridad, cantidad, estado) => {
    try {
        const connection = await getConnection();

        const data = [titulo,descripcion,requisitos,ubicacion,estadoCivil,edad,sexo,escolaridad,cantidad,estado];

      
        const query = "INSERT INTO BolsaTrabajo (titulo, descripcion, requisitos, ubicacion, estadoCivil, edad, sexo, escolaridad, cantidad, estado) VALUES (?,?,?,?,?,?,?,?,?,?)";

        await connection.query(query, data);

        return true;

    }catch(error){
        const now = new Date();
        if (error.code === 'ER_DUP_ENTRY') {
            
            console.log(now.toLocaleString()+' El título ya existe en la base de datos');
        } else {
            // Manejar otros errores
           console.log(now.toLocaleString()+ error);
        }
    }
}