const mongoose = require("mongoose")

// const atlas = "mongodb+srv://striker:compaq*@clusterstriker.ysjmi.mongodb.net/miProyecto?retryWrites=true&w=majority"
const atlas = "mongodb+srv://danielv0720:grajales@cluster0.fn83n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//const local = "mongodb://user:pass@localhost:27017/empresaDB"
const local = "mongodb://localhost:27017/miProyecto"

mongoose.connect(atlas, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Conectado Correctamente a la BD :)"))
    .catch(err => console.log(err))

module.exports = mongoose;