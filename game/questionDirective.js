angular.module('app').directive('showQuestion', function () {
  return {
    templateUrl: './game/question.html',
    link: function(scope, element, attrs) {
      var answers = $('.answers');
      for (var i = 0; i < answers.length; i++) {
        var target = Math.floor(Math.random() * answers.length - 1) + 1;
        var target2 = Math.floor(Math.random() * answers.length - 1) + 1;
        answers.eq(target).before(answers.eq(target2));
      }

      // if (scope.rainbowTrue === true) {
      //
      //   var words = element.text().split(' ');
      //
      //   for (var j = Math.floor(Math.random() * (5 - 1)); j < words.length; j) {
      //     var random = scope.getRandomColor();
      //     words[j] = "<span style='color:" + random + "'>" + words[j] +"</span>";
      //     j += Math.floor(Math.random() * (5 - 1));
      //   }
      //   words = words.join(" ");
      //   element.html(words);
      // }

    }

  };

});
