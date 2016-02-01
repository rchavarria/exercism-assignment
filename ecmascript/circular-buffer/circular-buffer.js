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

  function checkFullness() {
    if (isFull()) {
      throw bufferFullException();
    }
  }

  function read() {
    checkEmptyness();
    return safeRead();
  }

  function write(element) {
    checkFullness();
    safeWrite(element);
  }

  function safeWrite(element) {
    if (element === undefined || element === null) {
      return;
    }

    queue.push(element);
  }

  function forceWrite(element) {
    if (isFull()) {
      safeRead();
    }
    safeWrite(element);
  }

  function clear() {
    queue = [];
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


