'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Locations', [{
    lat: 28.567586,
    long: -81.3553641,
    checkedIn: false,
    UserId: 1,
    ChallengeId: 1
  }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Locations', null, {});
  }
};
