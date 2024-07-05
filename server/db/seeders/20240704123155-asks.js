'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Asks",
      [
        {
          question: '🎩🔍🕰️👶🧔🕺',
          answer: 'answer1',
          img: 'answerImage1',
          topicId: 1
        },
        {
          question: 'question4',
          answer: 'answer4',
          img: 'answerImage4',
          topicId: 1
        },
        {
          question: 'question2',
          answer: 'answer2',
          img: 'answerImage2',
          topicId: 1
        },
        {
          question: 'question3',
          answer: 'answer3',
          img: 'answerImage3',
          topicId: 1
        },
        {
          question: 'question5',
          answer: 'answer5',
          img: 'answerImage5',
          topicId: 1
        },
        {
          question: 'question6',
          answer: 'answer6',
          img: 'answerImage6',
          topicId: 1
        },
        {
          question: 'question7',
          answer: 'answer7',
          img: 'answerImage7',
          topicId: 1
        },
        {
          question: 'question8',
          answer: 'answer8',
          img: 'answerImage8',
          topicId: 1
        },
        {
          question: 'question9',
          answer: 'answer9',
          img: 'answerImage9',
          topicId: 1
        },
        {
          question: 'question10',
          answer: 'answer10',
          img: 'answerImage10',
          topicId: 1
        },
        {
          question: 'question1',
          answer: 'answer1',
          img: 'answerImage1',
          topicId: 2
        },
        {
          question: 'question4',
          answer: 'answer4',
          img: 'answerImage4',
          topicId: 2
        },
        {
          question: 'question2',
          answer: 'answer2',
          img: 'answerImage2',
          topicId: 2
        },
        {
          question: 'question3',
          answer: 'answer3',
          img: 'answerImage3',
          topicId: 2
        },
        {
          question: 'question5',
          answer: 'answer5',
          img: 'answerImage5',
          topicId: 2
        },
        {
          question: 'question6',
          answer: 'answer6',
          img: 'answerImage6',
          topicId: 2
        },
        {
          question: 'question7',
          answer: 'answer7',
          img: 'answerImage7',
          topicId: 2
        },
        {
          question: 'question8',
          answer: 'answer8',
          img: 'answerImage8',
          topicId: 2
        },
        {
          question: 'question9',
          answer: 'answer9',
          img: 'answerImage9',
          topicId: 2
        },
        {
          question: 'question10',
          answer: 'answer10',
          img: 'answerImage10',
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

