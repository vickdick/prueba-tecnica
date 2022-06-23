const {response, request, json} = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario.model');

const getUsuarios = async (req = request, res = response) => {
   
    const usuarios = await Usuario.find();
        
    res.status(200).json({
        msg:"Lista de usuarios",
        data: usuarios
    }); 
    
}



const postUsuario = async (req, res = response) => {
    const body = req.body;
    
    try{
        const usuario = new Usuario(body);
        await usuario.save();

        res.status(201).json({
            msg:"Creación exitosa!",
            usr: usuario
        });
    }catch(err){
        res.status(400).json({
            msg: err.message
        })
    }
}

const postUsuarioLogin = async(req, res = response) => {
    const {usuario, password} = req.body;

    const usr = await Usuario.findOne({ $or: [ {telefono: usuario}, {usuario} ] });
    //const usuario = data.find(element => element.nombre === nombre) && data.find(element => element.password === password);

    if(!usr) return res.status(400).json({msg: "Usuario o contraseña incorrectos!"});
    
    if(usr.password !== password) return res.status(400).json({msg: "Usuario o contraseña incorrectos!"});

    const token = jwt.sign(JSON.stringify(password), process.env.TOKEN_KEY);

    res.status(200).json({
        msg:"Sesión correcta",
        token: token,
        usuario: usr
    });
}


module.exports = {
    getUsuarios,
    postUsuario,
    postUsuarioLogin
}