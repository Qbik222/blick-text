"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var target = document.querySelector('.shimmerWave');
function splitTextToSpans(targetElement) {
  if (targetElement) {
    var text = targetElement.textContent;
    targetElement.innerHTML = '';
    var _iterator = _createForOfIteratorHelper(text),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var character = _step.value;
        var span = document.createElement('span');
        if (character === ' ') {
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = character;
        }
        targetElement.appendChild(span);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}
splitTextToSpans(target);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3BsaXRUZXh0VG9TcGFucyIsInRhcmdldEVsZW1lbnQiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJjaGFyYWN0ZXIiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQ3JELFNBQVNDLGdCQUFnQixDQUFDQyxhQUFhLEVBQUU7RUFDckMsSUFBSUEsYUFBYSxFQUFFO0lBQ2YsSUFBTUMsSUFBSSxHQUFHRCxhQUFhLENBQUNFLFdBQVc7SUFDdENGLGFBQWEsQ0FBQ0csU0FBUyxHQUFHLEVBQUU7SUFBQywyQ0FDUEYsSUFBSTtNQUFBO0lBQUE7TUFBMUIsb0RBQTRCO1FBQUEsSUFBbkJHLFNBQVM7UUFDZCxJQUFNQyxJQUFJLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJRixTQUFTLEtBQUssR0FBRyxFQUFFO1VBQ25CQyxJQUFJLENBQUNGLFNBQVMsR0FBRyxRQUFRO1FBQzdCLENBQUMsTUFBTTtVQUNIRSxJQUFJLENBQUNILFdBQVcsR0FBR0UsU0FBUztRQUNoQztRQUNBSixhQUFhLENBQUNPLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDO01BQ25DO0lBQUM7TUFBQTtJQUFBO01BQUE7SUFBQTtFQUNMO0FBQ0o7QUFDQU4sZ0JBQWdCLENBQUNILE1BQU0sQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaW1tZXJXYXZlJyk7XG5mdW5jdGlvbiBzcGxpdFRleHRUb1NwYW5zKHRhcmdldEVsZW1lbnQpIHtcbiAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICBjb25zdCB0ZXh0ID0gdGFyZ2V0RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZm9yIChsZXQgY2hhcmFjdGVyIG9mIHRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9ICcmbmJzcDsnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gY2hhcmFjdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbnNwbGl0VGV4dFRvU3BhbnModGFyZ2V0KTtcbiJdfQ==
