/**
 * Materia_carreraController
 *
 * @description :: Server-side logic for managing materia_carreras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar estudiante seleccion");

    materia_carrera.create({

      idMateria: req.param('idMateria'),
      idCarrera: req.param('idCarrera'),


    }).exec(function (err, materia_carrera) {

      if (materia_carrera) res.redirect('#')
      console.log("esta es el estudiante seleccion ", materia_carrera);

      if (err) return res.serverError(err)
    });
  },



};
