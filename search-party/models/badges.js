'use strict';
module.exports = (sequelize, DataTypes) => {
  const badges = sequelize.define('badges', {
    image: DataTypes.STRING
  }, {});
  badges.associate = function(models) {
    // associations can be defined here
  };
  return badges;
};