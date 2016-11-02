angular.module('app').service('scoreService', function() {

  this.score = 0;
  this.totalQuestions = 0;

  this.correctAnswer = function() {
    this.score += 5;
    this.totalQuestions++;
    var answers = $('.answers');
    for (var i = 0; i < answers.length; i++) {
      var target = Math.floor(Math.random() * answers.length - 1) + 1;
      var target2 = Math.floor(Math.random() * answers.length - 1) + 1;
      answers.eq(target).before(answers.eq(target2));
    }
  };

  this.incorrectAnswer = function() {
    this.score -= 3;
    this.totalQuestions++;
    var answers = $('.answers');
    for (var i = 0; i < answers.length; i++) {
      var target = Math.floor(Math.random() * answers.length - 1) + 1;
      var target2 = Math.floor(Math.random() * answers.length - 1) + 1;
      answers.eq(target).before(answers.eq(target2));
    }
  };

});
