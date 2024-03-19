import {getAll, AddItem} from '../model/EmpleoModel.js';

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
        var data = req.body;

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}