import Jogos from "../models/Jogo.js";

class JogosController{

    static listarJogos = (req, res) => {
        Jogos.find((err, Jogos)=>{
            res.status(200).json(Jogos)
        })
    }

    static listarJogosPorId =(req, res)=>{
        let id = req.params.id;

        Jogos.findById(id, (err, Jogos) =>{
            if(err){
                res.status(400).send({message: `${err.message} - id do jogo não exixte`})
            }else{
                res.status(200).send(Jogos)
            }
        })
    }

    static cadastarJogo= (req, res)=>{
        let jogo= new Jogos(req.body);

        jogo.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o jogo`})
            }else{
                res.status(201).send(jogo.toJSON())
            }
        });   
    }

    static atualizasJogo= (req, res)=>{
        const id = req.params.id;

        Jogos.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: "jogo atualizado com sucesso"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletarJogo= (req, res)=>{
        const id = req.params.id;
        Jogos.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'jogo deletado'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default JogosController;