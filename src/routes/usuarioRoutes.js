import express from "express";
import UsuariosController from "../controllers/usuariosController.js";

const router = express.Router();

router
    .get('/usuarios', UsuariosController.listarUsuarios)
    .get('/usuarios/validarlogin', UsuariosController.validarLogion)
    .get('/usuarios/validarNomeUserPCadastro', UsuariosController.validarNomeUserPCadastro)
    .get('/usuarios/:id', UsuariosController.listarUsuariosPorId)
    .post('/usuarios', UsuariosController.cadastarUsuario)
    .put('/usuarios/addjogo/:id', UsuariosController.addNovoJogo)
    .put('/usuarios/:id', UsuariosController.atualizarUsuario)
    .delete('/usuarios/:id', UsuariosController.deletarUsuario)




export default router;