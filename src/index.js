module.exports = function reverse (n) {
  const reverse = n.toString().split('').reverse();
  const num = parseInt(reverse.join(''));
  return num;
}
