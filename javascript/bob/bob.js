(function () {
    var RESPONSES = {
        silence: 'Fine. Be that way!',
        shouting: 'Whoa, chill out!',
        asking: 'Sure.',
        other: 'Whatever.'
    };

    function isShouting(saying) {
        return saying === saying.toUpperCase() && saying.match(/[a-zA-Z]/);
    }

    function isAsking(saying) {
        return saying.indexOf('?') === saying.length - 1;
    }

    function isSayingNothing(saying) {
        return saying.length === 0;
    }

    var Bob = function() {};

    Bob.prototype.hey = function(input) {
        input = input.trim();

        if (isSayingNothing(input)) {
            return RESPONSES.silence;
        }

        if (isShouting(input)) {
            return RESPONSES.shouting;
        }

        if (isAsking(input)) {
            return RESPONSES.asking;
        }

        return RESPONSES.other;
    };

    module.exports = Bob;
})();

