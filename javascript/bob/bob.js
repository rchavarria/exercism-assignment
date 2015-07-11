function endsWith(string, ending) {
    var strRegExp = ending + '$';
    return string.match(new RegExp(strRegExp));
}

function containsLowercase(string) {
    return string.match(/[a-z]/);
}

function onlyContainsUppercase(string) {
    return string.match(/^[A-Z\s\?]+$/);
}

var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (!input.trim()) {
        return 'Fine. Be that way!';
    }

    if (onlyContainsUppercase(input)) {
        return 'Whoa, chill out!';
    }

    if (endsWith(input, '\\?')) {
        return 'Sure.';
    }

    if (containsLowercase(input)) {
        return 'Whatever.';
    }

    if (endsWith(input, '!')) {
        return 'Whoa, chill out!';
    }

    return 'Whatever.';
};

module.exports = Bob;
