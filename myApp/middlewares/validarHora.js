module.exports = {
    validarHora: (req, res, next) => {
        const hora = new Date().getHours();
        if (hora >= 12 && hora <= 23) {
            next();
        } else {
            res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
            return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
        }
    }
};