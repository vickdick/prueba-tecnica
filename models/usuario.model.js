
const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    apaterno: {
        type: String,
        require: [true, 'El apellido paterno es obligatorio']
    },
    amaterno: {
        type: String,
        require: [true, 'El apellido materno es obligatorio']
    },
    telefono: {
        type: String,
        require: [true, 'El numero es obligatorio'],
        unique: true
    },
    correo: {
        type: String,
        unique: true
    },
    usuario: {
        type: String,
        require: [true, 'El nombre de usuario es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'La contraseña es obligatoria']
    }
});

module.exports = model('Usuario', UsuarioSchema);