(function () {

  function Song() {
  }

  Song.prototype.verse = function (verseIndex) {
    var verse = '';
    verse += 'I know an old lady who swallowed a fly.\n';
    verse += 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    return verse;
  };

  module.exports = new Song();
})();
