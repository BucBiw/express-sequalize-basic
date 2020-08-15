'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(200),
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    create_at: {
      type: DataTypes.DATE,
      defualtValue: DataTypes.NOW
    }
  }, {
    tableName: 'users',
    timestamps: false //close auto created_time updated_time
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};