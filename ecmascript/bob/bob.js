class Bob {
  hey(message) {
    if (message.trim().length === 0) {
      return 'Fine. Be that way!';
    }

    if (message.toUpperCase() === message && message.match(/[A-Z]/)) {
      return 'Whoa, chill out!';
    }

    if (message.endsWith('?')) {
      return 'Sure.';
    }

    return 'Whatever.';
  }
}

export default Bob;

