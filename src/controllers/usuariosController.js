import usuarios from "../models/Usuario.js";

class UsuariosController{

    static listarUsuarios = (req, res) => {
        usuarios.find()
            .populate('listaJogos')
            .exec((err, usuarios)=>{
                if(err){
                    res.status(400).send({message: `${err.message} - usuario não exixte`})
                }else{
                    res.status(200).json(usuarios)
                }
            })
    }

    static listarUsuariosPorId =(req, res)=>{
        let id = req.params.id;

        usuarios.findById(id)
            .populate('listaJogos')
            .exec((err, usuarios) =>{
                if(err){
                    res.status(400).send({message: `${err.message} - id do usuario não existe banana`})
                }else{
                    res.status(200).send(usuarios)
                }
            })
    }

    static validarNomeUserPCadastro= (req, res)=>{
        const nome =  req.query.nomeUsuario;

        usuarios.find({'nomeUsuario': nome}, {}, (err, usuario)=>{
            if(err){
                res.status(500).send({message: `${err.message}`})
            }else{
                if(usuario.length ==0){
                    res.status(200).send({message: `usuario ${nome} ainda não foi usado`, valido:true})
                }else{
                    res.status(200).send({message: `usuario ${nome} ja foi usado`, valido:false})
                }
            }
        })
        
    }

    static validarLogion = (req, res) =>{
        const nome =  req.query.nomeUsuario
        const senha =  req.query.senha

        usuarios.find({'nomeUsuario': nome}, {}, (err, usuario)=>{
            if(err){
                res.status(500).send({message: `${err.message}`})
            }else{
                if(usuario.length==0){
                    res.status(400).send({message: `usuario ${nome} não existe`, user: false, senha: false, valido:false})
                    
                }else if(usuario.length >1){
                    res.status(500).send({message: `usuario ${nome} clonado / mais de um com esse nome`})

                }else{
                    if(usuario[0].senha == senha){
                        res.status(200).send({id: usuario[0]._id, user: true, senha: true, valido: true})
    
                    }else{
                        res.status(200).send({user: true,senha: false, valido: false})
                    }

                }
            }
        })
    }

    static cadastarUsuario= (req, res)=>{
        let usuario= new usuarios(req.body);

        usuario.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o usuario`})
            }else{
                res.status(201).send(usuario)
            }
        });   
    }

    static atualizarUsuario= (req, res)=>{
        const id = req.params.id;

        usuarios.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: "Usuario atualizado com sucesso"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static addNovoJogo= (req, res)=>{
        const id = req.params.id;
        
        usuarios.findByIdAndUpdate(id, {$push: {'listaJogos': req.body}}, (err)=>{
            if(!err){
                res.status(200).send({message: "novo jogo add com sucesso"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletarUsuario= (req, res)=>{
        const id = req.params.id;
        usuarios.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'usuario deletado'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default UsuariosController;