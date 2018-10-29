'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    lat: DataTypes.FLOAT(15, 12),
    long: DataTypes.FLOAT(15, 12),
    checkedIn: {
      type: DataTypes.BOOLEAN,
      default: false
    }, 
    clue: {
      type: DataTypes.STRING,
      allownull: false
    }
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.belongsTo(models.User);
    Location.belongsTo(models.Challenge);
  };
  return Location;
};