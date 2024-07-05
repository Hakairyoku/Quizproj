'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Фильмы",
          img: 'https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1659637411_3-kartinkin-net-p-zastavka-filma-krasivo-3.jpg',
        },
        {
          title: "Сериалы",
          img: "https://cs6.pikabu.ru/post_img/big/2015/04/04/5/1428133715_1088484325.jpg",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
