(function () {
    var CONDITIONS = [
        { question: isSayingNothing, response: 'Fine. Be that way!' },
        { question: isShouting, response: 'Whoa, chill out!' },
        { question: isAsking, response: 'Sure.' },
        { question: anything, response: 'Whatever.' }
    ];

    function isShouting(saying) {
        return saying === saying.toUpperCase() && saying.match(/[a-zA-Z]/);
    }

    function isAsking(saying) {
        return saying.indexOf('?') === saying.length - 1;
    }

    function isSayingNothing(saying) {
        return saying.length === 0;
    }

    function anything() {
        return true;
    }

    var Bob = function() {};

    Bob.prototype.hey = function(saying) {
        saying = saying.trim();

        var i,
            len,
            condition;
        for (i = 0, len = CONDITIONS.length; i < len; i++) {
            condition = CONDITIONS[i];
            if (condition.question(saying)) {
                return condition.response;
            }
        }
    };

    module.exports = Bob;
})();

