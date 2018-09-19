'use strict';
module.exports = (sequelize, DataTypes) => {
  const tampa_challenge = sequelize.define('tampa_challenge', {
    lat: DataTypes.GEOMETRY,
    long: DataTypes.GEOMETRY,
    clue: DataTypes.STRING,
    badge: DataTypes.BOOLEAN
  }, {});
  tampa_challenge.associate = function(models) {
    // associations can be defined here
  };
  return tampa_challenge;
};