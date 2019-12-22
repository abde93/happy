var mongoose = require("mongoose");

const dbUrl = "mongodb+srv://mat92:mat92@cluster0-u1kjl.mongodb.net/HappyHelp";

const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Serveur BDD connecté')
  }
});

module.exports = mongoose;