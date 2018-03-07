/**
 * ProfesorController
 *
 * @description :: Server-side logic for managing profesors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    agregar: function(req,res){

        console.log("entre a funcion agregar");

            user.create({

                idusuario: req.param('id'),
                nombre: req.param('nombre'),
                apellido: req.param('apellido'),
                cedula: req.param('cedula'),
                carnet: req.param('carnet'),
                correo: req.param('correo'),
                sexo: req.param('sexo'),
                
            }).then(user=>{
                
                Profesor.create({

                    idprofesor: user.idusuario,
                    profesion:req.param('profesion'),
                    fechaingreso:req.param('fechaingreso'),
                    iddepartamento:req.param('iddepartamento')
                    
                }).exec( function (err, Profesor) {

                    if(Profesor) res.redirect('#')
                    console.log("este es el Profesor", Profesor);
                    if (err) return res.serverError(err)
    
                })
            });
    },

    consultar: function(req, res) {
        
        Profesor.find(function(err, profesores) {
            if (err) return res.serverError(err);
            return res.view({profesores: profesores});
        });
    }
	
};

