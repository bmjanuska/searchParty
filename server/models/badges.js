'use strict';
module.exports = (sequelize, DataTypes) => {
  const Badges = sequelize.define('Badges', {
    image: DataTypes.STRING
  }, {});
  Badges.associate = function(models) {
    // associations can be defined here
  };
  return Badges;
};