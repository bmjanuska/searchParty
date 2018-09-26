'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Clues', [{
    clue: "look at this lovely clue",
    ChallengeId: 1
  }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Clues', null, {});
  }
};
