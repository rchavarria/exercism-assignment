function circularBuffer(size) {
  let stack = [];

  function isFull() {
    return stack.length === size;
  }

  function isEmpty() {
    return stack.length === 0;
  }

  function read() {
    if (isEmpty()) {
      throw bufferEmptyException();
    }

    return stack.shift();
  }

  function write(element) {
    if (!element) {
      return;
    }

    if (isFull()) {
      throw bufferFullException();
    }

    stack.push(element);
  }

  function clear() {
    stack = [];
  }

  function forceWrite(element) {
    if (isFull()) {
      read();
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

export { circularBuffer as default };
export { bufferFullException as bufferFullException };
export { bufferEmptyException as bufferEmptyException };

