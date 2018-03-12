/**
 * Beca.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idbeca: {
      type: 'integer',
      required: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },

    porcentaje: {
      type: 'int',
      required: true
    },

    tipo: {
      type: 'string',
      required: true
    },

    idestudiante: {
      model: 'Estudiante',
      unique: true
    },

  }
};
