'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Challenge, {
      foriegnKey: "UserId",
      onDelete: "CASCADE"
    });
    User.hasMany(models.Location, {
      foriegnKey: "UserId",
      onDelete: "CASCADE"
    });
  };
  return User;
};