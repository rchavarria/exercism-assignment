'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Triangle = (function () {
  function Triangle(a, b, c) {
    _classCallCheck(this, Triangle);

    this.sides = [a, b, c];
  }

  _createClass(Triangle, [{
    key: 'kind',
    value: function kind() {
      var _sides = _slicedToArray(this.sides, 3);

      var a = _sides[0];
      var b = _sides[1];
      var c = _sides[2];

      // check for some size
      if (a + b + c === 0) {
        throw Error('Triangle with no size is illegal');
      }

      // check for negative sides
      if (this.sides.some(function (s) {
        return s < 0;
      })) {
        throw Error('Triangle with negative sides is illegal');
      }

      // check for inequality
      if (a + b < c || a + c < b || b + c < a) {
        throw Error('Triangle sides must obbey inequality');
      }

      if (a === b && a === c && b === c) {
        return 'equilateral';
      }

      if (a !== b && a !== c && b !== c) {
        return 'scalene';
      }

      return 'isosceles';
    }
  }]);

  return Triangle;
})();

exports['default'] = Triangle;
module.exports = exports['default'];