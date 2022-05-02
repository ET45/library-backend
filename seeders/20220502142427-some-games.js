"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "games",
      [
        {
          name: "Clash of Warrior",
          description: "Two player fight game to play with your friend.",
          link: "https://clashofwarriors.netlify.app/",
          ghlink: "https://github.com/ET45/Clash-of-Warriors",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jump Game",
          description: "Small jumping game where you jump over small demons.",
          link: "https://glittery-klepon-901ef2.netlify.app/",
          ghlink: "https://github.com/ET45/JumpGame",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Flappy Dragon",
          description: "Flappy Bird but with a Dragon!",
          link: "https://warm-entremet-8d5613.netlify.app/",
          ghlink: "https://github.com/ET45/FlappyDragon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
   */

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("games", null, {});
  },
};
