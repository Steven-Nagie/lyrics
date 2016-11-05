angular.module('app').controller('homeCtrl', function($scope, rainbowService) {

  $scope.rainbowify = rainbowService.rainbowify;

});
