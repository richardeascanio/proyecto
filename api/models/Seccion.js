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
<<<<<<< HEAD

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
    }
=======
>>>>>>> richard

  }
};
