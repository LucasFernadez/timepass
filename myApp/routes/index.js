const express = require('express');
const router = express.Router();
const { obtenerHora } = require('../middlewares/horaMiddleware.js');

router.get('/', obtenerHora, (req, res) => {
    const mensaje = req.query.mensaje || '';
    res.send(`
        <h1>Bienvenido</h1>
        <p>La hora actual es: ${req.horaActual}:00</p>
        <p style="color: red;">${mensaje}</p>
        <a href="/endroute"><button>Ir a Endroute</button></a>
    `);
});

module.exports = router;
