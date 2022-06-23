const {Router} = require('express');
const router = Router();

const validarJWT = require('../helpers/jwt-validator');
const {validarRegistroUsuario, resultadoRegistroUsuario} = require('../middlewares/validar-inputs');

const {
    getUsuarios,
    postUsuario,
    postUsuarioLogin
} = require('../controllers/usuario.controller');

router.get('/', validarJWT, getUsuarios);

router.post('/', [validarRegistroUsuario, resultadoRegistroUsuario], postUsuario);

router.post('/login', postUsuarioLogin);




module.exports = router;
