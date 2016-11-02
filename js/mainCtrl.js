angular.module('app').controller('mainCtrl', function($scope, $state, lyricService, scoreService) {

  // These equations help with moving the game along with each correct or incorrect answer
  function getRandoms() {
    var randomTrack = $scope.getRandomTrack();
    $scope.correctArtist = randomTrack.artist;
    console.log(randomTrack);
    $scope.randomArtist1 = $scope.getRandomTrack().artist;
    $scope.randomArtist2 = $scope.getRandomTrack().artist;
    $scope.getLyrics(randomTrack.trackId);
  }

  function eraseDuplicateQuesions() {
    for (var i = 0; i < $scope.tracks.length; i++) {
      if ($scope.tracks[i].lyricsId === $scope.lyrics.lyricsId) {
        $scope.tracks.splice(i, 1);
      }
    }
  }

  // This variables are to keep count of how the user is progressing through the game.
  $scope.score = 0;
  $scope.totalQuestions = 0;
  $scope.correctAnswer = function() {
    scoreService.correctAnswer();
    $scope.score = scoreService.score;
    if ($scope.totalQuestions === 20) {
      $state.go('end');
    }
    eraseDuplicateQuesions();
    getRandoms();
  };
  $scope.incorrectAnswer = function() {
    scoreService.incorrectAnswer();
    $scope.score = scoreService.score;
    if ($scope.totalQuestions === 20) {
      $state.go('end');
    }
    eraseDuplicateQuestions();
    getRandoms();
  };

  $scope.getRandomTrack = function() {
    return $scope.tracks[Math.floor(Math.random() * ($scope.tracks.length - 1))];
  };




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
      $scope.chart = response;
      console.log($scope.chart);
    });
  };

  // Gets the most popular songs in the given country. Set to return the fifty most popular songs.
  $scope.getTracks = function(country) {
    lyricService.getTracks(country).then(function(response) {
      $scope.tracks = response;
      // console.log($scope.tracks);
    }).then(function() {
      var randomTrack = $scope.getRandomTrack();
      $scope.correctArtist = randomTrack.artist;
      console.log(randomTrack);
      $scope.randomArtist1 = $scope.getRandomTrack().artist;
      $scope.randomArtist2 = $scope.getRandomTrack().artist;
      $scope.getLyrics(randomTrack.trackId);
    });
  };

  // Gets the lyrics of a specific song as determined by the trackId. The getTracks function returns the trackId, so we have to call that, then, for each song, call the specific id to get the lyrics.
  $scope.getLyrics = function(trackId) {
    lyricService.getLyrics(trackId).then(function(response) {
      $scope.lyrics = response;
      console.log($scope.lyrics);
    });
  };

  // $scope.getArtist('Kendrick Lamar');
  //
  // $scope.getChart('us');
  //
  $scope.getTracks('us');
  //
  // $scope.getLyrics($scope.getRandomTrack());

  // 12849595 = Kendrick id


});
