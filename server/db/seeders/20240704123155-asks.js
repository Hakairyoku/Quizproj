'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Asks",
      [
        {
          question: '👳🛶🐯',
          answer: 'Жизнь Пи',
          img: 'answerImage1',
          topicId: 1
        },
        {
          question: '🌍🙉🙈🙊',
          answer: 'Планета обезьян',
          img: 'answerImage4',
          topicId: 1
        },
        {
          question: '👨👨‍🦰💖🗻',
          answer: 'Горбатая гора',
          img: 'answerImage2',
          topicId: 1
        },
        {
          question: '🍽️🙏❤️',
          answer: 'Ешь молись люби',
          img: 'answerImage3',
          topicId: 1
        },
        {
          question: '👨‍🦱🤲✂️',
          answer: 'Эдвард руки-ножницы',
          img: 'answerImage5',
          topicId: 1
        },
        {
          question: '🐼👊🏻',
          answer: 'Кунг-фу панда',
          img: 'answerImage6',
          topicId: 1
        },
        {
          question: '😎😎🚀🔫👽',
          answer: 'Люди в черном',
          img: 'answerImage7',
          topicId: 1
        },
        {
          question: '👩🍸🍹🥂🥃🕒',
          answer: 'Пила',
          img: 'answerImage8',
          topicId: 1
        },
        {
          question: '🗡️🪑🛡️',
          answer: 'Игра престолов',
          img: 'answerImage1',
          topicId: 2
        },
        {
          question: '🏥👨‍⚕️🐺',
          answer: 'Доктор Хаус',
          img: 'answerImage4',
          topicId: 2
        },
        {
          question: '👨‍🔬👨‍🎤🔫🧪⚗️💊💵',
          answer: 'Во все тяжкие',
          img: 'answerImage2',
          topicId: 2
        },
        {
          question: '👣♛',
          answer: 'Ход королевы',
          img: 'answerImage3',
          topicId: 2
        },
        {
          question: '🔪🧢',
          answer: 'Острые козырьки',
          img: 'answerImage5',
          topicId: 2
        },
        {
          question: '🕵️‍♂️🎻📚',
          answer: 'Шерлок',
          img: 'answerImage6',
          topicId: 2
        },
        {
          question: '👨👨👨🤝👩👩‍🦰👩',
          answer: 'Друзья',
          img: 'answerImage7',
          topicId: 2
        },
        {
          question: '📞🧑‍⚖️',
          answer: 'Лучше звоните Солу',
          img: 'answerImage8',
          topicId: 2
        },
       
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Asks", null, {});
  },
};

