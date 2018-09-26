'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clue = sequelize.define('Clue', {
    clue: DataTypes.STRING
  }, {});
  Clue.associate = function(models) {
    // associations can be defined here
    Clue.belongsTo(models.Challenge);
  };
  return Clue;
};