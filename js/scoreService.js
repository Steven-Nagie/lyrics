angular.module('app').service('scoreService', function() {

  this.answer = function() {
    // This has to be here to ensure that the correct answer moves for each new question. The code in the directive only does it the first time around.
    var answers = $('.answers');
    for (var i = 0; i < answers.length; i++) {
      var target = Math.floor(Math.random() * answers.length - 1) + 1;
      var target2 = Math.floor(Math.random() * answers.length - 1) + 1;
      answers.eq(target).before(answers.eq(target2));
    }
  };

});
