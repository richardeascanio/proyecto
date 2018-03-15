/**
 * ProfesorController
 *
 * @description :: Server-side logic for managing profesors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  consultarDep: function (req, res) {
    console.log("entre a consultardep")
    Departamento.find(function (err, departamentos) {
      if (err) return res.serverError(err);
      return res.view('profesor/agregar', {
        departamentos: departamentos
      });
    });
  },
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
        idDepartamento: req.param('idDepartamento'),

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
              idDepartamento: prof.idDepartamento
            }
            listaProfesoresConUsuarios.push(profesorQueSeInserta);
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
  },

  consultarDep2: function (req, res) {
    console.log("entre a consultardep2")
    Departamento.find(function (err, departamentos) {
      console.log(departamentos)
      if (err) return res.serverError(err);
      return res.view('/profesor/edit/'+idprofesor, {
        departamentos: departamentos
      });
    });
  },

  edit: function (req, res) {

    console.log("entre a consultardep2")
    Departamento.find(function (err, departamentos) {
      console.log(departamentos)
    
    var profesorNuevo
    console.log("entre a editar")
    Profesor.findOne({
      idprofesor: req.param('id')
    }, function (err, prof) {
      console.log(prof);

      user.findOne(prof.idprofesor).exec(function (err, usuario) {

        profesorNuevo = {

          idprofesor: prof.idprofesor,
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          cedula: usuario.cedula,
          carnet: usuario.carnet,
          correo: usuario.correo,
          sexo: usuario.sexo,
          profesion: prof.profesion,
          fechaingreso: prof.fechaingreso,
          idDepartamento: prof.idDepartamento
        }
        console.log(profesorNuevo)
        if (err) return res.serverError(err)
        return res.view({
          profesor: profesorNuevo
        });
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

      Profesor.update({
        idprofesor: req.param('id')
      }, {
        profesion: req.param('profesion'),
        fechaingreso: req.param('fechaingreso'),
        idDepartamento: req.param('idDepartamento'),
      }).exec(function (err, updated) {

        if (Profesor) {
          res.redirect('#')
        }

        if (err) return res.serverError(err)

      });
    });

  },

};
