/**
 * Estudiante.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    idestudiante: {
      type: 'integer',
      required: false,
      primaryKey: true,
      unique: true,

    },

    tipo: {
      type: 'string',
      required: true,

    },

    beca: {
      collection: 'Beca',
      via: 'idestudiante'
    },

    carreras: {
      collection: 'Carrera',
      via: 'idEstudiante',
      through: 'estudiante_carrera'
    },

    secciones: {
      collection: 'Seccion',
      via: 'idEstudiante',
      through: 'estudiante_seccion'
    },

    selecciones: {
      collection: 'Selecciondeportiva',
      via: 'idEstudiante',
      through: 'estudiante_seleccion'
    },

    periodos: {
      collection: 'Periodo',
      via: 'idEstudiante',
      through: 'estudiante_periodo'
    }

  }
};
