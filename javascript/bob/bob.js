(function () {
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
            return 'Fine. Be that way!';
        }

        if (isShouting(input)) {
            return 'Whoa, chill out!';
        }

        if (isAsking(input)) {
            return 'Sure.';
        }

        return 'Whatever.';
    };

    module.exports = Bob;
})();

