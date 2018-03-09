/**
 * DepartamentoController
 *
 * @description :: Server-side logic for managing departamentoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar");

    Departamento.create({

      iddepartamento: req.param('id'),
      nombre: req.param('nombre'),

    }).exec(function (err, user) {

      if (Departamento) res.redirect('#')
      console.log("este es el departamento", Departamento);
      if (err) return res.serverError(err)

    })
  },

  consultar: function (req, res) {

    Departamento.find(function (err, departamentos) {
      if (err) return res.serverError(err);
      return res.view({
        departamentos: departamentos
      });
      // return {departamentos: departamentos}
    });
  }

};
