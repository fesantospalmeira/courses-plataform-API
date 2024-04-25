'use strict';
const isValid = require('../../utils/validCpfHelper.js');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Course,{
        foreignKey:'docent_id'
      });
      People.hasMany(models.Registration,{
        foreignKey:'studant_id',
        // scope: {status: 'matriculado'},
        as:'EnrolledClasses'
      });
    }
  }
  People.init({
    name: {
      type:DataTypes.STRING,
      validate: {
        len: {
          args: [3, 40],
          msg:'The name field must have a minimum of 3 and a maximum of 40 characters.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:{
          args: true,
          msg: 'Email format incorrect.'
        }
      }
    },
    cpf: {
      type:DataTypes.STRING,
      validate: {
        cpfIsValid:(cpf)=>{
          if (!isValid(cpf)) throw new Error('CPF number invalid.')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
    tableName: 'pessoas',
    paranoid: true,
    defaultScope:{
      where: {
        ativo: true,
      }
    },
    scopes:{
      allRegisters:{
        where: {}
      }
    }
  });
  return People;
};