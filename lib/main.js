const MD5 = require('md5.js');

module.exports = (list, key) => {
  // List should be an array. If not, we return it directly
  if (!Array.isArray(list)) {
    return list;
  }

  // Sort the list and remove duplicates
  const normalizedList = [...new Set(list)];
  normalizedList.sort();
  const length = normalizedList.length;

  // Convert the key to a short md5, then to a number
  const hash = new MD5().update(key.toString()).digest('hex').slice(0, 10);
  const number = parseInt(hash, 16);

  // Shard the list on the number found
  const index = number % length;
  return normalizedList[index];
};
