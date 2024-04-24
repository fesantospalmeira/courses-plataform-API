'use strict';
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
        scope: {status: 'matriculado'},
        as:'EnrolledClasses'
      });
    }
  }
  People.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
    tableName: 'pessoas'
  });
  return People;
};