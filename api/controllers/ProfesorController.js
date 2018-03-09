/**
 * ProfesorController
 *
 * @description :: Server-side logic for managing profesors
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

      Profesor.create({

        idprofesor: user.idusuario,
        profesion: req.param('profesion'),
        fechaingreso: req.param('fechaingreso'),
        iddepartamento: req.param('iddepartamento'),

      }).exec(function (err, Profesor) {

        if (Profesor) res.redirect('#')
        console.log("este es el Profesor", Profesor, user);
        if (err) return res.serverError(err)

      })
    });
  },

  consultar: function (req, res) {

    console.log("entre a consultar");
    var listaProfesoresConUsuarios = []
    var profesorQueSeInserta
    var aux = 0
    Profesor.find(function (err, lista) {
      if (err) return res.serverError(err);
      else {
        lista.forEach(prof => {
          user.findOne(prof.idprofesor).exec(function (err, usuario) {

            profesorQueSeInserta = {

              idprofesor: prof.idprofesor,
              nombre: usuario.nombre,
              apellido: usuario.apellido,
              cedula: usuario.cedula,
              carnet: usuario.carnet,
              correo: usuario.correo,
              sexo: usuario.sexo,
              profesion: prof.profesion,
              fechaingreso: prof.fechaingreso,
              iddepartamento: prof.iddepartamento

            }
            listaProfesoresConUsuarios.push(profesorQueSeInserta);
            console.log(profesorQueSeInserta)
            aux = aux + 1
            if (aux == lista.length) {
              return res.view({
                listaProfesoresConUsuarios: listaProfesoresConUsuarios
              });
            }

          });
        });
      }
    });
  }

};
