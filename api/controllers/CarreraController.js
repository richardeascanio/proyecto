/**
 * CarreraController
 *
 * @description :: Server-side logic for managing carreras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar");

    Carrera.create({

      idcarrera: req.param('id'),
      nombre: req.param('nombre'),
      codigo: req.param('codigo'),

    }).exec(function (err, Carrera) {

      if (Carrera) res.redirect('#')
      console.log("este es la carrera", Carrera);
      if (err) return res.serverError(err)
    });
  },

  consultar: function (req, res) {

    Carrera.find(function (err, carreras) {
      if (err) return res.serverError(err);
      return res.view({
        carreras: carreras
      });
    });
  },

  edit: function (req, res) {
    console.log("entre a editar")
    Carrera.findOne({
      idcarrera: req.param('id')
    }, function (err, carrera) {
      console.log(carrera)
      if (err) return res.serverError(err)
      res.view({
        carrera: carrera
      });
    });
  },

  update: function (req, res) {
    console.log("entre a update")

    Carrera.update({

      idcarrera: req.param('id')
    }, {
      nombre: req.param('nombre'),
      codigo: req.param('codigo'),
    }).exec(function (err, updated) {

      if (Carrera) res.redirect('#')
      console.log("este es la carrera " + updated[0].nombre, updated[0].codigo);
      if (err) return res.serverError(err)

    })
  }

};
