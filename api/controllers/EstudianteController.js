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

  buscarbeca: function (req, res) {
    console.log("entre a buscar beca con estudiante")

    var listaEstudiantesBeca = []
    var aux = 0
    var estudianteQueSeInserta
    var cont=0

    Estudiante.find({

    }).populate("beca").exec(function (err, becados) {

      console.log(becados)

      becados.forEach(estud => {
        user.findOne(estud.idestudiante).exec(function (err, usuario) {
          cont=cont+1
          if(becados[aux].beca[0] != null){
            
           
            console.log(cont)
            estudianteQueSeInserta = {

              nombre: usuario.nombre,
              apellido: usuario.apellido,
              carnet: usuario.carnet,
              correo: usuario.correo,
              tipob: becados[aux].beca[0].tipo,
              porcentaje: becados[aux].beca[0].porcentaje,
              
            }
            aux = aux + 1
            listaEstudiantesBeca.push(estudianteQueSeInserta);
            console.log("ingresado")
          }

          else if(becados[aux].beca[0] == null && cont==becados.length){
            
            console.log("entre a else")
            console.log(listaEstudiantesBeca)
            return res.view('estudiante/estudianteconbeca',{
              listaEstudiantesBeca: listaEstudiantesBeca
            });

          }

        });
      });

    });

  },

  materiascursando: function (req, res) {
    console.log("entre a buscar materias")

    user.findOne({
      cedula: req.param('cedula')
    }, function (err, estud) {

      var materiaestud= "select m.nombre, m.codigo from user u join estudiante e on e.idestudiante = u.idusuario join estudiante_seccion es on es.idEstudiante = u.idusuario join seccion s on s.idseccion= es.idSeccion join materia m on m.idmateria= s.idMateria where u.cedula = ?"
    
      user.query(materiaestud,[req.param('cedula')], function(err,materias){
          console.log(materias)
          if(err) {res.serverError(err);}
        return res.view('estudiante/materiasquecurso',{
  
          materias:materias
        })
      });

      
        });
 

  },


  aulascursando: function (req, res) {
    console.log("entre a buscar aulas")

    user.findOne({
      cedula: req.param('cedula')
    }, function (err, estud) {

      var aulasestud= "select au.idaula, au.edificio, au.piso, au.numeroaula from metropavoapp.user u join estudiante e on u.idusuario = e.idestudiante join estudiante_seccion es on es.idEstudiante = e.idestudiante join seccion s on s.idseccion = es.idSeccion join aula au on au.idaula = s.idAula where u.cedula = ? group by es.idEstudiante"
    
      Aula.query(aulasestud,[req.param('cedula')], function(err,aulas){
          console.log(aulas)
          if(err) {res.serverError(err);}
        return res.view('estudiante/aulasqueveo',{
  
          aulas:aulas
        })
      });
        });
  },

  probatorio:function (req, res) {
    console.log("entre a buscar estudiantes")

    user.find({

    }, function (err, estud) {

      var probatorio= "select u.idusuario, u.nombre, u.apellido,carnet,cedula, p.indiceacum from user u join estudiante_periodo ep on u.idusuario = ep.idEstudiante join periodo p on p.idperiodo = ep.idPeriodo where p.indiceacum < 12;"
    
      Estudiante.query(probatorio,[], function(err,listaProbatorio){
          console.log(listaProbatorio)
          if(err) {res.serverError(err);}
        return res.view('estudiante/probatorio',{
  
          listaEstudiantesConUsuarios:listaProbatorio
        })
      });
        });

        
  },


  promedioHistorico:function (req, res) {
    console.log("entre a buscar estudiantes y su historico")

    user.findOne({

      cedula: req.param('cedula')

    }, function (err, estud) {

      var historico= "select u.idusuario, u.nombre, u.apellido, carnet, cedula, indiceacum  from user u join estudiante_periodo ep on u.idusuario = ep.idEstudiante join periodo p on p.idperiodo = ep.idPeriodo where u.cedula = ?"
    
      Estudiante.query(historico,[req.param('cedula')], function(err,ListaHistoricoEstud){
          console.log(ListaHistoricoEstud)
          if(err) {res.serverError(err);}
        return res.view('estudiante/historico',{
  
          listaEstudiantesConUsuarios:ListaHistoricoEstud
        })
      });
        });

        
  },



};
