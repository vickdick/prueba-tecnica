const mongoose = require('mongoose');

const dbConexion = async () => {
    
    try{
        await mongoose.connect(process.env.MONGODB);
        console.log("Conexion hecha a la BD");
    }catch(err){
        console.log(err);
        throw new Error('No se puedo iniciar la BD...');
    }
}

module.exports = dbConexion;