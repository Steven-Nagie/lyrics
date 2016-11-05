angular.module('app').service('rainbowService', function() {

  this.getRandomColor = function() {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters.charAt(Math.floor(Math.random() * 16));
    }
    return color;
  };

});
