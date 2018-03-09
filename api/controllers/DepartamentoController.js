/**
 * DepartamentoController
 *
 * @description :: Server-side logic for managing departamentoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar");

<<<<<<< HEAD
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
=======
        Departamento.create({

            iddepartamento: req.param('id'),
            nombre: req.param('nombre'),
            
        }).exec( function (err, Departamento) {

            if(Departamento) res.redirect('#')
            console.log("este es el departamento", Departamento);
            if (err) return res.serverError(err)

        })
    },

    consultar: function(req, res) {
        
        Departamento.find(function(err, departamentos) {
            if (err) return res.serverError(err);
            return res.view({departamentos: departamentos});
        });
    },

    edit: function(req, res){
        console.log("entre a editar")
        Departamento.findOne({iddepartamento:req.param('id')}, function(err, departamento){
            console.log(departamento)
            if(err) return res.serverError(err)
            res.view({departamento:departamento});
        });
    },

    update: function(req, res){
        console.log("entre a update")

        Departamento.update({

            iddepartamento:req.param('id')
        },
        {
            nombre:req.param('nombre')
        }
        ).exec( function (err, updated) {

            if(Departamento) res.redirect('#')
            console.log("este es el departamento " +updated[0].nombre);
            if (err) return res.serverError(err)

        })
    }
};
>>>>>>> richard

    Departamento.find(function (err, departamentos) {
      if (err) return res.serverError(err);
      return res.view({
        departamentos: departamentos
      });
      // return {departamentos: departamentos}
    });
  }

};
