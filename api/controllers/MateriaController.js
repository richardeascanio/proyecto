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
    });
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

  edit: function (req, res) {
    console.log("entre a editar")
    Materia.findOne({
      idmateria: req.param('id')
    }, function (err, materia) {
      console.log(materia)
      if (err) return res.serverError(err)
      res.view({
        materia: materia
      });
    });
  },

  update: function (req, res) {
    console.log("entre a update")

    Materia.update({

      idmateria: req.param('id')
    }, {
      codigo: req.param('codigo'),
      nombre: req.param('nombre'),
      credito: req.param('credito'),
      iddepartamento: req.param('iddepartamento'),
    }).exec(function (err, updated) {

      if (Materia) res.redirect('#')
      console.log("este es la materia " + updated[0].nombre, updated[0].codigo, updated[0].credito, updated[0].iddepartamento);
      if (err) return res.serverError(err)

    })
  },

  consultarDep: function (req, res) {
    Departamento.find(function (err, departamentos) {
      if (err) return res.serverError(err);
      return res.view('materia/agregar', {
        departamentos: departamentos
      });
    });
  },

  prelacion:function (req, res) {
    console.log("entre a buscar materias")

    user.findOne({
      codigo: req.param('codigo')
    }, function (err, estud) {

      var materitas2= "select z.idmateria,z.nombre,z.codigo, m.nombre as 'prelacion', m.codigo as 'codprelacion' from materia m join prelacion p on p.idMateriaPrela = m.idmateria join materia z on z.idmateria = p.idmateria where z.codigo= ?"
    
      Materia.query(materitas2,[req.param('codigo')], function(err,materias2){
          console.log(materias2)
          if(err) {res.serverError(err);}
        return res.view('materia/mostrarmaterias',{
  
          materias:materias2
        })
      });
        });

        
  },


};
