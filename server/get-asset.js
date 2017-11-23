const { resolve } = require('path');
const { readFile } = require('fs');

module.exports = async assetPath => {
  await readFile(resolve(assetPath), (err, data) => {
    if (err) {
      throw err;
    }

    return data;
  });
};
