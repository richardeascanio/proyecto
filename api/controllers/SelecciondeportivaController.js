/**
 * SelecciondeportivaController
 *
 * @description :: Server-side logic for managing selecciondeportivas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  agregar: function (req, res) {

    console.log("entre a funcion agregar seleccion");

    Selecciondeportiva.create({

      idselecciondeportiva: req.param('id'),
      codigo: req.param('codigo'),
      nombre: req.param('nombre'),
      sexo: req.param('sexo'),
      entrenador: req.param('entrenador'),

    }).exec(function (err, Selecciondeportiva) {

      if (Selecciondeportiva) res.redirect('#')
      console.log("esta es la seleccion", Selecciondeportiva);
      if (err) return res.serverError(err)

    })
  },

  consultar: function (req, res) {

    Selecciondeportiva.find(function (err, selecciones) {
      if (err) return res.serverError(err);
      return res.view({
        selecciones: selecciones
      });
    });
  },

  edit: function (req, res) {
    console.log("entre a editar")
    Selecciondeportiva.findOne({
      idselecciondeportiva: req.param('id')
    }, function (err, selecciondeportiva) {
      console.log(selecciondeportiva)
      if (err) return res.serverError(err)
      res.view({
        selecciondeportiva: selecciondeportiva
      });
    });
  },

  update: function (req, res) {
    console.log("entre a update")

    Selecciondeportiva.update({

      idselecciondeportiva: req.param('id')
    }, {
      nombre: req.param('nombre'),
      codigo: req.param('codigo'),
      sexo: req.param('sexo'),
      entrenador: req.param('entrenador')
    }).exec(function (err, updated) {

      if (Selecciondeportiva) res.redirect('#')
      console.log("este es la Selección " + updated[0].nombre, updated[0].codigo, updated[0].sexo, updated[0].entrenador);
      if (err) return res.serverError(err)

    })
  },

  consultar: function (req, res) {

    Selecciondeportiva.find(function (err, selecciones) {
      if (err) return res.serverError(err);
      return res.view({
        selecciones: selecciones
      });
    });
  },

  buscarseleccion: function (req, res) {
    console.log("entre a buscar seleccion")

    var listaEstudiantesSeleccion = []
    var aux=0
    var estudianteQueSeInserta

    Selecciondeportiva.find({
      codigo: req.param('codigo')
    }).populate("jugadores").exec(function (err, seleccion){
      
      seleccion[0].jugadores.forEach(estud => {
        user.findOne(estud.idestudiante).exec(function (err, usuario) {

          estudianteQueSeInserta = {

            nombre: usuario.nombre,
            apellido: usuario.apellido,
            carnet: usuario.carnet,
            correo: usuario.correo,
            nombreSelec: seleccion[0].nombre,
          
          }
          listaEstudiantesSeleccion.push(estudianteQueSeInserta);
          aux = aux + 1
          if (aux == seleccion[0].jugadores.length) {
            return res.view('selecciondeportiva/listaestudiantesseleccion',{
              listaEstudiantesSeleccion: listaEstudiantesSeleccion
            });
          }

        });
      });

    });

  },

  buscarhorarios: function (req, res){
    console.log("entre a buscar horarios");
    
    
  }
    

};