
exports.min = function min (array) {
  return (arguments.length && array.length !== 0) ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return (arguments.length && array.length != 0) ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
  return (arguments.length && array.length != 0) ? (array.reduce((acc, el) => acc + el) / array.length) : 0;
}
