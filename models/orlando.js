'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orlando = sequelize.define('Orlando', {
    lat: DataTypes.GEOMETRY,
    long: DataTypes.GEOMETRY,
    clue: DataTypes.STRING,
    badge: DataTypes.BOOLEAN
  }, {});
  Orlando.associate = function(models) {
    // associations can be defined here
  };
  return Orlando;
};