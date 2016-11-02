angular.module('app').controller('mainCtrl', function($scope, lyricService) {

  $scope.getArtist = function() {
    lyricService.getArtist().then(function(response) {
      // $scope.lyrics = response.data.message.body.artist_list[0].artist.artist_name;
      $scope.artist = response.data.message.body.artist_list;
      // console.log($scope.lyrics);
    });
  };

  $scope.getChart = function() {
    lyricService.getChart().then(function(response) {
      $scope.chart = response.data.body.artist_list;
      console.log($scope.chart);
    });
  };

  $scope.getArtist();

  $scope.getChart();

});
