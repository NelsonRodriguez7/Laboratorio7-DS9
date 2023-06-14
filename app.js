const express = require("express")
require("dotenv").config
const app = express()
const rutaUsuario = require("./routes/Usuarios")

app.use(express.json())
app.use("/usuarios",rutaUsuario)

app.listen(process.env.PORT, ()=>{
    console.log("Servidor Iniciado en el puerto 8081")
})
