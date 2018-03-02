/**
 * AulaController
 *
 * @description :: Server-side logic for managing aulas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    agregar: function(req,res){

        console.log("entre a funcion agregar");

            Aula.create({

                idaula: req.param('id'),
                edificio: req.param('edificio'),
                piso: req.param('piso'),
                numeroaula: req.param('numeroaula'),
                
            }).exec( function (err, Aula) {

                if(Aula) res.redirect('#')
                console.log("este es el aula ",Aula);
                if (err) return res.serverError(err)

            })
    },

    consultar: function(req, res) {
        Aula.find(function(err, aulas) {
            if (err) return res.serverError(err);
            return res.view({aulas: aulas});
        });
    }
	
};

