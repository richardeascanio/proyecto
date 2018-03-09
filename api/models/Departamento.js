/**
 * Departamento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    iddepartamento: {
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

    profesores:{
      collections:'Profesor',
      via: 'idDepartamento',
    },

    materias:{
      collection:'Materia',
      via: 'iddepartamento'

    },

  }
};

