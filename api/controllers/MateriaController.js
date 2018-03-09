/**
 * MateriaController
 *
 * @description :: Server-side logic for managing materias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar");

    Materia.create({

      idmateria: req.param('id'),
      codigo: req.param('codigo'),
      nombre: req.param('nombre'),
      credito: req.param('credito'),
      iddepartamento: req.param('iddepartamento'),

    }).exec(function (err, Materia) {

      if (Materia) res.redirect('#')
      console.log("esta es la materia ", Materia);
      if (err) return res.serverError(err)

    })

  },

  consultar: function (req, res) {
    console.log("entre a consultar")
    Materia.find(function (err, materias) {
      if (err) return res.serverError(err);
      return res.view({
        materias: materias
      });
    });
  },

  consultarDep: function (req, res) {
    console.log("entre a consultar dep")
    Departamento.find(function (err, departamentos) {
      if (err) return res.serverError(err);
      return ({
        departamentos: departamentos
      });
    });
  }

};
