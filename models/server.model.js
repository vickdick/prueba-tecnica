require('dotenv').config();
const express = require('express');
const cors = require('cors');

const dbConexion = require('./database.model');


class Server {
   
    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;

        //Conexion BD
        this.db();

        //Paths
        this.usuarioPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //App routes
        this.routes();
    }

    async db() {
        await dbConexion();
    }

    middlewares(){
        //Parsear json
        this.app.use(express.json());
        //CORS
        this.app.use(cors());
        //Public directory
        this.app.use(express.static('public'));
    }


    routes(){
       this.app.use(this.usuarioPath, require('../routes/usuario.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto:", this.port);
        });
    }
}

module.exports = Server;

