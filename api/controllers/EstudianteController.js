/**
 * EstudianteController
 *
 * @description :: Server-side logic for managing estudiantes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar");

    user.create({

      idusuario: req.param('id'),
      nombre: req.param('nombre'),
      apellido: req.param('apellido'),
      cedula: req.param('cedula'),
      carnet: req.param('carnet'),
      correo: req.param('correo'),
      sexo: req.param('sexo'),

    }).then(user => {

      Estudiante.create({

        idestudiante: user.idusuario,
        tipo: req.param('tipo'),

      }).exec(function (err, Estudiante) {

        if (Estudiante) res.redirect('#')
        console.log("este es el Estudiante", Estudiante, user);
        if (err) return res.serverError(err)

      })
    });
  },

  consultar: function (req, res) {
    console.log("entre a consultar");
    var listaEstudiantesConUsuarios = []
    var estudianteQueSeInserta
    var aux = 0
    Estudiante.find(function (err, lista) {
      if (err) return res.serverError(err);
      else {
        lista.forEach(estud => {
          user.findOne(estud.idestudiante).exec(function (err, usuario) {

            estudianteQueSeInserta = {

              idestudiante: estud.idestudiante,
              nombre: usuario.nombre,
              apellido: usuario.apellido,
              cedula: usuario.cedula,
              carnet: usuario.carnet,
              correo: usuario.correo,
              sexo: usuario.sexo,
              tipo: estud.tipo,

            }
            listaEstudiantesConUsuarios.push(estudianteQueSeInserta);
            aux = aux + 1
            if (aux == lista.length) {
              return res.view({
                listaEstudiantesConUsuarios: listaEstudiantesConUsuarios
              });
            }

          });
        });
      }

    });
  },

  edit: function (req, res) {
    var estudianteQueSeInserta
    Estudiante.findOne({
      idestudiante: req.param('id')
    }, function (err, estud) {


      user.findOne(estud.idestudiante).exec(function (err, usuario) {
        estudianteQueSeInserta = {

          idestudiante: estud.idestudiante,
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          cedula: usuario.cedula,
          carnet: usuario.carnet,
          correo: usuario.correo,
          sexo: usuario.sexo,
          tipo: estud.tipo,

        }
        if (err) return res.serverError(err)
        return res.view({
          estudiante: estudianteQueSeInserta
        });


      });
    });
  },


  update: function (req, res) {
    console.log("entre a update")

    user.update({

      idusuario: req.param('id')
    }, {
      nombre: req.param('nombre'),
      apellido: req.param('apellido'),
      cedula: req.param('cedula'),
      carnet: req.param('carnet'),
      correo: req.param('correo'),
      sexo: req.param('sexo'),

    }).then(user => {
      console.log(user)

      Estudiante.update({
        idestudiante: req.param('id')
      }, {
        tipo: req.param('tipo'),
      }).exec(function (err, updated) {

        if (Estudiante) {
          res.redirect('#')
        }


        if (err) return res.serverError(err)

      });
    });
  },

  BuscarEstudiantesdeSeccion: function (req, res) {
    var EstudianteNuevo
    console.log("entre a Buscar Estudiantes de una seccion")
    Estudiante.find( function (err, estud) {
     
      user.find(estud.idestudiante).exec(function (err, user) {

        EstudianteNuevo = {

          idestudiante: estud.idestudiante,
          nombre: user.nombre,
          apellido: user.apellido,
          cedula: user.cedula,
          carnet: user.carnet,
          correo: user.correo,
          sexo: user.sexo,
          tipo: estud.tipo,
        }
      })

    }).populate('secciones')
      .populate('idMateria').exec(function(err,EstudianteNuevo){
        if (err){
            return res.view(err)
        }
        return res.view(EstudianteNuevo)
      });
  

  },

  BuscarEstudiantesdeSeccion: function (req, res) {
    console.log("entre a Buscar estudiantes");
    var listaEstudiantesConUsuarios = []
    var estudianteQueSeInserta
    var aux 

    Estudiante.find().populate("secciones")
    
      .exec(function(err,EstudianteNuevo){
        console.log(EstudianteNuevo)
      if (err){
          return res.view(err)
      }
      
      return res.view('profesor/mostrar',{
      
        Estudiantes:EstudianteNuevo

      } )
    });
  },

};
