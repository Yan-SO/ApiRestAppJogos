import mongoose from "mongoose";


const usuarioShema = new mongoose.Schema(
    {
        id:{type: String},
        nomeUsuario:{type: String, required: true},
        senha:{type: String, required: true},
        listaJogos:[{type: mongoose.Schema.Types.ObjectId, ref: "Jogos"}],
        imagemAvatar:{type: String},
    }
);

const usuarios = mongoose.model("usuario", usuarioShema);

export default usuarios;