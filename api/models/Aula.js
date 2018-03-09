/**
 * Aula.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idaula:{
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },

    edificio:{
      type:'string',
      required: true
    },

    piso:{
      type:'int',
      required: true
    },

    numeroaula:{
      type:'int',
      required: true
    },

    clases:{
      collection: 'Seccion',
      via: 'idAula',

    },

  }
};

