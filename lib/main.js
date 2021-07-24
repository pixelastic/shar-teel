const MD5 = require('md5.js');

module.exports = (list, key) => {
  // List should be an array. If not, we return it directly
  if (!Array.isArray(list)) {
    return list;
  }
  const hash = new MD5().update(key.toString()).digest('hex').slice(0, 10);
  const number = parseInt(hash, 16);
  const length = list.length;
  const index = number % length;
  return list[index];
};
