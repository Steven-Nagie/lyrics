angular.module('app').controller('endCtrl', function($scope, $stateParams) {


  if ($stateParams.id === 'great') {
    $scope.message = "You're the best! Congratulations on your vast array of pop music knowledge! You wanna give it another go? There's a special surprise if you do!";
  } else if ($stateParams.id === "mediocre") {
    $scope.message = "What matters is, you tried.";
  } else if ($stateParams.id === "bad"){
    $scope.message = "This is the end.";
  } else {
    $scope.message = "There is no hope for you.";
  }

});
