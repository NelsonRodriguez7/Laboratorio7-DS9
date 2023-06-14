const mongoose = require("mongoose")

const ChatSchema = mongoose.Schema({
    prompt: String,
    response: String,
    id_user: String,
    date_create: Date
})

const ConsultaModel = mongoose.model('chatgpt',ChatSchema)

module.exports = ConsultaModel