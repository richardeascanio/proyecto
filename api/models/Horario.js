/**
 * Horario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idhorario: {
      type: 'integer',
      required: false,
      primaryKey: true,
      unique: true,

    },

    dia: {
      type: 'string',
      required: true,
    },

    bloquehorario: {
      type: 'string',
      required: true,
    },



  }
};

