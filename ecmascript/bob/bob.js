let isSilent = (m) => m.trim().length === 0;
let isShouting = (m) => m.toUpperCase() === m && m.match(/[A-Z]/);
let isAsking = (m) => m.endsWith('?');

class Bob {
  hey(message) {
    if (isSilent(message)) {
      return 'Fine. Be that way!';
    }

    if (isShouting(message)) {
      return 'Whoa, chill out!';
    }

    if (isAsking(message)) {
      return 'Sure.';
    }

    return 'Whatever.';
  }
}

export default Bob;

