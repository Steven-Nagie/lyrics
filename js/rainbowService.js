angular.module('app').service('rainbowService', function() {

    this.getRandomColor = function() {
        var letters = "0123456789ABCDEF";
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters.charAt(Math.floor(Math.random() * 16));
        }
        return color;
    };

    this.rainbowify = function() {
        if (this.rainbowTrue === true) {

            var words = element.text().split(' ');

            for (var i = Math.floor(Math.random() * (5 - 1)); i < words.length; i) {
                var random = this.getRandomColor();
                words[i] = "<span style='color:" + random + "'>" + words[i] + "</span>";
                i += Math.floor(Math.random() * (5 - 1));
            }
            words = words.join(" ");
            element.html(words);
        }
      };
  });
