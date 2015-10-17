class Bob {
  hey(message) {
    if (message.endsWith('?')) {
      return 'Sure.';
    }

    if (message.toUpperCase() === message) {
      return 'Whoa, chill out!';
    }

    return 'Whatever.';
  }
}

export default Bob;

