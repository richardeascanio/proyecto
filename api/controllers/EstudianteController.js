/**
 * EstudianteController
 *
 * @description :: Server-side logic for managing estudiantes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    agregar: function(req,res){

        console.log("entre a funcion agregar");

            Estudiante.create({

                idestudiante: req.param('id'),
                nombre: req.param('nombre'),
                apellido: req.param('apellido'),
                cedula: req.param('cedula'),
                carnet: req.param('carnet'),
                correo: req.param('correo'),
                sexo: req.param('sexo'),
                tipo: req.param('tipo')
                
            }).exec( function (err, Estudiante) {

                if(Estudiante) res.redirect('#')
                console.log("este es el estudiante",Estudiante);
                if (err) return res.serverError(err)

            })
    },

    consultar: function(req, res) {
        
        Estudiante.find(function(err, estudiantes) {
            if (err) return res.serverError(err);
            return res.view({estudiantes: estudiantes});
        });
    }
	
};

