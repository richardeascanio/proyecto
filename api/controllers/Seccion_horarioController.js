/**
 * Seccion_horarioController
 *
 * @description :: Server-side logic for managing seccion_horarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar seccion horario");

    seccion_horario.create({

      idSeccion: req.param('idSeccion'),
      idHorario: req.param('idHorario'),


    }).exec(function (err, seccion_horario) {

      if (seccion_horario) res.redirect('#')
      console.log("esta es el Seccion horario ", seccion_horario);

      if (err) return res.serverError(err)
    });
  },

};
