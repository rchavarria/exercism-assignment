function circularBuffer(size) {
  let queue = [];

  function isFull() {
    return queue.length === size;
  }

  function isEmpty() {
    return queue.length === 0;
  }

  function safeRead() {
    return queue.shift();
  }

  function checkEmptyness() {
    if (isEmpty()) {
      throw bufferEmptyException();
    }
  }

  function read() {
    checkEmptyness();
    return safeRead();
  }

  function write(element) {
    if (!element) {
      return;
    }

    if (isFull()) {
      throw bufferFullException();
    }

    queue.push(element);
  }

  function clear() {
    queue = [];
  }

  function forceWrite(element) {
    if (isFull()) {
      safeRead();
    }
    write(element);
  }

  return Object.freeze({ read, write, clear, forceWrite });
}

function bufferEmptyException() {
  return new Error('Buffer Empty Exception');
}

function bufferFullException() {
  return new Error('Buffer Full Exception');
}

export {
  circularBuffer as default,
  bufferFullException,
  bufferEmptyException
};


