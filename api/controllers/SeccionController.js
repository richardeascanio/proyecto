/**
 * SeccionController
 *
 * @description :: Server-side logic for managing seccions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar");

    Seccion.create({

      idseccion: req.param('id'),
      nroseccion: req.param('nroseccion'),
      cupos: req.param('cupos'),

    }).exec(function (err, Seccion) {

      if (Seccion) res.redirect('#')
      console.log("este es la seccion", Seccion);
      if (err) return res.serverError(err)

    })
  },

  consultar: function (req, res) {

    Seccion.find(function (err, secciones) {
      if (err) return res.serverError(err);
      return res.view({
        secciones: secciones
      });
    });
  }

};
