'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tampa = sequelize.define('Tampa', {
    lat: DataTypes.GEOMETRY,
    long: DataTypes.GEOMETRY,
    clue: DataTypes.STRING,
    badge: DataTypes.BOOLEAN
  }, {});
  Tampa.associate = function(models) {
    // associations can be defined here
  };
  return Tampa;
};