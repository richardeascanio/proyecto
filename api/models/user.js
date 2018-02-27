/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 
  createdAt:false,
  updatedAt:false,
  

  attributes: {

    idusuario: {
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },

    nombre:{
      type:'string',
      required: true
    },

    apellido:{
      type:'string',
      required: true
    },

    cedula:{
      type:'int',
      required: true,
      unique: true
    },

    carnet:{
      type:'int',
      required: true,
      unique: true
    },

    correo:{
      type:'email',
      required: true,
      unique: true 
    },

    NroTlfn:{
      type:'int',
      required: true,
      unique: true
    },

  }
};

