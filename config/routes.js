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
  
  'POST /aula/agregar': 'AulaController.agregar',
  'GET /aula/agregar': {
    view: 'aula/agregar'
  },

  'POST /carrera/agregar': 'CarreraController.agregar',
  'GET /carrera/agregar': {
    view: 'carrera/agregar'
  },

  'POST /departamento/agregar': 'DepartamentoController.agregar',
  'GET /departamento/agregar': {
    view: 'departamento/agregar'
  },

  'POST /materia/agregar': 'MateriaController.agregar',
  'GET /materia/agregar': {
    view: 'materia/agregar'
  },

  'POST /periodo/agregar': 'PeriodoController.agregar',
  'GET /periodo/agregar': {
    view: 'periodo/agregar'
  },

  'POST /seccion/agregar': 'SeccionController.agregar',
  'GET /seccion/agregar': {
    view: 'seccion/agregar'
  },

  'POST /seleccion/agregar': 'SeleccionController.agregar',
  'GET /seleccion/agregar': {
    view: 'seleccion/agregar'
  },

  'POST /user/agregar': 'UserController.agregar',
  'GET /user/agregar': {
    view: 'user/agregar'
  },

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
