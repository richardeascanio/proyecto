/**
 * HorarioController
 *
 * @description :: Server-side logic for managing horarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar");

    Horario.create({

      idhorario: req.param('id'),
      dia: req.param('dia'),
      bloquehorario: req.param('bloquehorario'),

    }).exec(function (err, Horario) {

      if (Horario) res.redirect('#')
      console.log("esta es el horario ", Horario);

      if (err) return res.serverError(err)
    });
  },

  consultar: function (req, res) {
    console.log("entre a consultar")
    Horario.find(function (err, horarios) {
      if (err) return res.serverError(err);
      return res.view({
        horarios: horarios
      });
    });
  },

};
