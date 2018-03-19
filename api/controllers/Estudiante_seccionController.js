/**
 * Estudiante_seccionController
 *
 * @description :: Server-side logic for managing estudiante_seccions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar");

    estudiante_seccion.create({

      idEstudiante: req.param('idEstudiante'),
      idSeccion: req.param('idSeccion'),
      nota: req.param('nota'),

    }).exec(function (err, Estudiante_seccion) {

      if (Estudiante_seccion) res.redirect('#')
      console.log("esta es el estudiante seccion ", Estudiante_seccion);

      if (err) return res.serverError(err)
    });
  },




  

};
