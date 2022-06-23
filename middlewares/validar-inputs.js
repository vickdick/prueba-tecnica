const { check, validationResult } = require('express-validator');

const validarRegistroUsuario = [
    check('nombre').trim().not().isEmpty().isLength({max: 40}).matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('El nombre debe tener como máximo 40 carácteres, y no debe contener carácteres especiales.'),
    check('apaterno').trim().not().isEmpty().isLength({max: 40}).matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('El apellido paterno debe tener como máximo 40 carácteres, y no debe contener carácteres especiales.'),
    check('amaterno').trim().not().isEmpty().isLength({max: 40}).matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('El apellido materno debe tener como máximo 40 carácteres, y no debe contener carácteres especiales.'),
    check('telefono').trim().not().isEmpty().isLength({min: 10}, {max: 10}).matches(/^[0-9]{10}$/).withMessage('El teléfono debe tener máximo 10 dígitos, y no tener carácteres especiales ni letras.'),
    check('correo').trim().not().isEmpty().normalizeEmail().isEmail().isLength({max: 40}).withMessage('El correo no es válido y debe tener como máximo 40 carácteres.'),
    check('usuario').trim().not().isEmpty().isLength({max: 30}).matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('El nombre de usuario no es válido, debe tener como máximo 40 carácteres y no tener carácteres especiales.'),
    check('password').trim().not().isEmpty().isLength({max: 20}).withMessage('La constraseña no es válida, debe tener como máximo 20 carácteres.')
];

const resultadoRegistroUsuario = (req, res, next) => {
    const resultado = validationResult(req).array();
    //console.log(resultado);
    if(resultado.length > 0) return res.status(400).json({
        msg: resultado
    })

    if(!resultado.length) return next();
}

module.exports = {validarRegistroUsuario, resultadoRegistroUsuario};