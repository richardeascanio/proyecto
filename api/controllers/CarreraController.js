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
  },

  consultarcarr: function (req, res) {

    Carrera.find(function (err, carreras) {
      if (err) return res.serverError(err);
      return res.view('carrera/listadecarreras', {
        carreras: carreras
      });
    });
  },

  BuscarMateriasdeCarrera: function (req, res) {
    console.log("Entre a buscar materias")
    var materitas= "select m.idmateria, m.nombre, m.codigo, credito, idDepartamento from materia m join materia_carrera mat on mat.idMateria = m.idmateria join carrera c on c.idcarrera = mat.idCarrera where c.idcarrera=?"
    
    Materia.query(materitas,['1'], function(err,mats){
        console.log(mats)
        if(err) {res.serverError(err);}
      return res.view('carrera/flujograma',{

        materias:mats
      })
    });

  }

};
