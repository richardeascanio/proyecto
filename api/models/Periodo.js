/**
 * Periodo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idperiodo: {
      type: 'integer',
      required: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },

    nombre: {
      type: 'string',
      required: true,
      unique: true
    },

    indiceacum: {
      type: 'int',
    },

    indiceper: {
      type: 'int',
    },

    secciones: {
      collection: 'Seccion',
      via: 'idPeriodo'
    },



  }
};
