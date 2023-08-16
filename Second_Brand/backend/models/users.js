'use strict';
const {
  Model, INTEGER
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_city: DataTypes.STRING,
    user_address: DataTypes.TEXT,
    user_phone: DataTypes.STRING,
    user_image: DataTypes.TEXT,
    user_role: DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};