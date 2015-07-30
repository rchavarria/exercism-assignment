(function () {

  function Song() {
  }

  Song.prototype.verse = function (verseIndex) {
    var verse = '';

    if (verseIndex === 1) {
      verse += 'I know an old lady who swallowed a fly.\n';
      verse += 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    }

    if (verseIndex === 2) {
      verse += 'I know an old lady who swallowed a spider.\n';
      verse += 'It wriggled and jiggled and tickled inside her.\n';
      verse += 'She swallowed the spider to catch the fly.\n';
      verse += 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    }

    if (verseIndex === 3) {
      verse += 'I know an old lady who swallowed a bird.\n';
      verse += "How absurd to swallow a bird!\n";
      verse += "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n";
      verse += "She swallowed the spider to catch the fly.\n";
      verse += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
    }

    return verse;
  };

  module.exports = new Song();
})();
