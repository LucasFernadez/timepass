const express = require('express');
const router = express.Router();
const { validarHora } = require('../middlewares/validarHora.js');

router.get('/', validarHora, (req, res) => {
    res.send(`
        <h1>Bienvenido a Endroute</h1>
        <p>Has accedido correctamente a la ruta /endroute</p>
    `);
});

module.exports = router;
