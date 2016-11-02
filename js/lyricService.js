angular.module('app').service('lyricService', function($http, $q, $sce) {

  $sce.trustAsResourceUrl('https://api.musixmatch.com/ws/1.1');


  this.getArtist = function(artist) {
    return $http({
      method: 'JSONP',
      url:'https://api.musixmatch.com/ws/1.1/artist.search?apikey=7ead25d4f072f70cc89e665e62afb765&format=jsonp&q_artist=' + artist + '&callback=JSON_CALLBACK'
      });
  };

  this.getChart = function(country) {
    return $http({
      method: 'JSONP',
      url:'https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=50&country=' + country + '&apikey=7ead25d4f072f70cc89e665e62afb765&format=jsonp&callback=JSON_CALLBACK'
      });
  };

  //Note that the f_has_lyrics command will filter for songs with available lyrics. 
  this.getTracks = function(country) {
    return $http({
      method: 'JSONP',
      url:'https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=50&country=' + country + '&f_has_lyrics=1&apikey=7ead25d4f072f70cc89e665e62afb765&format=jsonp&callback=JSON_CALLBACK'
      });
  };

  this.getLyrics = function(track) {
    return $http({
      method: 'JSONP',
      url:'https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + track + '&apikey=7ead25d4f072f70cc89e665e62afb765&format=jsonp&callback=JSON_CALLBACK'
      });
  };

});

//sanagie API key
//7ead25d4f072f70cc89e665e62afb765

//sanagie11 API key
//000d294990c747aff2964b698439f9be
