import express from "express";
import JogosController from "../controllers/jogosController.js";

const router = express.Router();

router
    .get('/jogos', JogosController.listarJogos)
    .get('/jogos/:id', JogosController.listarJogosPorId)
    .post('/jogos', JogosController.cadastarJogo)
    .put('/jogos/:id', JogosController.atualizasJogo)
    .delete('/jogos/:id', JogosController.deletarJogo)




export default router;