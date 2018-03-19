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
  },

  edit: function (req, res) {
    console.log("entre a editar")
    Beca.findOne({
      idbeca: req.param('id')
    }, function (err, beca) {
      console.log(beca)
      if (err) return res.serverError(err)
      res.view({
        beca: beca
      });
    });
  },

  update: function (req, res) {
    console.log("entre a update")

    Beca.update({

      idbeca: req.param('id')
    }, {
      porcentaje: req.param('porcentaje'),
      tipo: req.param('tipo'),
      idestudiante: req.param('idestudiante')
    }).exec(function (err, updated) {

      if (Beca) res.redirect('#')
      console.log("esta es la beca " + updated[0].porcentaje, updated[0].tipo, updated[0].idestudiante);
      if (err) return res.serverError(err)
    })
  },

 

};
