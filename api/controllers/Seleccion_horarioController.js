/**
 * Seleccion_horarioController
 *
 * @description :: Server-side logic for managing seleccion_horarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar Seleccion horario");

    seleccion_horario.create({

      idSeleccion: req.param('idSeleccion'),
      idHorario: req.param('idHorario'),


    }).exec(function (err, seleccion_horario) {

      if (seleccion_horario) res.redirect('#')
      console.log("esta es el Seleccion horario ", seleccion_horario);

      if (err) return res.serverError(err)
    });
  },

  consultar: function (req, res) {
    console.log("entre a consultar")
    seleccion_horario.find(function (err, selecciones_horario) {
      if (err) return res.serverError(err);
      return res.view({
        selecciones_horario: selecciones_horario
      });
    });
  },

};
