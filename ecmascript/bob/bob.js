class Bob {
  hey(message) {
    if (message.toUpperCase() === message) {
      return 'Whoa, chill out!';
    }

    if (message.endsWith('?')) {
      return 'Sure.';
    }

    return 'Whatever.';
  }
}

export default Bob;

