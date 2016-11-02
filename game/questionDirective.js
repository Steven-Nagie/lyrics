angular.module('app').directive('showQuestion', function () {
  return {
    templateUrl: './game/question.html',
    link: function() {
      var answers = $('.answers');
      for (var i = 0; i < answers.length; i++) {
        var target = Math.floor(Math.random() * answers.length - 1) + 1;
        var target2 = Math.floor(Math.random() * answers.length - 1) + 1;
        answers.eq(target).before(answers.eq(target2));
      }
    }
  };
});
