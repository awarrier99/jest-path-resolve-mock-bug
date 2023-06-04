const path = require('path');

module.exports.testFunc = () => {
    const pathname = path.resolve(__dirname, 'example.js');
    console.log(pathname);
};

