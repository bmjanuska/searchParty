'use strict';
module.exports = (sequelize, DataTypes) => {
  const orlando_challenge = sequelize.define('orlando_challenge', {
    lat: DataTypes.GEOMETRY,
    long: DataTypes.GEOMETRY,
    clue: DataTypes.STRING,
    badge: DataTypes.BOOLEAN
  }, {});
  orlando_challenge.associate = function(models) {
    // associations can be defined here
  };
  return orlando_challenge;
};