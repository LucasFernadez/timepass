exports.obtenerHora = (req, res, next) => {
    req.horaActual = new Date().getHours();
    next();
};