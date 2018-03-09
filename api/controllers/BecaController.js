/**
 * BecaController
 *
 * @description :: Server-side logic for managing becas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar");

    Beca.create({

      idbeca: req.param('id'),
      porcentaje: req.param('porcentaje'),
      tipo: req.param('tipo'),
      idestudiante: req.param('idestudiante')

    }).exec(function (err, Beca) {

      if (Beca) res.redirect('#')
      console.log("esta es la beca", Beca);
      if (err) return res.serverError(err)

    })
  },

  consultar: function (req, res) {

    Beca.find(function (err, becas) {
      if (err) return res.serverError(err);
      return res.view({
        becas: becas
      });
    });
  }

};
