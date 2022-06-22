const {Router} = require('express');
const router = Router();

const {
    getUsuarios,
    postUsuario,
    postUsuarioLogin
} = require('../controllers/usuario.controller');

router.get('/', getUsuarios);

router.post('/', postUsuario);

router.post('/login', postUsuarioLogin);




module.exports = router;
