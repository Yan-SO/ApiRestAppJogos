import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Projeto:55133396@projeto.kotqi.mongodb.net/AppJogos?");


let db= mongoose.connection;

export default db;