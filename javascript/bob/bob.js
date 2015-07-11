//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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

function containsNumbers(string) {
    return string.match(/[0-9]/);
}

var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (!input.trim()) {
        return 'Fine. Be that way!';
    }

    if (onlyContainsUppercase(input)) {
        return 'Whoa, chill out!';
    }

    if (endsWith(input, '!')) {
        if (containsLowercase(input)) {
            return 'Whatever.';
        }

        return 'Whoa, chill out!';
    }

    if (endsWith(input, '\\?')) {
        // if (!containsLowercase(input) && !containsNumbers(input)) {
        //     return 'Whoa, chill out!';
        // }

        return 'Sure.';
    }

    return 'Whatever.';
};

module.exports = Bob;
