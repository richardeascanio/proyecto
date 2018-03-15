/**
 * PeriodoController
 *
 * @description :: Server-side logic for managing periodoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar");

    Periodo.create({

      idperiodo: req.param('id'),
      nombre: req.param("nombre")

    }).exec(function (err, Periodo) {

      if (Periodo) res.redirect('#')
      console.log("este es el periodo", Periodo);
      if (err) return res.serverError(err)

    })
  },
  
  consultar: function (req, res) {

    Periodo.find(function (err, periodos) {
      if (err) return res.serverError(err);
      return res.view({
        periodos: periodos
      });
    });
  },

  edit: function (req, res) {
    console.log("entre a editar")
    Periodo.findOne({
      idperiodo: req.param('id')
    }, function (err, periodo) {
      console.log(periodo)
      if (err) return res.serverError(err)
      res.view({
        periodo: periodo
      });
    });
  },

};
