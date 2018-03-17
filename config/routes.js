/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
   * etc. depending on your default view engine) your home page.              *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  '/busquedas':{
    view: 'busquedas'
  },

  'POST /aula/agregar': 'AulaController.agregar',
  'GET /aula/agregar': {
    view: 'aula/agregar'
  },
  'POST /aula/edit': {
    controller: 'AulaController',
    action: 'update'
  },
  'GET /aula/edit': {
    view: 'aula/edit'
  },

  'POST /carrera/agregar': 'CarreraController.agregar',
  'GET /carrera/agregar': {
    view: 'carrera/agregar'
  },
  'POST /carrera/edit': {
    controller: 'CarreraController',
    action: 'update'
  },
  'GET /carrera/edit': {
    view: 'carrera/edit'
  },

  'POST /departamento/agregar': {
    controller: 'DepartamentoController',
    action: 'agregar'
  },
  'GET /departamento/agregar': {
    view: 'departamento/agregar'
  },
  'POST /departamento/edit': {
    controller: 'DepartamentoController',
    action: 'update'
  },
  'GET /departamento/edit': {
    view: 'departamento/edit'
  },

  'POST /materia/agregar': {
    controller: 'MateriaController',
    action: 'agregar'
  },
  'GET /materia/agregar': 'MateriaController.consultarDep',
  'POST /materia/edit': {
    controller: 'MateriaController',
    action: 'update'
  },
  'GET /materia/edit': 'MateriaController.consultarDep',
  'GET /materia/seleccionbusqueda': {
    view: 'materia/seleccionbusqueda'
  },
  'GET /materia/identificacion': {
    view: 'materia/identificacion'
  },

  'POST /periodo/agregar': 'PeriodoController.agregar',
  'GET /periodo/agregar': {
    view: 'periodo/agregar'
  },
  'POST /periodo/edit': {
    controller: 'PeriodoController',
    action: 'update'
  },
  'GET /periodo/edit': {
    view: 'periodo/edit'
  },

  'POST /seccion/agregar': 'SeccionController.agregar',
  'GET /seccion/agregar': 'SeccionController.consultarMat', 

  'POST /seccion/edit': {
    controller: 'SeccionController',
    action: 'update'
  },
  'GET /seccion/edit': {
    view: 'seccion/edit'
  },

  'POST /selecciondeportiva/agregar': 'SelecciondeportivaController.agregar',
  'GET /selecciondeportiva/agregar': {
    view: 'selecciondeportiva/agregar'
  },
  'POST /selecciondeportiva/edit': {
    controller: 'SelecciondeportivaController',
    action: 'update'
  },
  'GET /selecciondeportiva/edit': {
    view: 'selecciondeportiva/edit'
  },
  'GET /selecciondeportiva/seleccionbusqueda': {
    view: 'selecciondeportiva/seleccionbusqueda'
  },
  'GET /selecciondeportiva/identificacion': {
    view: 'selecciondeportiva/identificacion'
  },

  'POST /estudiante/agregar': 'EstudianteController.agregar',
  'GET /estudiante/agregar': {
    view: 'estudiante/agregar'
  },
  'POST /estudiante/edit': {
    controller: 'EstudianteController',
    action: 'update'
  },
  'GET /estudiante/edit': {
    view: 'estudiante/edit'
  },
  'GET /estudiante/seleccionbusqueda': {
    view: 'estudiante/seleccionbusqueda'
  },
  'GET /estudiante/identificacion': {
    view: 'estudiante/identificacion'
  },

  'POST /profesor/agregar': 'ProfesorController.agregar',
  'GET /profesor/agregar': 'ProfesorController.consultarDep',
  'GET /profesor/mostrar': 'Estudiante.BuscarEstudiantesdeSeccion',
  'POST /profesor/edit': {
    controller: 'ProfesorController',
    action: 'update'
  },
  
  'GET /profesor/edit': 'ProfesorController.consultarDep',
  'GET /profesor/seleccionbusqueda': {
    view: 'profesor/seleccionbusqueda'
  },
  'GET /profesor/identificacion': {
    view: 'profesor/identificacion'
  },
  'POST /profesor/identificacion': {
    controller: 'ProfesorController',
    action: 'buscarseccion'
  },
  'POST /profesor/elegirseccion': {
    controller: 'ProfesorController',
    action: 'buscarseccion'
  },
  'GET /profesor/elegirseccion': {
    view: 'profesor/elegirseccion'
  },

  'POST /beca/agregar': 'BecaController.agregar',
  'GET /beca/agregar': {
    view: 'beca/agregar'
  },
  'POST /beca/edit': {
    controller: 'BecaController',
    action: 'update'
  },
  'GET /beca/edit': {
    view: 'beca/edit'
  },
  'GET /beca/seleccionbusqueda': {
    view: 'beca/seleccionbusqueda'
  }


  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/

};
