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
      required:false,
      primaryKey: true,
      unique: true,

    },

    tipo: {
      type: 'string',
      required: true,

    }

  }
};

