/**
 * UserController
 *
 * @description :: Server-side logic for managing User
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
                
            }).exec( function (err, user) {

                if(user) res.redirect('#')
                console.log("este es el usuario",user);
                if (err) return res.serverError(err)

            })
    },

    consultar: function(req, res) {
        
        user.find(function(err, users) {
            if (err) return res.serverError(err);
            return res.view(('../../views/estudiante/consultar'),{users: users});
        });
    }
};



