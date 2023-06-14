//Aqui se conecta a la BD
const mongoose = require("mongoose")

const MongoConnect = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/base_de_datos")
    .then(()=>{console.log("conexion  a la BD exitosa")})
    .catch((error)=>{console.log("Error:" + error)})
}
module.exports = MongoConnect