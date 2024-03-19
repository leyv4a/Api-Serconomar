import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Routes from './routes/index.js';


//Configuracion
const app = express();
app.use(cors());
app.use(express.json());
app.use(Routes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

//Middleware
app.use(morgan("dev"));


//Rutas
// app.get('/bdt', async (req, res) => {
//   const connection = await getConnection(); 
//   const data = await connection.query("SELECT * FROM BolsaTrabajo");
//   res.send(data);
// });