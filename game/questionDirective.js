angular.module('app').directive('showQuestion', function () {
  return {
    template: '{{lyrics.lyrics}}'
  };
});
