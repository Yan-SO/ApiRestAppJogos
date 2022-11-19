import mongoose from "mongoose";


const jogoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true },
        statusCampanha: {type: String},
        statusplatina: {type: String},
        plataforme: {type: String, required: true},
        urlImagem: {type: String, required: true},
        texto: {type: String, required: false},
        nota: {type: Number, required: true},
    }
)


const Jogos= mongoose.model("Jogos", jogoSchema);


export default Jogos;