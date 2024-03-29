'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    firstName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: false
    }
    //areaId
    //techId
  }, {
    sequelize,
    modelName: 'user',
    timestamps: false
  });
  return user;
};