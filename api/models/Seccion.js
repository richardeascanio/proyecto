/**
 * Seccion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idseccion: {
      type: 'integer',
      required: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },

    nroseccion: {
      type: 'integer',
      required: true
    },

    cupos: {
      type: 'int',
      required: true
    },

    idProfesor: {
      model: 'Profesor'
    },

    idPeriodo: {
      model: 'Periodo'
    },

    idMateria: {
      model: 'Materia'
    },

    idAula: {
      model: 'Aula'
    },

    estudiantes: {
      collection: 'Estudiante',
      via: 'idSeccion',
      through: 'estudiante_seccion'
    }
  }
};
