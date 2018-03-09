/**
 * SeccionController
 *
 * @description :: Server-side logic for managing seccions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    agregar: function(req,res){

        console.log("entre a funcion agregar");

            Seccion.create({

                idseccion: req.param('id'),
                nroseccion: req.param('nroseccion'),
                cupos: req.param('cupos'),
                
            }).exec( function (err, Seccion) {

                if(Seccion) res.redirect('#')
                console.log("este es la seccion",Seccion);
                if (err) return res.serverError(err)

            })
    },

    consultar: function(req, res) {
        
        Seccion.find(function(err, secciones) {
            if (err) return res.serverError(err);
            return res.view({secciones: secciones});
        });
    },

    edit: function(req, res){
        console.log("entre a editar")
        Seccion.findOne({idseccion:req.param('id')}, function(err, seccion){
            console.log(seccion)
            if(err) return res.serverError(err)
            res.view({seccion:seccion});
        });
    },

    update: function(req, res){
        console.log("entre a update")

        Seccion.update({

            idseccion:req.param('id')
        },
        {
            nroseccion: req.param('nroseccion'),
            cupos: req.param('cupos'),
        }
        ).exec( function (err, updated) {

            if(Seccion) res.redirect('#')
            console.log("este es el seccion " +updated[0].nroseccion, updated[0].cupos);
            if (err) return res.serverError(err)

        })
    }
	
};

