import {getAll, AddItem} from '../model/EmpleoModel.js';
import {validarCampoNoVacio, validarNumero} from '../utils/format.js';

//Funcion para obtener todos los registros

export const getAllItems = async (req, res) => {
    try {
        const empleo = await getAll();
        res.status(200).json(empleo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const newItem = async (req, res) => {
    try {
        var {titulo, descripcion, requisitos, ubicacion, estadoCivil, edad, sexo, escolaridad, cantidad, estado} = req.body;
         // Validar que los campos no estén vacíos y convertir la primera letra en mayúscula
            const tituloValidado = validarCampoNoVacio(titulo, 'Título');
            const descripcionValidada = validarCampoNoVacio(descripcion, 'Descripción');
            const requisitosValidados = validarCampoNoVacio(requisitos, 'Requisitos');
            const ubicacionValidada = validarCampoNoVacio(ubicacion, 'Ubicación');
            const estadoCivilValidado = validarCampoNoVacio(estadoCivil, 'Estado Civil');
            const sexoValidado = validarCampoNoVacio(sexo, 'Sexo');
            const escolaridadValidada = validarCampoNoVacio(escolaridad, 'Escolaridad');

                // Validar que los campos numéricos contengan números válidos
            validarNumero(edad, 'Edad',(err, item)=>{
                if(err){
                    res.status(400).send({message: err});
                    return;
                }
            });
            validarNumero(cantidad, 'Cantidad', (err, item)=>{
                if(err){
                    res.status(400).send({message: err});
                    return;
                }
            });
            validarNumero(estado, 'Estado', (err, item)=>{
                if(err){
                    res.status(400).send({message: err});
                    return;
                }
            });

            const resultado = await AddItem(tituloValidado,descripcionValidada,requisitosValidados,ubicacionValidada,estadoCivilValidado,edad,sexoValidado,escolaridadValidada,cantidad,estado);

            resultado ? 
            res.status(200).send('Datos insertados correctamente')
            :
            res.status(400).send('Error al insertar datos');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}