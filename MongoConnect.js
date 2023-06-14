//Aqui se conecta a la BD
const mongoose = require("mongoose")

const MongoConnect = ()=>{
    mongoose.connect("mongodb+srv://iplay0440:<tupassword>@thisnelsonbdp2.6sizuwf.mongodb.net/")
    .then(()=>{console.log("conexion  a la BD exitosa")})
    .catch((error)=>{console.log("Error: " + error)})
}
module.exports = MongoConnect