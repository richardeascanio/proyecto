/**
 * Profesor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  createdAt: false,
  updatedAt: false,

  attributes: {

    idprofesor: {
      type: 'integer',
      required: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,

    },

    profesion: {
      type: 'string',
      required: true,
    },

    fechaingreso: {
      type: 'date',
      required: true
    },

    idDepartamento: {
      model: 'Departamento'

    },

    clases: {
      collection: 'Seccion',
      via: 'idProfesor'
    },
  }
};
