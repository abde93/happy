const mongoose = require('./bdd');


var requestSchema = mongoose.Schema({
    category:String,
    position: String,
    longitude: String,
    latitude: String,
    image: String,
    description:String,
    dateRequest:Date,
    dateFinish: Date,
    statut: String,
    notation:String,
})

var requestModel = mongoose.model('requests', requestSchema)

module.exports = requestModel;