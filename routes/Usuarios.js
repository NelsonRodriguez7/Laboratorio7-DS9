const express = require("express")
const router = express.Router()
const MongoConnect = require("../MongoConnect")
const usuarioModel = require("../models/ModelsUsuario") // Mi objeto con el cual voy a apuntar al model

//invocando a la conexion de la BD
MongoConnect()

//Rutas
router.get("/",async(req,res)=>{
    try{
        const usuario = await usuarioModel.find()
        return res.json(usuario)

    }catch{
        return res.status(500).json({status:"Error de servidor"})
    }
})

router.post("/", async(req,res)=>{
    try{
        const {user, password, name, date_create} = req.body
        const usuario = new usuarioModel({user, password, name, date_create})
        await usuario.save()
        return res.json(usuario)
    }catch{
        return res.status(500).json({status:"Error de servidor"})
    }
})

module.exports = router
