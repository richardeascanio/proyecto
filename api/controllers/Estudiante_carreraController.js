/**
 * Estudiante_carreraController
 *
 * @description :: Server-side logic for managing estudiante_carreras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar estudiante carrera");

    estudiante_carrera.create({

      idEstudiante: req.param('idEstudiante'),
      idCarrera: req.param('idCarrera'),


    }).exec(function (err, estudiante_carrera) {

      if (estudiante_carrera) res.redirect('#')
      console.log("esta es el estudiante carrera ", estudiante_carrera);

      if (err) return res.serverError(err)
    });
  },

};
