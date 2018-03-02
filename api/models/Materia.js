/**
 * Materia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idmateria: {
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },

    codigo:{
      type:'string',
      required: true
    },

    nombre:{
      type:'string',
      required: true
    },

    credito:{
      type:'int',
      required: true
    }

  }
};

