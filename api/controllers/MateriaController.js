/**
 * MateriaController
 *
 * @description :: Server-side logic for managing materias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

<<<<<<< HEAD
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
=======
    agregar: function(req,res){

        console.log("entre a funcion agregar");

        Materia.create({

            idmateria: req.param('id'),
            codigo: req.param('codigo'),
            nombre: req.param('nombre'),
            credito: req.param('credito'),
            iddepartamento: req.param('iddepartamento'),
            
        }).exec( function (err, Materia) {
            
            if(Materia) res.redirect('#')
            console.log("esta es la materia ",Materia);

            if (err) return res.serverError(err)
        });
    },

    consultar: function(req, res) {
        console.log("entre a consultar")
        Materia.find(function(err, materias) {
            if (err) return res.serverError(err);
            return res.view({materias: materias});
        });
    },

    edit: function(req, res){
        console.log("entre a editar")
        Materia.findOne({idmateria:req.param('id')}, function(err, materia){
            console.log(materia)
            if(err) return res.serverError(err)
            res.view({materia:materia});
        });
    },

    update: function(req, res){
        console.log("entre a update")

        Materia.update({

            idmateria:req.param('id')
        },
        {
            codigo: req.param('codigo'),
            nombre: req.param('nombre'),
            credito: req.param('credito'),
            iddepartamento: req.param('iddepartamento'),
        }
        ).exec( function (err, updated) {

            if(Materia) res.redirect('#')
            console.log("este es la materia " +updated[0].nombre, updated[0].codigo, updated[0].credito, updated[0].iddepartamento);
            if (err) return res.serverError(err)

        })
    },

    consultarDep: function(req, res){
        console.log("entre a consultar dep")
        Departamento.find(function(err, deps) {
            if (err) return res.serverError(err);
            console.log(deps)
            return ({deps:deps});
        });
    }
	
};
>>>>>>> richard

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
