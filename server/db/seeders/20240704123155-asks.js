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
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 1
        },
        {
          question: '🌍🙉🙈🙊',
          answer: 'Планета обезьян',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 1
        },
        {
          question: '👨👨‍🦰💖🗻',
          answer: 'Горбатая гора',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 1
        },
        {
          question: '🍽️🙏❤️',
          answer: 'Ешь молись люби',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 1
        },
        {
          question: '👨‍🦱🤲✂️',
          answer: 'Эдвард руки-ножницы',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 1
        },
        {
          question: '🐼👊🏻',
          answer: 'Кунг-фу панда',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 1
        },
        {
          question: '😎😎🚀🔫👽',
          answer: 'Люди в черном',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 1
        },
        {
          question: '👩🍸🍹🥂🥃🕒',
          answer: 'Пила',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 1
        },
        {
          question: '🗡️🪑🛡️',
          answer: 'Игра престолов',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 2
        },
        {
          question: '🏥👨‍⚕️🐺',
          answer: 'Доктор Хаус',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 2
        },
        {
          question: '👨‍🔬👨‍🎤🔫🧪⚗️💊💵',
          answer: 'Во все тяжкие',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 2
        },
        {
          question: '👣♛',
          answer: 'Ход королевы',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 2
        },
        {
          question: '🔪🧢',
          answer: 'Острые козырьки',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 2
        },
        {
          question: '🕵️‍♂️🎻📚',
          answer: 'Шерлок',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 2
        },
        {
          question: '👨👨👨🤝👩👩‍🦰👩',
          answer: 'Друзья',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          topicId: 2
        },
        {
          question: '📞🧑‍⚖️',
          answer: 'Лучше звоните Солу',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
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

