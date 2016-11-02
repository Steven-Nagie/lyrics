angular.module('app').service('lyricService', function($http, $q, $sce) {

  $sce.trustAsResourceUrl('https://api.musixmatch.com/ws/1.1');


  this.getArtist = function(artist) {
    return $http({
      method: 'JSONP',
      url:'https://api.musixmatch.com/ws/1.1/artist.search?apikey=7ead25d4f072f70cc89e665e62afb765&format=jsonp&q_artist=' + artist + '&callback=JSON_CALLBACK'
      });
  };

  // This will parse the data, and return a promise that itself returns a sorted array containing the ids and names of the 50 most popular artists in the given country.
  this.getChart = function(country) {
    var deferObj = $q.defer();
    $http({
      method: 'JSONP',
      url:'https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=50&country=' + country + '&apikey=7ead25d4f072f70cc89e665e62afb765&format=jsonp&callback=JSON_CALLBACK'
    }).then(function(response) {
      var parsedResponse = response.data.message.body.artist_list;
      var artists = [];
      for (var i = 0; i < parsedResponse.length; i++) {
        artists.push({name: parsedResponse[i].artist.artist_name, id: parsedResponse[i].artist.artist_id});
      }
      deferObj.resolve(artists);
    });
    return deferObj.promise;
  };

  //Note that the f_has_lyrics command will filter for songs with available lyrics.
  this.getTracks = function(country) {
    var deferObj = $q.defer();
    $http({
      method: 'JSONP',
      url:'https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=50&country=' + country + '&f_has_lyrics=1&apikey=7ead25d4f072f70cc89e665e62afb765&format=jsonp&callback=JSON_CALLBACK'
    }).then(function(response) {
      var parsedResponse = response.data.message.body.track_list;
      var tracks = [];
      for (var i = 0; i < parsedResponse.length; i++) {
        tracks.push({trackId: parsedResponse[i].track.track_id, trackName: parsedResponse[i].track.track_name, artist: parsedResponse[i].track.artist_name, artistId: parsedResponse[i].track.artist_id, lyricsId: parsedResponse[i].track.lyrics_id});
      }
      deferObj.resolve(tracks);
    });
    return deferObj.promise;
  };

  this.getLyrics = function(track) {
    var deferObj = $q.defer();
    $http({
      method: 'JSONP',
      url:'https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + track + '&apikey=7ead25d4f072f70cc89e665e62afb765&format=jsonp&callback=JSON_CALLBACK'
    }).then(function(response) {
      var parsedResponse = response.data.message.body.lyrics;

      // I think this part might be illegal. I'm cutting the copyright out because I hate it.
      for (var i = 0; i < parsedResponse.lyrics_body.length; i++) {
        if (parsedResponse.lyrics_body.charAt(i) === '*') {
          parsedResponse.lyrics_body = parsedResponse.lyrics_body.slice(0, i);
        }
      }

      var lyrics = {lyrics: parsedResponse.lyrics_body, lyricsId: parsedResponse.lyrics_id};

      deferObj.resolve(lyrics);
    });
    return deferObj.promise;
  };
});



//sanagie API key
//7ead25d4f072f70cc89e665e62afb765

//sanagie11 API key
//000d294990c747aff2964b698439f9be
