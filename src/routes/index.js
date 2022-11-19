import  express  from "express";
import Jogos from "./jogosRoutes.js";
import usuarios from "./usuarioRoutes.js";


const routes = (app) =>{
    app.route('/' ).get((req, res)=>{
        res.status(200).send({titulo: 'API REST'})
    })


    app.use(
        express.json(),
        Jogos,
        usuarios
    )
}

export default routes;