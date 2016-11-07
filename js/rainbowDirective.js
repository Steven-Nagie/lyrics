angular.module('app').directive('rainbow', function() {
  return {
    link: function(scope, element, attrs) {
      setTimeout(function() {
      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters.charAt(Math.floor(Math.random() * 16));
        }
        return color;
      }

      if (scope.rainbowTrue === true) {

        var words = element.text().split(' ');

        for (var i = Math.floor(Math.random() * (5 - 1)); i < words.length; i) {
          var random = getRandomColor();
          words[i] = "<span style='color:" + random + "'>" + words[i] +"</span>";
          i += Math.floor(Math.random() * (5 - 1));
        }
        words = words.join(" ");
        element.html(words);
      }
    }, 1000);
    }
  };
});
