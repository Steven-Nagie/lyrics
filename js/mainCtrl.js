angular.module('app').controller('mainCtrl', function($scope, lyricService) {

  // Searches for instances of the artist as credited to a song. This means that it includes collaborations with other artists.
  $scope.getArtist = function(artist) {
    lyricService.getArtist(artist).then(function(response) {
      // $scope.lyrics = response.data.message.body.artist_list[0].artist.artist_name;
      $scope.artist = response.data.message.body.artist_list;
      console.log($scope.artist);
    });
  };

  // Gets the most popular artists in the given country. Right now I have it set to return the fifty most popular artists.
  $scope.getChart = function(country) {
    lyricService.getChart(country).then(function(response) {
      $scope.chart = response.data.message.body.artist_list;
      console.log($scope.chart);
    });
  };

  // Gets the most popular songs in the given country. Set to return the fifty most popular songs.
  $scope.getTracks = function(country) {
    lyricService.getTracks(country).then(function(response) {
      $scope.tracks = response.data.message.body.track_list;
      console.log($scope.tracks);
    });
  };

  // Gets the lyrics of a specific song as determined by the trackId. The getTracks function returns the trackId, so we have to call that, then, for each song, call the specific id to get the lyrics.
  $scope.getLyrics = function(trackId) {
    lyricService.getLyrics(trackId).then(function(response) {
      $scope.lyrics = response.data.message.body.lyrics;
      // I think this part might be illegal. I'm cutting the copyright out because I hate it.
      for (var i = 0; i < $scope.lyrics.lyrics_body.length; i++) {
        if ($scope.lyrics.lyrics_body.charAt(i) === '*') {
          $scope.lyrics.lyrics_body = $scope.lyrics.lyrics_body.slice(0, i);
        }
      }
      console.log($scope.lyrics);
    });
  };

  // $scope.getArtist('Kendrick Lamar');
  //
  // $scope.getChart('us');
  //
  // $scope.getTracks('us');
  //
  // $scope.getLyrics('15953433');


// 12849595 = Kendrick id


});
