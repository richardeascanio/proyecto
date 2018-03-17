/**
 * Estudiante_seleccionController
 *
 * @description :: Server-side logic for managing estudiante_seleccions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar estudiante seleccion");

    estudiante_seleccion.create({

      idEstudiante: req.param('idEstudiante'),
      idSeleccion: req.param('idSeleccion'),


    }).exec(function (err, estudiante_seleccion) {

      if (estudiante_seleccion) res.redirect('#')
      console.log("esta es el estudiante seleccion ", estudiante_seleccion);

      if (err) return res.serverError(err)
    });
  },

};
