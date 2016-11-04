angular.module('app').controller('endCtrl', function($scope, $stateParams) {


  if ($stateParams.id === 'great') {
    $scope.rainbowTrue = true;
    $scope.message = "You're the best! Congratulations on your vast array of pop music knowledge!";
  } else if ($stateParams.id === "mediocre") {
    $scope.rainbowTrue = false;
    $scope.message = "What matters is, you tried.";
  } else if ($stateParams.id === "bad"){
    $scope.rainbowTrue = false;
    $scope.message = "This is the end.";
  } else {
    $scope.rainbowTrue = false;
    $scope.message = "There is no hope for you.";
  }

});
