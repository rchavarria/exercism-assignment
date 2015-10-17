class Bob {
  hey(message) {
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

