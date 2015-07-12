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
    // TODO Mirando otras soluciones por ahí, solo se necesitan 4
    // returns. El que tiene truco es el de chillar
    // phrase === phrase.toUpperCase() && phrase.match(/[a-zA-Z]/)
    // es decir, que es igual que el upper case y estamos seguros de que
    // tiene letras.
    // Varias ideas:
    // 1. cada if tiene un método
    // 2. las respuestas están en un objeto
    // 3. cada método devuelve la respuesta o null
    // 4. hay un bucle para evitar tener tantos ifs
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
