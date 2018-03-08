/**
 * EstudianteController
 *
 * @description :: Server-side logic for managing estudiantes
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
                
                Estudiante.create({

                    idestudiante: user.idusuario,
                    tipo:req.param('tipo'),
                    
                }).exec( function (err, Estudiante) {

                    if(Estudiante) res.redirect('#')
                    console.log("este es el Estudiante",Estudiante, user);
                    if (err) return res.serverError(err)
    
                })
            });
    },

    consultar: function(req, res) {
        console.log("entre a consultar");
        var listaEstudiantesConUsuarios = []
        var estudianteQueSeInserta
        var aux = 0
        Estudiante.find(function(err, lista) {
            if (err) return res.serverError(err);
            else{
                lista.forEach(estud => {
                    user.findOne(estud.idestudiante).exec(function(err, usuario){
                        
                        estudianteQueSeInserta = {

                            idestudiante: estud.idestudiante,
                            nombre:usuario.nombre,
                            apellido:usuario.apellido,
                            cedula: usuario.cedula,
                            carnet: usuario.carnet,
                            correo: usuario.correo,
                            sexo: usuario.sexo,
                            tipo: estud.tipo,
                            
                        }
                        listaEstudiantesConUsuarios.push(estudianteQueSeInserta);
                        console.log(estudianteQueSeInserta)
                        aux = aux+1
                        if(aux==lista.length){
                            return res.view({listaEstudiantesConUsuarios: listaEstudiantesConUsuarios});
                        }
                        
                    });
                });
            }
        });
    }
};

