/**
 * UserController
 *
 * @description :: Server-side logic for managing User
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    
    registrar: function(req,res){
        
          
        console.log("entre a funcion");

            user.create({

                idusuario: req.param('id'),
                nombre: req.param('nombre'),
                apellido: req.param('apellido'),
                cedula: req.param('cedula'),
                carnet: req.param('carnet'),
                correo: req.param('correo'),
                NroTlfn: req.param('NroTlfn'),

            }).exec( function (err, user) {

                if(user) res.view('homepage', {user : user})
                console.log("este es el usuario",user);
                if (err) return res.serverError(err)

            })
        }
    };



