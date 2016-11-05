angular.module('app').controller('gameCtrl', function($scope, lyricService, rainbowService) {


  $scope.rainbowify = rainbowService.rainbowify;
  //   $scope.tracks = [];
  //   $scope.lyrics = 0;
  //
  //   $scope.getRandomTrack = function() {
  //     return $scope.tracks[Math.floor(Math.random() * ($scope.tracks.length - 1))].trackId;
  //   };
  //
  //   // Searches for instances of the artist as credited to a song. This means that it includes collaborations with other artists.
  //   $scope.getArtist = function(artist) {
  //     lyricService.getArtist(artist).then(function(response) {
  //       // $scope.lyrics = response.data.message.body.artist_list[0].artist.artist_name;
  //       $scope.artist = response.data.message.body.artist_list;
  //       console.log($scope.artist);
  //     });
  //   };
  //
  //   // Gets the most popular artists in the given country. Right now I have it set to return the fifty most popular artists.
  //   $scope.getChart = function(country) {
  //     lyricService.getChart(country).then(function(response) {
  //       $scope.chart = response;
  //       console.log($scope.chart);
  //     });
  //   };
  //
  //   // Gets the most popular songs in the given country. Set to return the fifty most popular songs.
  //   $scope.getTracks = function(country) {
  //     lyricService.getTracks(country).then(function(response) {
  //       $scope.tracks = response;
  //       // console.log($scope.tracks);
  //     }).then(function() {
  //       $scope.getLyrics($scope.getRandomTrack());
  //     });
  //   };
  //
  //   // Gets the lyrics of a specific song as determined by the trackId. The getTracks function returns the trackId, so we have to call that, then, for each song, call the specific id to get the lyrics.
  //   $scope.getLyrics = function(trackId) {
  //     lyricService.getLyrics(trackId).then(function(response) {
  //       $scope.lyrics = response;
  //       console.log($scope.lyrics);
  //     });
  //   };
  //
  //   // $scope.getArtist('Kendrick Lamar');
  //   //
  //   // $scope.getChart('us');
  //   //
  //   $scope.getTracks('us');
  //   //
  //   // $scope.getLyrics($scope.getRandomTrack());
  //
  // // 12849595 = Kendrick id



});
