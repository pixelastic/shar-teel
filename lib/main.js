const revHash = require('rev-hash');

module.exports = (list, key) => {
  const hash = revHash(key.toString());
  const number = parseInt(hash, 16);
  const length = list.length;
  const index = number % length;
  return list[index];
};
