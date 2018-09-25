'use strict';
module.exports = (sequelize, DataTypes) => {
  const Challenge = sequelize.define('Challenge', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING
  }, {});
  Challenge.associate = function(models) {
    // associations can be defined here
    Challenge.belongsTo(models.User), {
      foriegnKey: "UserId",
      onDelete: "CASCADE"
    };
  };
  return Challenge;
};