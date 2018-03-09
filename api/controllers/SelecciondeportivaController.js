/**
 * SelecciondeportivaController
 *
 * @description :: Server-side logic for managing selecciondeportivas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar seleccion");

    Selecciondeportiva.create({

      idselecciondeportiva: req.param('id'),
      codigo: req.param('codigo'),
      nombre: req.param('nombre'),
      sexo: req.param('sexo'),
      entrenador: req.param('entrenador'),

    }).exec(function (err, Selecciondeportiva) {

      if (Selecciondeportiva) res.redirect('#')
      console.log("esta es la seleccion", Selecciondeportiva);
      if (err) return res.serverError(err)

    })
  },

  consultar: function (req, res) {

    Selecciondeportiva.find(function (err, selecciones) {
      if (err) return res.serverError(err);
      return res.view({
        selecciones: selecciones
      });
    });
  }

};
