/**
 * Estudiante_periodoController
 *
 * @description :: Server-side logic for managing estudiante_periodoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  agregar: function (req, res) {

    console.log("entre a funcion agregar");

    estudiante_periodo.create({

      idEstudiante: req.param('idEstudiante'),
      idPeriodo: req.param('idPeriodo'),

    }).exec(function (err, Estudiante_periodo) {

      if (Estudiante_periodo) res.redirect('#')
      console.log("esta es el estudiante periodo ", Estudiante_periodo);

      if (err) return res.serverError(err)
    });
  },
	
};

