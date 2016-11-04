angular.module('app').controller('mainCtrl', function($scope, $state, lyricService, scoreService, rainbowService) {

  // Have to change scope, put it on service.
  $scope.rainbowTrue = false;

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

  function endIt() {
    if ($scope.score >= 50) {
    $scope.rainbowTrue = true;
    $state.go('end', {'id': 'great'});
  } else if ($scope.score <= 37 && $scope.score > 0) {
    $state.go('end', {'id': 'bad'});
  } else if ($scope.score < 50 && $scope.score > 37){
    $state.go('end', {'id': 'mediocre'});
  } else {
    $state.go('end', {'id': 'terrible'});
  }
  }

  // This variables are to keep count of how the user is progressing through the game.
  $scope.score = 0;
  $scope.totalQuestions = 0;

  $scope.reset = function() {
    $scope.score = 0;
    $scope.totalQuestions = 0;
  };

  $scope.correctAnswer = function() {
    scoreService.answer();
    $scope.score += 5;
    $scope.totalQuestions++;
    if ($scope.totalQuestions >= 10) {
      endIt();
    }
    eraseDuplicateQuesions();
    getRandoms();
    console.log($scope.totalQuestions);

  };

  $scope.incorrectAnswer = function() {
    scoreService.answer();
    $scope.score -= 3;
    $scope.totalQuestions++;
    if ($scope.totalQuestions >= 10) {
      endIt();
    }
    eraseDuplicateQuesions();
    getRandoms();
    console.log($scope.totalQuestions);

  };

  $scope.getRandomTrack = function() {
    return $scope.tracks[Math.floor(Math.random() * ($scope.tracks.length - 1))];
  };




  // Searches for instances of the artist as credited to a song. This means that it includes collaborations with other artists.
  $scope.getArtist = function(artist) {
    lyricService.getArtist(artist).then(function(response) {
      // $scope.lyrics = response.data.message.body.artist_list[0].artist.artist_name;
      $scope.artist = response.data.message.body.artist_list;
    });
  };

  // Gets the most popular artists in the given country. Right now I have it set to return the fifty most popular artists.
  $scope.getChart = function(country) {
    lyricService.getChart(country).then(function(response) {
      $scope.chart = response;
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
      $scope.randomArtist1 = $scope.getRandomTrack().artist;
      $scope.randomArtist2 = $scope.getRandomTrack().artist;
      $scope.getLyrics(randomTrack.trackId);
    });
  };

  // Gets the lyrics of a specific song as determined by the trackId. The getTracks function returns the trackId, so we have to call that, then, for each song, call the specific id to get the lyrics.
  $scope.getLyrics = function(trackId) {
    lyricService.getLyrics(trackId).then(function(response) {
      $scope.lyrics = response;
    });
  };

  $scope.newGame = function(country) {
    $scope.getTracks(country);
    $state.go('game');
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
